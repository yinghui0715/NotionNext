import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import {
  getLeoProject,
  stripLeadingArticleEmoji
} from '@/lib/site/leoBrandContent'
import {
  getLeoColumnHref,
  getPublishedCategoryPosts,
  LEO_COLUMNS
} from '@/lib/site/leoEditorial'
import {
  IconArrowUpRight,
  IconBooks,
  IconChartLine,
  IconCode,
  IconCompass
} from '@tabler/icons-react'
import CONFIG from '../config'

const columnIcons = {
  technology: IconCode,
  growth: IconBooks,
  finance: IconChartLine,
  travel: IconCompass
}

export const LeoColumnGrid = ({ posts = [] }) => (
  <ul className='leo-column-grid'>
    {LEO_COLUMNS.map(column => {
      const ColumnIcon = columnIcons[column.visual]
      const article = getPublishedCategoryPosts(posts, column.name).find(
        post => post.href && post.title
      )

      return (
        <li
          key={column.name}
          className='leo-column-tile'
          data-visual={column.visual}
        >
          <SmartLink
            href={getLeoColumnHref(column.name)}
            className='leo-column-card'
          >
            <span className='leo-column-icon' aria-hidden='true'>
              <ColumnIcon size={25} stroke={1.65} focusable='false' />
            </span>
            <span className='leo-column-copy'>
              <span className='leo-column-name'>{column.name}</span>
              <span className='leo-column-description'>
                {column.description}
              </span>
            </span>
            <span className='leo-column-arrow' aria-hidden='true'>
              <IconArrowUpRight size={17} stroke={1.75} focusable='false' />
            </span>
          </SmartLink>
          {article && (
            <SmartLink href={article.href} className='leo-column-article'>
              <span>{stripLeadingArticleEmoji(article.title)}</span>
              <IconArrowUpRight aria-hidden='true' size={15} focusable='false' />
            </SmartLink>
          )}
        </li>
      )
    })}
  </ul>
)

const FeaturedProject = () => {
  const project = getLeoProject('ai-coding-status-bar')
  if (!project?.demo?.image) return null

  return (
    <SmartLink href={`/projects/${project.slug}`} className='leo-editorial-feature'>
      <div className='leo-editorial-feature-art'>
        <LazyImage
          src={project.demo.image}
          alt={project.demo.alt}
          width={390}
          height={637}
          className='leo-editorial-feature-image'
          priority
        />
      </div>
      <span className='leo-editorial-feature-caption'>
        <span>
          <small>精选项目</small>
          <strong>{project.title}</strong>
        </span>
        <IconArrowUpRight aria-hidden='true' size={20} focusable='false' />
      </span>
    </SmartLink>
  )
}

const LeoHomeIntro = ({ posts }) => (
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
      <FeaturedProject />
    </section>

    <section
      className='leo-home-section leo-editorial-section'
      id='start-here'
      aria-labelledby='columns-title'
    >
      <header className='leo-section-heading'>
        <h2 id='columns-title'>内容栏目</h2>
      </header>
      <LeoColumnGrid posts={posts} />
    </section>

    <header className='leo-latest-heading' id='latest-articles'>
      <h2>最新文章</h2>
    </header>
  </>
)

export const LeoHomeClosing = () => (
  <section className='leo-cta' aria-labelledby='cta-title'>
    <div>
      <h2 id='cta-title'>联系 Leo</h2>
    </div>
    <div className='leo-cta-actions'>
      <SmartLink href='/contact' className='leo-button leo-button-secondary'>
        联系与关注
      </SmartLink>
    </div>
  </section>
)

export default LeoHomeIntro
