# My AI App

这是一个基于 Next.js 和 Node.js (Koa) 构建的全栈 AI 应用。

## 项目结构

- **frontend/**: Next.js 14+ (App Router), Tailwind CSS (v4), Shadcn UI, Vercel AI SDK, TanStack Query.
- **backend/**: Node.js (Koa), TypeScript, Prisma (ORM), Swagger UI.

## 🚀 快速开始 (Getting Started)

建议打开两个终端窗口，分别启动后端和前端。

### 1. 启动后端 (Backend)

后端服务运行在 `http://localhost:8000`。

```bash
# 进入后端目录
cd backend

# 安装依赖
npm install

# 确保数据库已运行（参考下方数据库章节）并执行 Prisma 生成/迁移
# npx prisma generate
# npx prisma migrate dev

# 启动开发服务器
npm run dev
```

启动成功后，访问 [http://localhost:8000/docs](http://localhost:8000/docs) 查看 API 文档。

### 2. 启动前端 (Frontend)

前端应用运行在 `http://localhost:3001`。

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动成功后，访问 [http://localhost:3001](http://localhost:3001) 查看应用。

## 开发说明

- **前端开发**: 编辑 `frontend/app` 下的文件，页面会自动热更新。CSS 变量配置在 `frontend/app/globals.css`。
- **后端开发**: 编辑 `backend/src` 下的文件，`nodemon` 会自动重启服务。
- **跨域 (CORS)**: 后端已配置允许本地前端的跨域请求。

## 🗄️ 数据库 (Database)

本项目使用 **PostgreSQL** (带 `pgvector` 插件支持向量搜索)，通过 Docker 运行。

### 1. 启动数据库

在项目根目录下运行：

```bash
docker-compose up -d
```

### 2. 连接信息

| 服务           | 地址/名称                                      | 账号                | 密码       | 备注                  |
| :------------- | :--------------------------------------------- | :------------------ | :--------- | :-------------------- |
| **PostgreSQL** | `localhost:5432`                               | `user`              | `password` | 数据库名: `my_ai_app` |
| **pgAdmin**    | [http://localhost:5050](http://localhost:5050) | `admin@example.com` | `admin`    | Web 管理界面          |

### 3. 如何在 pgAdmin 中连接数据库

1. 登录 pgAdmin (`admin@example.com` / `admin`).
2. 右键 "Servers" -> "Register" -> "Server".
3. **General** 标签: Name 填 `Local DB`.
4. **Connection** 标签:
   - Host name/address: `db` (这是 Docker 内部网络的主机名)
   - Port: `5432`
   - Maintenance database: `my_ai_app`
   - Username: `user`
   - Password: `password`
5. 点击 "Save".
