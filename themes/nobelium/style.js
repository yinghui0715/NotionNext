/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

    // 底色
    .dark body{
        background-color: black;
    }

    #theme-nobelium {
      --leo-accent: #2563eb;
      --leo-ink: #111827;
      --leo-muted: #6b7280;
      --leo-line: #e5e7eb;
    }

    .dark #theme-nobelium {
      --leo-accent: #60a5fa;
      --leo-ink: #f9fafb;
      --leo-muted: #9ca3af;
      --leo-line: #27272a;
    }

    .leo-home-intro {
      padding: 2.5rem 0 2rem;
      border-bottom: 1px solid var(--leo-line);
      margin-bottom: 2.5rem;
    }

    .leo-home-eyebrow {
      margin: 0 0 1.25rem;
      color: var(--leo-accent);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
    }

    .leo-home-intro h1 {
      max-width: 38rem;
      margin: 0;
      color: var(--leo-ink);
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 650;
      letter-spacing: -0.035em;
      line-height: 1.14;
    }

    .leo-home-description {
      max-width: 36rem;
      margin: 1.5rem 0 0;
      color: var(--leo-muted);
      font-size: 1rem;
      line-height: 1.85;
    }

    .leo-focus-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .leo-focus-item {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.9rem;
      padding-top: 1rem;
      border-top: 1px solid var(--leo-line);
    }

    .leo-focus-index {
      color: var(--leo-accent);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.8;
    }

    .leo-focus-item h2 {
      margin: 0;
      color: var(--leo-ink);
      font-size: 1rem;
      font-weight: 650;
    }

    .leo-focus-item p {
      margin: 0.55rem 0 0;
      color: var(--leo-muted);
      font-size: 0.88rem;
      line-height: 1.7;
    }

    .leo-latest-heading {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-top: 3.5rem;
      color: var(--leo-ink);
      font-size: 1.05rem;
      font-weight: 650;
    }

    .leo-latest-heading span:last-child {
      color: var(--leo-muted);
      font-size: 0.64rem;
      font-weight: 600;
      letter-spacing: 0.14em;
    }

    #theme-nobelium article h2 {
      transition: color 160ms ease;
    }

    #theme-nobelium article:hover h2 {
      color: var(--leo-accent);
    }

    @media (max-width: 640px) {
      .leo-home-intro {
        padding-top: 1.5rem;
      }

      .leo-focus-grid {
        grid-template-columns: 1fr;
        gap: 1.4rem;
        margin-top: 2.25rem;
      }

      .leo-latest-heading {
        margin-top: 2.75rem;
      }
    }


      ${themeConsoleStyle('nobelium', CONFIG)}
  `}</style>
}

export { Style }
