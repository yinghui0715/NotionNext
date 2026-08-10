import { getLeoStaticPageProps } from '@/lib/site/leoStaticPageProps'
import { ProjectsPage } from '@/themes/nobelium/components/LeoBrandPages'

export default ProjectsPage

export async function getStaticProps({ locale }) {
  return getLeoStaticPageProps({
    locale,
    seoMeta: {
      title: '项目 | Leo 数字工坊',
      description:
        '查看 Leo 数字工坊正在构建的 Engineering AI、AI Automation 与工程数字化项目。',
      slug: 'projects'
    }
  })
}
