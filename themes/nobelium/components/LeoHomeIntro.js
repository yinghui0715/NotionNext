import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import {
  LEO_FOCUS_AREAS,
  LEO_POSITIONING,
  LEO_PROJECTS,
  LEO_START_HERE
} from '@/lib/site/leoBrandContent'
import CONFIG from '../config'
import LeoProjectCard from './LeoProjectCard'

const Arrow = () => <span aria-hidden='true'>↗</span>

const HeroVisual = () => (
  <div
    className='leo-hero-visual'
    role='img'
    aria-label='Engineering AI 从项目输入到审查、判断与执行的抽象流程图'
  >
    <div className='leo-hero-visual-header'>
      <span>ENGINEERING AI / LIVE BUILD</span>
      <span className='leo-visual-live'>BUILDING</span>
    </div>
    <div className='leo-hero-visual-canvas' aria-hidden='true'>
      <div className='leo-visual-source'>
        <span>PROJECT INPUT</span>
        <i />
        <i />
        <i />
      </div>
      <div className='leo-visual-connector'>
        <i />
        <i />
        <i />
      </div>
      <div className='leo-visual-agent'>
        <span>AI AGENT</span>
        <strong>REVIEW</strong>
        <small>COMPARE · REASON · FLAG</small>
      </div>
      <div className='leo-visual-output'>
        <span>OUTPUT</span>
        <b>READY</b>
        <small>FOR HUMAN REVIEW</small>
      </div>
    </div>
    <div className='leo-hero-visual-footer'>
      <span>Human review remains in the loop.</span>
      <span>01 / 03</span>
    </div>
  </div>
)

const FocusItem = ({ index, title, description }) => (
  <article className='leo-focus-item'>
    <span className='leo-focus-index'>{index}</span>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </article>
)

const SectionHeading = ({ id, eyebrow, title, description }) => (
  <header className='leo-section-heading'>
    <p>{eyebrow}</p>
    <h2 id={id}>{title}</h2>
    {description && <span>{description}</span>}
  </header>
)

const LeoHomeIntro = () => {
  return (
    <>
      <section className='leo-hero' aria-labelledby='leo-home-title'>
        <div className='leo-hero-copy'>
          <div className='leo-hero-kicker'>
            <p className='leo-home-eyebrow'>
              {siteConfig('NOBELIUM_LEO_EYEBROW', null, CONFIG)}
            </p>
            <span>{LEO_POSITIONING.identity}</span>
          </div>
          <h1 id='leo-home-title'>
            {siteConfig('NOBELIUM_LEO_TITLE', null, CONFIG)}
          </h1>
          <p className='leo-home-description'>
            {siteConfig('NOBELIUM_LEO_DESCRIPTION', null, CONFIG)}
          </p>
          <div className='leo-hero-actions' aria-label='首屏操作'>
            <SmartLink
              href='/projects'
              className='leo-button leo-button-primary'
            >
              查看项目
            </SmartLink>
            <SmartLink
              href='/#start-here'
              className='leo-button leo-button-secondary'
            >
              从这里开始
            </SmartLink>
            <SmartLink href='/about' className='leo-text-link leo-about-link'>
              了解 Leo <Arrow />
            </SmartLink>
          </div>
        </div>
        <HeroVisual />
        <p className='leo-slogan'>Build Your Digital Future.</p>
      </section>

      <section className='leo-home-section' aria-labelledby='focus-title'>
        <SectionHeading id='focus-title' eyebrow='FOCUS' title='核心方向' />
        <div className='leo-focus-grid'>
          {LEO_FOCUS_AREAS.map(item => (
            <FocusItem key={item.index} {...item} />
          ))}
        </div>
      </section>

      <section className='leo-home-section' aria-labelledby='projects-title'>
        <SectionHeading
          id='projects-title'
          eyebrow='FEATURED PROJECTS'
          title='精选项目'
          description='从真实问题出发，持续公开构建。'
        />
        <div className='leo-project-grid'>
          {LEO_PROJECTS.map(project => (
            <LeoProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <SmartLink href='/projects' className='leo-section-link'>
          查看全部项目 <Arrow />
        </SmartLink>
      </section>

      <section
        className='leo-home-section leo-start-section'
        id='start-here'
        aria-labelledby='start-title'
      >
        <SectionHeading
          id='start-title'
          eyebrow='START HERE'
          title='从这里开始'
          description='第一次来到这里，可以沿着这三条路径了解 Leo 数字工坊。'
        />
        <div className='leo-start-grid'>
          {LEO_START_HERE.map(item => {
            const content = (
              <>
                <span className='leo-start-index'>{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {item.status ? (
                  <span className='leo-coming-soon'>{item.status}</span>
                ) : (
                  <Arrow />
                )}
              </>
            )
            return item.href ? (
              <SmartLink
                key={item.index}
                href={item.href}
                className='leo-start-item'
              >
                {content}
              </SmartLink>
            ) : (
              <div key={item.index} className='leo-start-item is-disabled'>
                {content}
              </div>
            )
          })}
        </div>
      </section>

      <div className='leo-latest-heading' id='latest-articles'>
        <div>
          <span>最新文章</span>
          <p>项目实践、自动化方法与数字系统记录。</p>
        </div>
        <span aria-hidden='true'>LATEST ARTICLES</span>
      </div>
    </>
  )
}

export const LeoHomeClosing = () => (
  <>
    <section
      className='leo-home-section leo-about-section'
      aria-labelledby='about-title'
    >
      <p className='leo-home-eyebrow'>ABOUT LEO</p>
      <h2 id='about-title'>工程经验，是我构建 AI 解决方案的起点</h2>
      <p>
        我是一名工程师，也是一名长期实践者。我关注的不是单独使用某个 AI
        工具，而是如何理解真实流程、识别重复工作，并把它们构建成能够持续运行的解决方案。
      </p>
      <SmartLink href='/about' className='leo-button leo-button-secondary'>
        关于我
      </SmartLink>
    </section>

    <section className='leo-cta' aria-labelledby='cta-title'>
      <div>
        <p>WORK WITH LEO</p>
        <h2 id='cta-title'>有一个值得被自动化的真实问题？</h2>
        <span>
          如果你正在处理重复的信息整理、文档审查、工程评估或业务流程，可以与我交流。
        </span>
      </div>
      <div className='leo-cta-actions'>
        <SmartLink href='/contact' className='leo-button leo-button-primary'>
          联系我
        </SmartLink>
        <SmartLink href='/projects' className='leo-button leo-button-secondary'>
          查看项目
        </SmartLink>
      </div>
    </section>
  </>
)

export default LeoHomeIntro
