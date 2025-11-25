# React H5 应用

基于 React + TypeScript + Vite 构建的现代化 H5 应用框架。

## 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全
- **Vite** - 极速的前端构建工具
- **TanStack Router** - 类型安全的路由管理
- **TanStack Query** - 强大的数据获取和状态管理
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Vitest** - 快速的单元测试框架
- **React Testing Library** - 组件测试工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
pnpm dev
```

应用将在 `http://localhost:3000` 启动

### 构建

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 测试

### 运行测试

```bash
pnpm test
```

### 测试 UI

```bash
pnpm test:ui
```

### 测试覆盖率

```bash
pnpm test:coverage
```

## 代码质量

### 代码检查

```bash
pnpm lint
```

### 代码格式化

```bash
pnpm format
```

## 项目结构

```
.
├── src/
│   ├── components/      # 可复用组件
│   ├── pages/          # 页面组件
│   ├── routes/         # TanStack Router 路由文件
│   ├── hooks/          # 自定义 Hooks (包含 TanStack Query hooks)
│   ├── lib/            # 工具库 (router, query-client)
│   ├── test/           # 测试配置
│   ├── main.tsx        # 应用入口
│   └── index.css       # 全局样式
├── public/             # 静态资源
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
├── vitest.config.ts    # Vitest 配置
└── tsconfig.json       # TypeScript 配置
```

## 特性

- ⚡️ 快速的开发体验（HMR）
- 🎨 现代化的 UI 设计（Tailwind CSS）
- 📱 响应式布局
- 🧪 完整的测试支持
- 🔧 代码质量工具（ESLint + Prettier）
- 🎯 TypeScript 类型安全
- 🚀 优化的生产构建
- 🛣️ 类型安全的路由（TanStack Router）
- 🔄 强大的数据管理（TanStack Query）
- 📦 自动代码分割和预加载

## 许可证

MIT

