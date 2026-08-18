import SmartLink from '@/components/SmartLink'

const ProjectVisual = ({ project }) => (
  <div
    className={`leo-project-visual is-${project.visual}`}
    role='img'
    aria-label={`${project.title} 抽象流程示意图`}
  >
    <div className='leo-project-visual-header'>
      <span>{project.visualLabel}</span>
      <span aria-hidden='true'>•••</span>
    </div>
    <div className='leo-project-visual-stage' aria-hidden='true'>
      {project.visual === 'quotation' && (
        <>
          <div className='leo-quote-sheet'>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className='leo-review-panel'>
            <span>MATCH</span>
            <span>REVIEW</span>
            <span>RISK</span>
          </div>
        </>
      )}
      {project.visual === 'estimation' && (
        <>
          <div className='leo-estimate-bars'>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className='leo-estimate-total'>
            <span>ENGINEERING</span>
            <strong>MODEL</strong>
            <small>REVIEW REQUIRED</small>
          </div>
        </>
      )}
      {project.visual === 'operations' && (
        <div className='leo-flow-map'>
          <span>OFFER</span>
          <i />
          <span>BOM</span>
          <i />
          <span>REVIEW</span>
          <i />
          <span>DELIVERY</span>
        </div>
      )}
    </div>
  </div>
)

const LeoProjectCard = ({ project }) => (
  <article className='leo-project-card'>
    <ProjectVisual project={project} />
    <div className='leo-project-card-body'>
      <div className='leo-project-meta'>
        <span className='leo-status'>{project.status}</span>
        {project.updatedDate && (
          <time dateTime={project.updatedDate}>
            UPDATED {project.updatedDate.replaceAll('-', '.')}
          </time>
        )}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <dl className='leo-project-proof'>
        <div>
          <dt>当前进展</dt>
          <dd>{project.currentProgress}</dd>
        </div>
        <div>
          <dt>可公开证据</dt>
          <dd>{project.publicEvidence}</dd>
        </div>
        <div>
          <dt>下一步</dt>
          <dd>{project.nextMilestone}</dd>
        </div>
      </dl>
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
    </div>
  </article>
)

export default LeoProjectCard
