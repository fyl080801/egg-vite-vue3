# Eggjs + Vite + Vue3

使用 `Eggjs` `Vite` `Vue3` 搭建的示例项目

## 快速上手

### 启动调试

```bash
yarn install
```

```base
yarn run dev
```

### 线上运行

安装依赖

```bash
yarn install
```

发布

```bash
yarn run deploy
```

启动

```bash
yarn run start
```

停止

```bash
yarn run stop
```

## 项目说明

通过 egg 作为入口服务，经过中间件启动 vite 服务，视图中输出 vite 服务入口模块

### 目录结构

```text
root
├─ app              # 服务端目录
│  ├─ controller
│  │  └─ home.ts
│  ├─ middleware
│  │  └─ vite.ts
│  ├─ public
│  ├─ service
│  │  └─ Test.ts
│  └─ view
│     └─ index.html
├─ client           # 前端目录
│  ├─ components
│  │  ├─ DynamicView.vue
│  │  └─ Hello.vue
│  ├─ App.vue
│  └─ main.ts
├─ config           # 相关配置
│  ├─ config.default.ts
│  ├─ config.local.ts
│  ├─ config.prod.ts
│  └─ plugin.ts
├─ README.md
├─ appveyor.yml
├─ package.json
├─ tsconfig.json
└─ yarn.lock
```

### 界面说明

通过修改 `config/config.local.ts` 中 vite 配置更新前端界面相关功能

## 其他

项目集成 [egg-decorator-router](https://github.com/fyl080801/egg-decorator-router)、[tailwindcss](https://tailwindcss.com/)、[json-to-render](https://github.com/fyl080801/json-to-render)、element-plus
