# Content Library Website Adapter

## Purpose

The Leo Digital Lab website reads publishable content directly from the existing Notion Content Library. The adapter preserves one master content record and avoids copying articles into the legacy NotionNext database.

## Source

- Default source: Leo Digital Lab Content Library
- Default database page ID: `3aa1f47a761180c682f1e4dc51afee42`
- Legacy rollback source: the previous `NOTION_PAGE_ID`

Set `NEXT_PUBLIC_CONTENT_SOURCE=legacy` to restore the legacy source without reverting code.

## Field mapping

| Content Library | Website model                             |
| --------------- | ----------------------------------------- |
| Name            | title                                     |
| Status          | status                                    |
| Summary         | summary                                   |
| Category        | category                                  |
| Publish Date    | date                                      |
| Publish Channel | publishChannels                           |
| Content ID      | slug, with the Notion page ID as fallback |
| Content Type    | contentType                               |
| Series          | series                                    |

All Content Library records are represented as website posts. Their Notion page content remains the article body.

## Publication gate

Production requires both conditions:

1. `Status = Published`
2. `Publish Channel` contains `网站`

The same gate applies to Preview and Production. Preview protection provides Human Review without weakening the content query.

`NOTION_API_KEY` is a server-only secret used by the official Notion API. It must be configured as a sensitive Vercel environment variable for Preview and Production and must never use a `NEXT_PUBLIC_` prefix.
Content Library mode fails closed when this variable is missing; it does not fall back to anonymous database access.

## Rollback

Set these environment values and redeploy:

```text
NEXT_PUBLIC_CONTENT_SOURCE=legacy
NOTION_PAGE_ID=<legacy NotionNext database page ID>
```

No Content Library data is modified by the adapter.
