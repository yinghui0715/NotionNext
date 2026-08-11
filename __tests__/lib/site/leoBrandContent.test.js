import {
  getLeoProject,
  LEO_FOCUS_AREAS,
  LEO_PROJECTS,
  stripLeadingArticleEmoji
} from '@/lib/site/leoBrandContent'

describe('Leo brand content', () => {
  it('defines the three public focus areas', () => {
    expect(LEO_FOCUS_AREAS.map(item => item.title)).toEqual([
      'Engineering AI',
      'AI Automation',
      'Digital Systems'
    ])
  })

  it('keeps project slugs unique and exposes honest lifecycle states', () => {
    const slugs = LEO_PROJECTS.map(project => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(LEO_PROJECTS.map(project => project.status)).toEqual([
      'Building',
      'Case Study',
      'Prototype'
    ])
    expect(new Set(LEO_PROJECTS.map(project => project.visual)).size).toBe(
      LEO_PROJECTS.length
    )
    expect(getLeoProject(slugs[0])).toEqual(LEO_PROJECTS[0])
  })

  it('documents the quotation review project without claiming results', () => {
    const project = getLeoProject('ai-supplier-quotation-review-agent')

    expect(project.previousWorkflow.length).toBeGreaterThan(2)
    expect(project.architecture.length).toBeGreaterThan(3)
    expect(project.process.length).toBeGreaterThan(3)
    expect(project.nextStep.length).toBeGreaterThan(2)
    expect(project.demo).toContain('Synthetic Data')
    expect(project.result).toContain('尚未提供可验证 Demo')
  })

  it('removes decorative leading emoji without changing the source title', () => {
    expect(stripLeadingArticleEmoji('🗞️📬 Leo Daily Intelligence')).toBe(
      'Leo Daily Intelligence'
    )
    expect(stripLeadingArticleEmoji('Engineering AI')).toBe('Engineering AI')
  })
})
