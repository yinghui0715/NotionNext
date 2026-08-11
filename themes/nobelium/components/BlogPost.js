import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { stripLeadingArticleEmoji } from '@/lib/site/leoBrandContent'

const BlogPost = ({ post, variant }) => {
  const { NOTION_CONFIG } = useGlobal()
  const showPreview =
    siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post?.blockMap
  const displayTitle = stripLeadingArticleEmoji(post?.title)

  if (variant === 'home') {
    return (
      <article className='leo-article-card'>
        <SmartLink
          href={post?.href}
          className={`leo-article-visual ${post?.pageCoverThumbnail ? 'has-cover' : 'is-fallback'}`}
          aria-label={`阅读文章：${displayTitle}`}
        >
          {post?.pageCoverThumbnail ? (
            <LazyImage
              src={post.pageCoverThumbnail}
              alt={`${displayTitle}文章封面`}
              width={720}
              height={405}
              className='leo-article-cover-image'
            />
          ) : (
            <div className='leo-article-fallback-visual' aria-hidden='true'>
              <span>DAILY INTELLIGENCE</span>
              <strong>AI / SYSTEMS</strong>
              <i />
              <small>FIELD NOTES · {post?.publishDay || 'LATEST'}</small>
            </div>
          )}
        </SmartLink>
        <div className='leo-article-card-body'>
          <div className='leo-article-meta'>
            <span>{post?.category || post?.series || '文章'}</span>
            <time dateTime={post?.publishDay}>{post?.publishDay}</time>
          </div>
          <h2>
            <SmartLink href={post?.href}>{displayTitle}</SmartLink>
          </h2>
          {post?.summary && <p>{post.summary}</p>}
          <SmartLink
            href={post?.href}
            className='leo-text-link'
            aria-label={`阅读文章：${displayTitle}`}
          >
            阅读文章 <span aria-hidden='true'>↗</span>
          </SmartLink>
        </div>
      </article>
    )
  }

  return (
    <SmartLink href={post?.href}>
      <article key={post.id} className='mb-6 md:mb-8'>
        <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
          <h2 className='text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {displayTitle}
          </h2>
          <time className='flex-shrink-0 text-gray-600 dark:text-gray-400'>
            {post?.publishDay}
          </time>
        </header>
        <main>
          {!showPreview && (
            <p className='hidden md:block leading-8 text-gray-700 dark:text-gray-300'>
              {post.summary}
            </p>
          )}
          {showPreview && post?.blockMap && (
            <div className='overflow-ellipsis truncate'>
              <NotionPage post={post} />
              <hr className='border-dashed py-4' />
            </div>
          )}
        </main>
      </article>
    </SmartLink>
  )
}

export default BlogPost
