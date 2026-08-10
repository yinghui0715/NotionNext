import { getLeoStaticPageProps } from '@/lib/site/leoStaticPageProps'
import { ContactPage } from '@/themes/nobelium/components/LeoBrandPages'

export default ContactPage

export async function getStaticProps({ locale }) {
  return getLeoStaticPageProps({
    locale,
    seoMeta: {
      title: '联系 | Leo 数字工坊',
      description:
        '围绕 AI Agents、工作流自动化、Engineering AI 与数字系统，交流一个真实、值得被解决的问题。',
      slug: 'contact'
    }
  })
}
