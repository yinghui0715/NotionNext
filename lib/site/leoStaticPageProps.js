import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'

export async function getLeoStaticPageProps({ locale, seoMeta, extra = {} }) {
  const props = await fetchGlobalAllData({
    from: `leo-page-${seoMeta.slug}`,
    locale
  })
  delete props.allPages

  return {
    props: {
      ...props,
      ...extra,
      seoMeta: {
        image: props.siteInfo?.pageCover,
        type: 'website',
        ...seoMeta
      }
    },
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}
