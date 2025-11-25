// 科大讯飞 IAT(实时听写) WebSocket 简易封装（适配微信/uni 小程序）
// 说明：
// - 使用 wss iat-api.xfyun.cn/v2/iat 协议，需 HMAC-SHA256 签名与 Base64
// - 依赖：无（三方加密实现内置纯 JS 版本，避免额外安装）
// - 采样：16000 PCM 单声道

/* eslint-disable @typescript-eslint/no-explicit-any */

const APP_ID = '9e061ca8';
const API_KEY = '10cedb87843781354740581d89959a31';
const API_SECRET = 'ZTI0NThhYWFlODk1MzY1NzBjOTc1ZjUw';

const HOST = 'iat-api.xfyun.cn';
const URL_PATH = '/v2/iat';

// Base64 标准编码（小程序无 btoa，使用纯 JS 实现）
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function base64EncodeBytes(arr: Uint8Array): string {
  let out = '';
  for (let i = 0; i < arr.length; i += 3) {
    const a = arr[i];
    const b = i + 1 < arr.length ? arr[i + 1] : 0;
    const c = i + 2 < arr.length ? arr[i + 2] : 0;
    const triplet = (a << 16) | (b << 8) | c;
    const enc1 = (triplet >> 18) & 63;
    const enc2 = (triplet >> 12) & 63;
    const enc3 = (triplet >> 6) & 63;
    const enc4 = triplet & 63;
    out += B64[enc1] + B64[enc2] + (i + 1 < arr.length ? B64[enc3] : '=') + (i + 2 < arr.length ? B64[enc4] : '=');
  }
  return out;
}
function base64Encode(bytes: ArrayBuffer | Uint8Array | number[]): string {
  const u8 = (bytes as any).byteLength !== undefined ? new Uint8Array(bytes as ArrayBuffer) : new Uint8Array(bytes as number[]);
  return base64EncodeBytes(u8);
}
function base64EncodeString(str: string): string {
  return base64Encode(utf8ToBytes(str));
}

// UTF8 编码
function utf8ToBytes(str: string): Uint8Array {
  const encoder = typeof TextEncoder !== 'undefined' ? new TextEncoder() : null as any;
  if (encoder) return encoder.encode(str);
  // 退化实现
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      bytes.push(c);
    } else if (c < 2048) {
      bytes.push((c >> 6) | 192, (c & 63) | 128);
    } else if ((c & 0xFC00) === 0xD800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      // surrogate pair
      c = 0x10000 + ((c & 0x3FF) << 10) + (str.charCodeAt(++i) & 0x3FF);
      bytes.push((c >> 18) | 240, ((c >> 12) & 63) | 128, ((c >> 6) & 63) | 128, (c & 63) | 128);
    } else {
      bytes.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
    }
  }
  return new Uint8Array(bytes);
}

// HMAC-SHA256（简化实现）
function hmacSha256(key: string, message: string): Uint8Array {
  const blockSize = 64; // bytes
  let k = utf8ToBytes(key);
  if (k.length > blockSize) {
    k = sha256(k); // key 过长先哈希
  }
  if (k.length < blockSize) {
    const pad = new Uint8Array(blockSize);
    pad.set(k);
    k = pad;
  }
  const oKeyPad = new Uint8Array(blockSize);
  const iKeyPad = new Uint8Array(blockSize);
  for (let i = 0; i < blockSize; i++) {
    oKeyPad[i] = 0x5c ^ k[i];
    iKeyPad[i] = 0x36 ^ k[i];
  }
  const inner = sha256(concatBytes(iKeyPad, utf8ToBytes(message)));
  const mac = sha256(concatBytes(oKeyPad, inner));
  return mac;
}

function concatBytes(a: Uint8Array, b: Uint8Array): Uint8Array {
  const out = new Uint8Array(a.length + b.length);
  out.set(a, 0);
  out.set(b, a.length);
  return out;
}

// SHA-256（小型实现，基于标准）
function sha256(message: Uint8Array): Uint8Array {
  // 参考实现（压缩为最小可用，非高性能）
  function rotr(n: number, x: number) { return (x >>> n) | (x << (32 - n)); }
  const K = new Uint32Array([
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ]);
  const h = new Uint32Array([0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19]);
  const l = message.length;
  const withOne = new Uint8Array(((l + 9 + 63) >> 6) << 6);
  withOne.set(message);
  withOne[l] = 0x80;
  const view = new DataView(withOne.buffer);
  view.setUint32(withOne.length - 4, l << 3, false);
  view.setUint32(withOne.length - 8, Math.floor(l / Math.pow(2, 29)), false);
  const w = new Uint32Array(64);
  for (let i = 0; i < withOne.length; i += 64) {
    for (let j = 0; j < 16; j++) w[j] = view.getUint32(i + j * 4, false);
    for (let j = 16; j < 64; j++) {
      const s0 = rotr(7, w[j - 15]) ^ rotr(18, w[j - 15]) ^ (w[j - 15] >>> 3);
      const s1 = rotr(17, w[j - 2]) ^ rotr(19, w[j - 2]) ^ (w[j - 2] >>> 10);
      w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
    }
    let a=h[0], b=h[1], c=h[2], d=h[3], e=h[4], f=h[5], g=h[6], hh=h[7];
    for (let j = 0; j < 64; j++) {
      const S1 = rotr(6,e)^rotr(11,e)^rotr(25,e);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (hh + S1 + ch + K[j] + w[j]) | 0;
      const S0 = rotr(2,a)^rotr(13,a)^rotr(22,a);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;
      hh = g; g = f; f = e; e = (d + temp1) | 0; d = c; c = b; b = a; a = (temp1 + temp2) | 0;
    }
    h[0]=(h[0]+a)|0; h[1]=(h[1]+b)|0; h[2]=(h[2]+c)|0; h[3]=(h[3]+d)|0; h[4]=(h[4]+e)|0; h[5]=(h[5]+f)|0; h[6]=(h[6]+g)|0; h[7]=(h[7]+hh)|0;
  }
  const out = new Uint8Array(32);
  const outView = new DataView(out.buffer);
  for (let i = 0; i < 8; i++) outView.setUint32(i * 4, h[i], false);
  return out;
}

function toGMTString(date: Date): string {
  return date.toUTCString();
}

function buildAuthUrl(): string {
  const date = toGMTString(new Date());
  const signatureOrigin = `host: ${HOST}\n` + `date: ${date}\n` + `GET ${URL_PATH} HTTP/1.1`;
  const signatureSha = hmacSha256(API_SECRET, signatureOrigin);
  const signature = base64Encode(signatureSha);
  const authorizationOrigin = `api_key="${API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = base64EncodeString(authorizationOrigin);
  const url = `wss://${HOST}${URL_PATH}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${HOST}`;
  return url;
}

export interface IflyAsrOptions {
  language?: 'zh_cn';
  accent?: 'mandarin';
}

export interface IflyAsrController {
  start: () => void;
  stop: () => void;
  destroy: () => void;
}

export function createIflyAsr(recorderManager: any, onResult: (text: string) => void, opts: IflyAsrOptions = {}): IflyAsrController {
  const url = buildAuthUrl();
  let socket: any = null;
  let started = false;
  let finalText = '';
  let opened = false;
  const frameQueue: Uint8Array[] = [];
  let handlerInterval: any = null;
  let sentFirst = false;
  let ended = false;

  const common = { app_id: APP_ID };
  const business = {
    language: opts.language || 'zh_cn',
    domain: 'iat',
    accent: opts.accent || 'mandarin',
    vad_eos: 5000,
  };

  function openSocket() {
    // 兼容各端：优先 wx.connectSocket，其次 uni.connectSocket
    socket = (typeof wx !== 'undefined' && (wx as any).connectSocket)
      ? (wx as any).connectSocket({ url })
      : (uni as any).connectSocket({ url });
    try { console.log('[ASR] ws url =>', url); } catch (e) {}

    const bindOnOpen = (cb: () => void) => {
      if (socket && typeof (socket as any).onOpen === 'function') (socket as any).onOpen(cb);
      else if (typeof wx !== 'undefined' && (wx as any).onSocketOpen) (wx as any).onSocketOpen(cb);
      else if ((uni as any).onSocketOpen) (uni as any).onSocketOpen(cb);
    };
    const bindOnMessage = (cb: (res:any)=>void) => {
      if (socket && typeof (socket as any).onMessage === 'function') (socket as any).onMessage(cb);
      else if (typeof wx !== 'undefined' && (wx as any).onSocketMessage) (wx as any).onSocketMessage(cb);
      else if ((uni as any).onSocketMessage) (uni as any).onSocketMessage(cb);
    };
    const bindOnClose = (cb: (res?:any)=>void) => {
      if (socket && typeof (socket as any).onClose === 'function') (socket as any).onClose(cb);
      else if (typeof wx !== 'undefined' && (wx as any).onSocketClose) (wx as any).onSocketClose(cb);
      else if ((uni as any).onSocketClose) (uni as any).onSocketClose(cb);
    };
    const bindOnError = (cb: (res:any)=>void) => {
      if (socket && typeof (socket as any).onError === 'function') (socket as any).onError(cb);
      else if (typeof wx !== 'undefined' && (wx as any).onSocketError) (wx as any).onSocketError(cb);
      else if ((uni as any).onSocketError) (uni as any).onSocketError(cb);
    };

    bindOnOpen(() => {
      try { console.log('[ASR] ws onOpen'); } catch (e) {}
      opened = true;
      started = true;
      // 启动定时器按队列发送
      if (handlerInterval) clearInterval(handlerInterval);
      handlerInterval = setInterval(() => {
        if (!opened) return;
        // 首帧
        if (!sentFirst && frameQueue.length > 0) {
          const first = frameQueue.shift();
          if (first) sendFrame(first.buffer as any, 0);
          sentFirst = true;
          return;
        }
        // 中间帧
        if (frameQueue.length > 0) {
          const chunk = frameQueue.shift();
          if (chunk) sendFrame(chunk.buffer as any, 1);
          return;
        }
        // 不在这里主动发送结束帧，结束帧由 stop()/onStop 统一发送，避免未连接时的发送错误
      }, 40);
    });
    bindOnMessage((res: any) => {
      try { console.log('[ASR] ws onMessage len=', (res?.data?.length || 0)); } catch (e) {}
      try {
        const data = JSON.parse(res.data);
        if (data.code === 0) {
          const ws = data.data && data.data.result && data.data.result.ws;
          if (Array.isArray(ws)) {
            const str = ws.map((w: any) => w.cw.map((c: any) => c.w).join('')).join('');
            finalText += str;
            onResult(finalText);
          }
        }
      } catch (e) { /* ignore */ }
    });
    bindOnClose(() => {
      try { console.log('[ASR] ws onClose'); } catch (e) {}
      started = false; opened = false;
      try { onResult('__ERROR__:socket_closed'); } catch (e) { /* ignore */ }
    });
    bindOnError((err: any) => {
      try { console.log('[ASR] ws onError:', err); } catch (e) {}
      started = false; opened = false;
      try { onResult(`__ERROR__:socket_error:${err?.errMsg || ''}`); } catch (e) { /* ignore */ }
    });
  }

  function sendFrame(buffer: ArrayBuffer, status: 0 | 1 | 2) {
    const audio = base64Encode(buffer);
    const frame: any = { data: { status, format: 'audio/L16;rate=16000', encoding: 'raw', audio } };
    if (status === 0) {
      frame.common = common;
      frame.business = business;
    }
    try { console.log('[ASR] sendFrame status=', status, 'len=', (buffer as any)?.byteLength || 0); } catch (e) {}
    const canSend = socket && ((socket as any).readyState === 1 || typeof (socket as any).send === 'function');
    if (canSend && opened) {
      (socket as any).send({ data: JSON.stringify(frame) });
    } else {
      try { onResult('__ERROR__:socket_not_open'); } catch (e) { /* ignore */ }
    }
  }

  // 录音帧发送
  recorderManager.onStart(() => { /* started hook */ });
  recorderManager.onError((err: any) => {
    // 将错误通过结果回调抛给上层，方便 toast
    try { onResult(`__ERROR__:${err?.errMsg || 'record_error'}`); } catch (e) { /* ignore */ }
  });

  recorderManager.onFrameRecorded((e: any) => {
    if (!started) return;
    const { frameBuffer, isLastFrame } = e;
    if (frameBuffer && (frameBuffer as ArrayBuffer).byteLength > 0) {
      const u8 = new Uint8Array(frameBuffer as ArrayBuffer);
      frameQueue.push(u8);
    }
    if (isLastFrame) {
      ended = true;
    }
  });
  recorderManager.onStop(() => {
    if (opened) {
      try { sendFrame(new ArrayBuffer(0), 2); } catch (e) { /* ignore */ }
    } else {
      try { onResult('__ERROR__:socket_closed'); } catch (e) { /* ignore */ }
    }
    opened = false;
  });

  return {
    async start() {
      finalText = '';
      opened = false;
      sentFirst = false;
      ended = false;
      frameQueue.length = 0;
      openSocket();
      // 先启动录音以触发授权弹窗
      let startedOk = false;
      const tryStart = (fmt: any) => new Promise<void>((resolve) => {
        try {
          recorderManager.start({ duration: 60000, sampleRate: 16000, numberOfChannels: 1, format: fmt, frameSize: 10 } as any);
          startedOk = true; resolve();
        } catch (e) { resolve(); }
      });
      await tryStart('pcm' as any);
      if (!startedOk) await tryStart('PCM' as any);
      if (!startedOk) {
        // 仅支持 PCM 才能送到科大讯飞实时听写
        try { onResult('__ERROR__:当前环境不支持PCM录音'); } catch (e) { /* ignore */ }
      }
    },
    stop() {
      try { recorderManager.stop(); } catch (e) { /* ignore */ }
      try { socket?.close({ code: 1000, reason: 'stop' }); } catch (e) { /* ignore */ }
      if (handlerInterval) { clearInterval(handlerInterval); handlerInterval = null; }
    },
    destroy() {
      try { recorderManager.stop(); } catch (e) { /* ignore */ }
      try { socket?.close({ code: 1000, reason: 'destroy' }); } catch (e) { /* ignore */ }
      if (handlerInterval) { clearInterval(handlerInterval); handlerInterval = null; }
    }
  };
}


