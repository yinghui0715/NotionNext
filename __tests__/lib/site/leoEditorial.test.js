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
  it('uses exactly four primary columns in order', () => {
    expect(LEO_COLUMNS.map(column => column.name)).toEqual([
      'AI 与技术',
      '效率与成长',
      '投资与财务',
      '生活与旅行'
    ])
    expect(decodeURI(getLeoColumnHref('AI 与技术'))).toBe('/category/AI 与技术')
  })

  it('groups published articles without changing legacy category results', () => {
    const aiNews = article('AI 前沿')
    const aiLab = article('AI实验室')
    const draft = article('AI实验室', { status: 'Human Review' })
    const page = article('AI 前沿', { type: 'Page' })
    const toolbox = article('效率工具')
    const workflow = article('自动化实战')
    const engineering = article('技术教程')
    const finance = article('投资与财务')
    const life = article('数字生活')
    const pages = [
      aiNews,
      aiLab,
      draft,
      page,
      toolbox,
      workflow,
      engineering,
      finance,
      life
    ]

    expect(getPublishedCategoryPosts(pages, 'AI 与技术')).toEqual([
      aiNews,
      aiLab,
      workflow,
      engineering
    ])
    expect(getPublishedCategoryPosts(pages, 'AI 实验室')).toEqual([aiNews, aiLab])
    expect(getPublishedCategoryPosts(pages, 'AI 前沿')).toEqual([aiNews])
    expect(getPublishedCategoryPosts(pages, '效率工具箱')).toEqual([toolbox])
    expect(getPublishedCategoryPosts(pages, '效率与成长')).toEqual([toolbox])
    expect(getPublishedCategoryPosts(pages, '投资与财务')).toEqual([finance])
    expect(getPublishedCategoryPosts(pages, '生活与旅行')).toEqual([life])
    expect(getPublishedCategoryPosts([], '生活与旅行')).toEqual([])
    expect(getLeoArticleColumn(toolbox)?.name).toBe('效率与成长')
  })

  it('includes the weekly series but does not treat daily posts as a weekly digest', () => {
    const weekly = article(null, { series: 'Leo Weekly Intelligence' })
    const daily = article('AI 前沿', { series: 'Leo Daily Intelligence' })
    expect(getPublishedCategoryPosts([weekly, daily], '每周精选')).toEqual([
      weekly
    ])
    expect(getPublishedCategoryPosts([weekly, daily], 'AI 与技术')).toEqual([
      daily
    ])
    expect(getLeoArticleColumn(weekly)?.name).toBe('每周精选')
  })

  it('includes empty columns in static paths and deduplicates existing names', () => {
    const routes = getLeoCategoryRouteNames([
      { name: 'AI 前沿' },
      { name: '数字生活' }
    ])
    expect(routes).toHaveLength(11)
    expect(routes).toEqual(
      expect.arrayContaining(['AI 前沿', 'AI 实验室', 'AI 与技术', '每周精选'])
    )
  })
})
