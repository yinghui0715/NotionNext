import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { getLeoColumnHref, LEO_COLUMNS } from '@/lib/site/leoEditorial'
import CONFIG from '../config'

const Arrow = () => <span aria-hidden='true'>↗</span>

export const LeoColumnGrid = () => (
  <ul className='leo-column-grid'>
    {LEO_COLUMNS.map(column => (
      <li key={column.name}>
        <SmartLink
          href={getLeoColumnHref(column.name)}
          className='leo-column-card'
        >
          <span className='leo-column-name'>{column.name}</span>
          <span className='leo-column-description'>{column.description}</span>
          <Arrow />
        </SmartLink>
      </li>
    ))}
  </ul>
)

const LeoHomeIntro = () => (
  <>
    <section
      className='leo-hero leo-editorial-hero'
      aria-labelledby='leo-home-title'
    >
      <div className='leo-hero-copy'>
        <p className='leo-home-eyebrow'>
          {siteConfig('NOBELIUM_LEO_EYEBROW', null, CONFIG)}
        </p>
        <h1 id='leo-home-title'>
          {siteConfig('NOBELIUM_LEO_TITLE', null, CONFIG)}
        </h1>
        <p className='leo-home-description'>
          {siteConfig('NOBELIUM_LEO_DESCRIPTION', null, CONFIG)}
        </p>
        <div className='leo-hero-actions'>
          <SmartLink
            href='/#latest-articles'
            className='leo-button leo-button-primary'
          >
            阅读最新文章
          </SmartLink>
          <SmartLink href='/about' className='leo-button leo-button-secondary'>
            了解 Leo
          </SmartLink>
        </div>
      </div>
    </section>

    <section
      className='leo-home-section leo-editorial-section'
      id='start-here'
      aria-labelledby='columns-title'
    >
      <header className='leo-section-heading'>
        <h2 id='columns-title'>内容栏目</h2>
        <span>与「Leo数字工坊」公众号使用同一套栏目。</span>
      </header>
      <LeoColumnGrid />
    </section>

    <div className='leo-latest-heading' id='latest-articles'>
      <div>
        <h2>最新文章</h2>
      </div>
      <span aria-hidden='true'>LATEST ARTICLES</span>
    </div>
  </>
)

export const LeoHomeClosing = () => (
  <section className='leo-cta' aria-labelledby='cta-title'>
    <div>
      <h2 id='cta-title'>继续了解 Leo 数字工坊</h2>
      <span>看看我正在做的项目，或到联系页找到同名公众号。</span>
    </div>
    <div className='leo-cta-actions'>
      <SmartLink href='/projects' className='leo-button leo-button-secondary'>
        查看项目
      </SmartLink>
      <SmartLink href='/contact' className='leo-button leo-button-secondary'>
        联系与关注
      </SmartLink>
    </div>
  </section>
)

export default LeoHomeIntro
