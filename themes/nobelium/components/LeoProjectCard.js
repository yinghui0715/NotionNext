import SmartLink from '@/components/SmartLink'

const LeoProjectCard = ({ project }) => (
  <article className='leo-project-card'>
    <div className='leo-project-meta'>
      <span className='leo-status'>{project.status}</span>
    </div>
    <h3>{project.title}</h3>
    <p>{project.summary}</p>
    <div className='leo-tag-list' aria-label='项目分类'>
      {project.category.map(category => (
        <span key={category}>{category}</span>
      ))}
    </div>
    <SmartLink
      href={`/projects/${project.slug}`}
      className='leo-text-link'
      aria-label={`查看项目：${project.title}`}
    >
      查看项目 <span aria-hidden='true'>↗</span>
    </SmartLink>
  </article>
)

export default LeoProjectCard
