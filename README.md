# Leo Digital Lab｜Leo 数字工坊

> Build Your Digital Future.

[正式网站](https://www.leodigitallab.com) · [联系 Leo](mailto:liyinghui.cn@outlook.com)

Leo Digital Lab 是 Leo 的专业个人网站，记录 **AI Automation × Engineering AI** 的公开构建过程，以及工作流自动化和数字系统实践。

## 网站职责

- 展示真实项目、原型和解决方案
- 发布 Engineering AI、AI Automation、Digital Systems 与 Build in Public 内容
- 为长期项目实践、合作咨询和产品验证提供稳定入口

## 技术栈

- Next.js 15、React 18、Tailwind CSS
- Notion 官方 API（服务端只读）
- Vercel Preview 与 Production
- Cloudflare 域名和私有 Notion 图片代理

## 内容与发布规则

Content Library 是文章的唯一事实来源，不在仓库中复制文章正文。公开内容必须同时满足：

1. `Status = Published`
2. `Publish Channel` 包含“网站”

渲染文章时，遇到 `🔒 内部发布工作区｜不对外展示` 必须跳过整个区块及其子内容，并且不把内部标题加入文章目录。

`NOTION_API_KEY` 仅供服务端读取使用。密钥不得写入代码、Markdown、日志或使用 `NEXT_PUBLIC_` 前缀。

## 本地开发

环境要求：Node.js 22、Yarn 1.22。

```bash
yarn install --frozen-lockfile
yarn dev
```

常用验证命令：

```bash
yarn lint
yarn type-check
yarn test
yarn build
```

环境变量只在本地私有环境或 Vercel 中配置，仓库只记录变量名称，不记录变量值。

## 发布流程

1. 从 `main` 创建功能分支。
2. 完成修改并运行测试与生产构建。
3. 创建 Draft PR，生成受保护的 Vercel Preview。
4. 在桌面端、移动端和深色模式下进行 Human Review。
5. 获得人工确认后才可合并并部署 Production。
6. 正式上线后核验 `https://www.leodigitallab.com`，并回填正式 URL。

详细流程见 [DEPLOYMENT.md](./DEPLOYMENT.md)。内容映射与回滚说明见 [docs/](./docs/)。

## 维护原则

- Human Review
- Single Source of Truth
- Upgrade First
- 所有重要改动必须可回滚
- 不删除现有文章，不擅自改变正式 URL、slug 或内容发布门

## 开源来源与许可证

本网站基于开源项目 [NotionNext](https://github.com/notionnext-org/NotionNext) 持续定制。原项目及本仓库适用 MIT License；原作者版权和许可文本保留在 [LICENSE](./LICENSE) 中。
