# Leo Digital Lab 发布流程

本流程适用于 `https://www.leodigitallab.com`。任何改动都先进入受保护的 Vercel Preview，未经 Human Review 不得合并或部署 Production。

## 发布前

1. 确认工作分支不是 `main`。
2. 检查 `git status`，避免覆盖无关改动。
3. 运行 `yarn lint`、`yarn type-check`、`yarn test` 和 `yarn build`。
4. 确认 Content Library 发布门和内部工作区过滤测试仍通过。

## Preview 验证

1. 创建 Draft PR 并等待 Vercel Preview 完成。
2. 核验首页、项目页、文章列表、文章正文、404、导航和页脚。
3. 检查 360px、390px、430px、768px、1280px 和 1440px。
4. 检查浅色、深色、长中文标题、图片、内部链接和控制台错误。
5. 检查 title、description、author、keywords、canonical、Open Graph、Twitter Card 和 JSON-LD。

## 内容安全

- Content Library 是唯一事实来源。
- 仅发布 `Status = Published` 且 `Publish Channel` 包含“网站”的内容。
- 跳过 `🔒 内部发布工作区｜不对外展示` 及其全部子内容和目录标题。
- 不在 PR、日志或聊天中读取、输出或传递密钥值。

## Production

仅在 Leo 明确确认后：

1. 合并已审核 PR。
2. 等待 Vercel Production 部署完成。
3. 核验正式域名和关键页面。
4. 将最终正式 URL 回填到交付记录。

## 回滚

- 代码问题：在 GitHub/Vercel 回滚到最近一次稳定部署。
- 内容问题：先在 Notion 取消文章发布条件，再触发重新部署或刷新。
- 数据源问题：按 [Content Library Adapter](./docs/content-library-adapter.md) 中的旧数据源方案回滚。
