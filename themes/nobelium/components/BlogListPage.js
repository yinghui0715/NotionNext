import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import BlogPost from './BlogPost'

export const BlogListPage = props => {
  const { page = 1, posts, postCount, variant } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const currentPage = +page

  const showPrev = currentPage > 1
  const showNext = currentPage < totalPage && posts?.length > 0
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  if (variant === 'home') {
    return (
      <section className='leo-articles-section' aria-label='最新文章'>
        <div
          id='posts-wrapper'
          className={`leo-article-grid ${posts?.length === 1 ? 'is-single' : ''}`}
        >
          {posts?.length > 0 ? (
            posts.map(post => (
              <BlogPost key={post.id} post={post} variant='home' />
            ))
          ) : (
            <p className='leo-empty-state'>最新文章正在整理中。</p>
          )}
        </div>
        <SmartLink href='/archive' className='leo-section-link'>
          查看全部文章 <span aria-hidden='true'>↗</span>
        </SmartLink>
      </section>
    )
  }

  return (
    <div className='w-full md:pr-12 my-6'>
      <div id='posts-wrapper'>
        {posts?.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      <div className='flex justify-between text-xs'>
        <SmartLink
          href={{
            pathname:
              currentPage - 1 === 1
                ? `${pagePrefix}/`
                : `${pagePrefix}/page/${currentPage - 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={`${showPrev ? '  ' : ' invisible block pointer-events-none '}no-underline py-2 px-3 rounded`}
        >
          <button rel='prev' className='block cursor-pointer'>
            ← {locale.PAGINATION.PREV}
          </button>
        </SmartLink>
        <SmartLink
          href={{
            pathname: `${pagePrefix}/page/${currentPage + 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={`${showNext ? '  ' : 'invisible pointer-events-none '}  no-underline py-2 px-3 rounded`}
        >
          <button rel='next' className='block cursor-pointer'>
            {locale.PAGINATION.NEXT} →
          </button>
        </SmartLink>
      </div>
    </div>
  )
}
