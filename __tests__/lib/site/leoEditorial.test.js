import {
  getLeoArticleColumn,
  getLeoCategoryRouteNames,
  getLeoColumnHref,
  getPublishedCategoryPosts,
  LEO_COLUMNS
} from '../../../lib/site/leoEditorial'

const article = (category, overrides = {}) => ({
  category,
  type: 'Post',
  status: 'Published',
  ...overrides
})

describe('Leo editorial columns', () => {
  it('uses the six public WeChat column names in order', () => {
    expect(LEO_COLUMNS.map(column => column.name)).toEqual([
      'AI 实验室',
      '自动化工坊',
      '数字生活',
      '效率工具箱',
      '技术实践',
      '每周精选'
    ])
    expect(decodeURI(getLeoColumnHref('AI 实验室'))).toBe('/category/AI 实验室')
  })

  it('groups published articles without changing legacy category results', () => {
    const aiNews = article('AI 前沿')
    const aiLab = article('AI实验室')
    const draft = article('AI实验室', { status: 'Human Review' })
    const page = article('AI 前沿', { type: 'Page' })
    const toolbox = article('效率工具')
    const pages = [aiNews, aiLab, draft, page, toolbox]

    expect(getPublishedCategoryPosts(pages, 'AI 实验室')).toEqual([aiNews, aiLab])
    expect(getPublishedCategoryPosts(pages, 'AI 前沿')).toEqual([aiNews])
    expect(getPublishedCategoryPosts(pages, '效率工具箱')).toEqual([toolbox])
    expect(getPublishedCategoryPosts(pages, '数字生活')).toEqual([])
    expect(getLeoArticleColumn(toolbox)?.name).toBe('效率工具箱')
  })

  it('includes the weekly series but does not treat daily posts as a weekly digest', () => {
    const weekly = article(null, { series: 'Leo Weekly Intelligence' })
    const daily = article('AI 前沿', { series: 'Leo Daily Intelligence' })
    expect(getPublishedCategoryPosts([weekly, daily], '每周精选')).toEqual([
      weekly
    ])
  })

  it('includes empty columns in static paths and deduplicates existing names', () => {
    const routes = getLeoCategoryRouteNames([
      { name: 'AI 前沿' },
      { name: '数字生活' }
    ])
    expect(routes).toHaveLength(7)
    expect(routes).toEqual(expect.arrayContaining(['AI 前沿', '每周精选']))
  })
})
