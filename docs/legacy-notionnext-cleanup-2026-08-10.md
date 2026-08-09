# Legacy NotionNext Cleanup Record

Date: 2026-08-10

## Scope

This record documents the reversible cleanup performed before the Leo Digital Lab redesign goes live.

No database schema, configuration center, view, or required NotionNext property is removed. Legacy template records are changed to `Invisible` first, so they remain recoverable in Notion.

## Retained

- Database: `NotionNext Publishing Archive`
- Data source: `collection://d201f47a-7611-8211-9af7-87d5f1ed7da1`
- Configuration center and all required database properties
- Existing database views

## Hidden legacy content

### Template posts

- 模板说明 (`guide`)
- 示例文章 (`example-1`)
- 加锁文章 - 密码123456 (`example-2`)
- EMPTY-ARTICLE (`example-3`)
- 绑定成功测试 (`example-4`)
- All blank/example posts (`example-5` through `example-10`)
- Untitled blank post
- 未发布文章 (`invisible`)

### Template navigation and pages

- 公告
- English
- Github
- 友链
- 关于
- 首页、搜索、友情链接、建站教程、往期整理、关于我
- NotionNext介绍、NotionNext操作说明
- 写作是最值得投资的技能
- 历史归档、文章分类、文章标签

## Recovery

To restore any record, change its Notion `status` from `Invisible` to `Published`. The original page content and metadata remain intact.

Physical deletion should only be considered after the redesigned production site has remained stable and the retained content has been reviewed again.

## Active site overrides

- `THEME`: `nobelium`
- `LANG`: `zh-CN`
- Legacy test `GLOBAL_JS`: disabled

These values are stored in the Notion `CONFIG-TABLE`, whose enabled entries override Vercel environment variables and repository defaults.
