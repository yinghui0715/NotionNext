import { getLeoProject, LEO_PROJECTS } from '@/lib/site/leoBrandContent'
import { getLeoStaticPageProps } from '@/lib/site/leoStaticPageProps'
import { ProjectDetailPage } from '@/themes/nobelium/components/LeoBrandPages'

export default ProjectDetailPage

export function getStaticPaths() {
  return {
    paths: LEO_PROJECTS.map(project => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params, locale }) {
  const project = getLeoProject(params.slug)
  if (!project) return { notFound: true }

  return getLeoStaticPageProps({
    locale,
    extra: { project },
    seoMeta: {
      title: `${project.title} | Leo 数字工坊`,
      description: project.summary,
      slug: `projects/${project.slug}`
    }
  })
}
