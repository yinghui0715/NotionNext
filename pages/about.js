import { getLeoStaticPageProps } from '@/lib/site/leoStaticPageProps'
import { AboutPage } from '@/themes/nobelium/components/LeoBrandPages'

export default AboutPage

export async function getStaticProps({ locale }) {
  return getLeoStaticPageProps({
    locale,
    seoMeta: {
      title: '关于 Leo | Leo 数字工坊',
      description:
        '了解 Leo 如何把工程经验、自动化工具和 AI Agents 结合起来，持续构建真实、可复用的数字解决方案。',
      slug: 'about'
    }
  })
}
