import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { resolveContactEmail } from '@/lib/plugins/mailEncrypt'
import { LEO_PROJECTS } from '@/lib/site/leoBrandContent'
import LeoProjectCard from './LeoProjectCard'

const PageHeader = ({ eyebrow, title, description, children }) => (
  <header className='leo-page-header'>
    <p className='leo-page-eyebrow'>{eyebrow}</p>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </header>
)

export const ProjectsPage = () => (
  <div className='leo-page'>
    <PageHeader
      eyebrow='PROJECTS'
      title='从真实问题出发，构建可复用的解决方案'
      description='这里记录我如何从真实问题出发，构建 AI、自动化和工程数字化解决方案。项目状态会如实标注，不把原型描述成完成品。'
    />
    <section className='leo-page-grid' aria-label='项目列表'>
      {LEO_PROJECTS.map(project => (
        <LeoProjectCard key={project.slug} project={project} />
      ))}
    </section>
  </div>
)

const projectRows = [
  ['背景', 'background'],
  ['要解决的问题', 'problem'],
  ['原有流程', 'previousWorkflow'],
  ['解决方案', 'solution'],
  ['工作流程或架构', 'architecture'],
  ['处理流程', 'process'],
  ['Demo 或截图', 'demo'],
  ['当前结果', 'result'],
  ['局限与风险', 'limitations'],
  ['下一步计划', 'nextStep']
]

const ProjectDetailValue = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <ol className='leo-project-detail-list'>
        {value.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }

  return value || '公开版本正在整理中。'
}

export const ProjectDetailPage = ({ project }) => (
  <article className='leo-page'>
    <PageHeader
      eyebrow={`PROJECT · ${project.status}`}
      title={project.title}
      description={project.summary}
    >
      <div className='leo-tag-list' aria-label='项目分类'>
        {project.category.map(category => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </PageHeader>

    <div className='leo-project-detail'>
      <dl>
        {projectRows.map(([label, key]) => (
          <div className='leo-project-detail-row' key={key}>
            <dt>{label}</dt>
            <dd>
              <ProjectDetailValue value={project[key]} />
            </dd>
          </div>
        ))}
      </dl>
      <aside className='leo-project-aside'>
        <p>
          本页只展示可公开、匿名化的信息，不包含客户名称、公司内部文件、报价或设备序列号。
        </p>
        <div className='leo-tag-list' aria-label='技术与方法'>
          {project.technology.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <SmartLink href='/contact' className='leo-button leo-button-primary'>
          交流类似问题
        </SmartLink>
      </aside>
    </div>
  </article>
)

export const AboutPage = () => (
  <div className='leo-page'>
    <PageHeader
      eyebrow='ABOUT LEO'
      title='工程经验，是我构建 AI 解决方案的起点'
      description='我是一名工程师，也是一名长期实践者。Leo 数字工坊记录我把工程经验、自动化工具和 AI Agents 结合起来的长期实践。'
    />
    <div className='leo-prose'>
      <section>
        <h2>我关注什么</h2>
        <p>
          我相信，AI
          的价值不只是生成内容，而是进入真实流程，帮助人们更好地理解信息、做出判断并完成工作。
        </p>
      </section>
      <section>
        <h2>为什么是 AI Automation × Engineering AI</h2>
        <p>
          工程工作让我持续接触文档审查、设备选择、工作量估算和项目交付。它们既需要专业判断，也包含大量可以被结构化和自动化的重复流程。
        </p>
      </section>
      <section>
        <h2>当前正在构建</h2>
        <p>
          目前重点包括供应商报价审查 Agent、工程工作量估算方法，以及 Engineering
          Operations AI 原型。项目会按 Building、Prototype 或 Case Study
          如实标注。
        </p>
      </section>
      <section>
        <h2>长期方向</h2>
        <p>
          Leo
          数字工坊将持续公开构建真实项目、沉淀工作流方法，并逐步验证哪些能力适合成为模板、咨询服务或长期产品。
        </p>
      </section>
      <div className='leo-hero-actions'>
        <SmartLink href='/projects' className='leo-button leo-button-primary'>
          查看项目
        </SmartLink>
        <SmartLink href='/contact' className='leo-button leo-button-secondary'>
          联系我
        </SmartLink>
      </div>
    </div>
  </div>
)

export const ContactPage = () => {
  const email = resolveContactEmail(siteConfig('CONTACT_EMAIL'))
  const wechatName = siteConfig('CONTACT_WECHAT_NAME')
  const wechatQr = siteConfig('CONTACT_WECHAT_QR')
  const channels = [
    [email, email ? `mailto:${email}` : ''],
    ['GitHub', siteConfig('CONTACT_GITHUB')],
    ['LinkedIn', siteConfig('CONTACT_LINKEDIN')],
    ['X / Twitter', siteConfig('CONTACT_TWITTER')]
  ].filter(([, href]) => Boolean(href))

  return (
    <div className='leo-page'>
      <PageHeader
        eyebrow='CONTACT'
        title='交流一个真实、值得被解决的问题'
        description='如果你正在处理重复的信息整理、文档审查、工程评估或业务流程，可以从问题、现有流程和期望结果开始描述。'
      />
      <div className='leo-prose'>
        <section>
          <h2>适合交流的方向</h2>
          <p>
            AI Agents、工作流自动化、Engineering
            AI、工程工具、数字系统，以及仍处于早期验证阶段的产品想法。
          </p>
        </section>
        <section>
          <h2>信息边界</h2>
          <p>
            请不要发送客户机密、未脱敏报价、设备序列号或公司内部文件。可以先用匿名化的流程描述说明问题。
          </p>
        </section>
        <section className='leo-contact-section'>
          <h2>公开联系方式</h2>
          <div className='leo-contact-grid'>
            <div className='leo-contact-methods'>
              <p>
                欢迎通过邮箱交流具体问题。请简单说明背景、现有流程和期望结果。
              </p>
              <div className='leo-hero-actions'>
                {channels.map(([label, href]) =>
                  href.startsWith('mailto:') ? (
                    <a
                      key={label}
                      href={href}
                      className='leo-button leo-button-secondary'
                    >
                      {label}
                    </a>
                  ) : (
                    <SmartLink
                      key={label}
                      href={href}
                      className='leo-button leo-button-secondary'
                    >
                      {label}
                    </SmartLink>
                  )
                )}
              </div>
            </div>
            {wechatName && wechatQr && (
              <figure className='leo-wechat-card'>
                <LazyImage
                  priority
                  src={wechatQr}
                  width={1280}
                  height={1280}
                  className='leo-wechat-qr'
                  alt={`${wechatName}微信公众号二维码`}
                />
                <figcaption>
                  <strong>{wechatName}</strong>
                  <span>微信扫码关注公众号</span>
                </figcaption>
              </figure>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
