/* Options:
Date: 2023-01-16 14:36:21
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/mp/api

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetMPJsapiInfoReq
ExcludeTypes: BaseResponse,IReturn
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";

export class GetMPJsapiInfoRes extends BaseResponse
{
    public isDebug?: boolean;
    public wxAppId?: string;
    public timestamp?: number;
    public nonceStr?: string;
    public signature?: string;

    public constructor(init?: Partial<GetMPJsapiInfoRes>) { super(init); (Object as any).assign(this, init); }
}

/**
* 获取JSAPI的签名
*/
// @Route("/wechat/mpjsapiinfo", "POST, OPTIONS")
// @Api(Description="获取JSAPI的签名")
export class GetMPJsapiInfoReq implements IReturn<GetMPJsapiInfoRes>
{
    public wxAppId?: string;
    public targetUrl?: string;

    public constructor(init?: Partial<GetMPJsapiInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMPJsapiInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMPJsapiInfoRes(); }
}

