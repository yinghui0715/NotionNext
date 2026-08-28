# Leo Digital Lab 开发说明

## 环境

- Node.js 22
- Yarn 1.22
- 环境变量保存在本地私有环境或 Vercel，不提交真实值

```bash
yarn install --frozen-lockfile
yarn dev
```

## 修改原则

- 优先复用现有组件、配置和设计变量。
- 不改变正式域名、现有文章 URL、slug 或 Notion Content Library 架构。
- 不把文章正文复制到仓库。
- 任何发布行为必须经过 Draft PR、Preview 和 Human Review。
- 无关依赖升级、主题重构和大范围格式化应放在独立 PR。

## 提交前验证

```bash
yarn lint
yarn type-check
yarn test
yarn build
```

若某个脚本因项目自身缺失配置而无法运行，应在 PR 中明确记录，不能静默跳过。
