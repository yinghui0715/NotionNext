export const LEO_EDITORIAL_DESCRIPTION =
  '记录 AI 与技术实践、工作与个人成长、投资与财务复盘，以及生活和旅行中的真实体验。'

export const LEO_WEEKLY_TOPIC = {
  name: '每周精选',
  description: '回顾一周值得关注的工具、文章与实践。',
  categories: ['每周精选'],
  series: 'Leo Weekly Intelligence'
}

const LEGACY_COLUMNS = [
  {
    name: 'AI 实验室',
    description: '实测 AI 工具、模型与 Agent，记录体验和适用场景。',
    categories: ['AI 实验室', 'AI实验室', 'AI 前沿']
  },
  {
    name: '自动化工坊',
    description: '拆解重复工作，分享可复用的自动化流程。',
    categories: ['自动化工坊', '自动化实战']
  },
  {
    name: '数字生活',
    description: '记录数字工具在生活里的实际用法。',
    categories: ['数字生活']
  },
  {
    name: '效率工具箱',
    description: '试用、对比并整理值得留下的效率工具。',
    categories: ['效率工具箱', '效率工具']
  },
  {
    name: '技术实践',
    description: '记录开发、系统搭建与工程项目里的具体做法。',
    categories: ['技术实践', '技术教程']
  },
  LEO_WEEKLY_TOPIC
]

export const LEO_COLUMNS = [
  {
    name: 'AI 与技术',
    description: 'AI Coding、Agent、自动化、开源项目与 HomeLab 实践。',
    categories: [
      'AI 与技术',
      'AI 实验室',
      'AI实验室',
      'AI 前沿',
      '自动化工坊',
      '自动化实战',
      '技术实践',
      '技术教程'
    ]
  },
  {
    name: '效率与成长',
    description: '知识管理、Notion、Excel、项目管理与学习方法。',
    categories: ['效率与成长', '效率工具箱', '效率工具']
  },
  {
    name: '投资与财务',
    description: '个人财务、预算、资产配置与投资学习复盘。',
    categories: ['投资与财务']
  },
  {
    name: '生活与旅行',
    description: '出差与旅行、摄影、数码生活和日常记录。',
    categories: ['生活与旅行', '数字生活']
  }
]

const ALL_COLUMNS = [...LEO_COLUMNS, ...LEGACY_COLUMNS]

export const getLeoColumn = name => ALL_COLUMNS.find(item => item.name === name)

export const getLeoColumnHref = name => `/category/${encodeURIComponent(name)}`

function matchesColumn(post, column) {
  const categories = Array.isArray(post.category) ? post.category : [post.category]
  return (
    categories.some(category => column.categories.includes(category)) ||
    (column.series != null && post.series === column.series)
  )
}

export function getLeoArticleColumn(post) {
  if (!post) return
  return (
    LEO_COLUMNS.find(column => matchesColumn(post, column)) ||
    (matchesColumn(post, LEO_WEEKLY_TOPIC) ? LEO_WEEKLY_TOPIC : undefined)
  )
}

export function getPublishedCategoryPosts(pages, name) {
  const column = getLeoColumn(name)
  return (pages || []).filter(post => {
    if (post?.type !== 'Post' || post.status !== 'Published') return false
    return column
      ? matchesColumn(post, column)
      : Boolean(post.category?.includes(name))
  })
}

export function getLeoCategoryRouteNames(categoryOptions) {
  return [
    ...new Set([
      ...(categoryOptions || []).map(item => item.name).filter(Boolean),
      ...ALL_COLUMNS.map(item => item.name)
    ])
  ]
}
