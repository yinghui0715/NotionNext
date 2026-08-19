import { render, screen } from '@testing-library/react'
import { ArticleInfo } from '@/themes/nobelium/components/ArticleInfo'

jest.mock('@/lib/config', () => ({
  siteConfig: key =>
    ({
      AUTHOR: 'Leo',
      CONTACT_EMAIL: 'leo@example.com',
      CONTACT_GITHUB: '#',
      POST_TITLE_ICON: false
    })[key]
}))

jest.mock('@/lib/plugins/mailEncrypt', () => ({
  resolveContactEmail: value => value
}))

jest.mock('@/components/LazyImage', () => ({ alt }) => <span>{alt}</span>)
jest.mock('@/components/NotionIcon', () => () => null)
jest.mock('@/lib/site/leoBrandContent', () => ({
  stripLeadingArticleEmoji: value => value
}))

describe('Nobelium ArticleInfo mobile layout', () => {
  it('allows a long article title to shrink and wrap within the viewport', () => {
    render(
      <ArticleInfo
        post={{
          title:
            '不要把搭建系统当成生产力：AI 时代，知识管理该从“收藏”走向“执行”',
          type: 'Post',
          publishDay: '2026-08-18',
          tags: []
        }}
      />
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('max-w-full', 'break-words')
    expect(heading.parentElement).toHaveClass('w-full', 'min-w-0', 'max-w-full')
    expect(heading.closest('section')).toHaveClass(
      'w-full',
      'min-w-0',
      'max-w-full'
    )
  })
})
