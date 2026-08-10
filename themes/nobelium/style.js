/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'

const Style = () => {
  return (
    <style jsx global>{`
      .dark body {
        background-color: #09090b;
      }

      #theme-nobelium {
        --leo-accent: #2563eb;
        --leo-accent-strong: #1d4ed8;
        --leo-accent-soft: #eff6ff;
        --leo-ink: #111827;
        --leo-muted: #5f6877;
        --leo-subtle: #f8fafc;
        --leo-line: #e2e8f0;
        --leo-card: #ffffff;
        --leo-radius: 0.85rem;
        color: var(--leo-ink);
      }

      .dark #theme-nobelium {
        --leo-accent: #60a5fa;
        --leo-accent-strong: #93c5fd;
        --leo-accent-soft: #172554;
        --leo-ink: #f8fafc;
        --leo-muted: #a8b0bd;
        --leo-subtle: #111827;
        --leo-line: #293241;
        --leo-card: #0f1115;
      }

      #theme-nobelium :focus-visible {
        outline: 2px solid var(--leo-accent);
        outline-offset: 3px;
      }

      .leo-nav-link {
        display: inline-flex;
        padding: 0.45rem 0.72rem;
        border-radius: 0.5rem;
        color: var(--leo-muted);
        font-size: 0.9rem;
        font-weight: 500;
        transition:
          color 180ms ease,
          background-color 180ms ease;
      }

      .leo-nav-link:hover,
      .leo-nav-link.is-active {
        color: var(--leo-ink);
        background: var(--leo-subtle);
      }

      .leo-mobile-menu {
        z-index: 30;
        border: 1px solid var(--leo-line);
        border-radius: var(--leo-radius);
        background: var(--leo-card);
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
      }

      .leo-mobile-menu ul {
        display: grid;
        padding: 0.65rem;
        gap: 0.2rem;
      }

      .leo-mobile-menu a {
        display: block;
        padding: 0.85rem 1rem;
        border-radius: 0.55rem;
        color: var(--leo-ink);
        font-size: 1rem;
        font-weight: 550;
      }

      .leo-mobile-menu a:hover,
      .leo-mobile-menu a[aria-current='page'] {
        background: var(--leo-subtle);
        color: var(--leo-accent);
      }

      .leo-menu-button {
        display: none;
        width: 2.25rem;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: var(--leo-ink);
      }

      .leo-hero {
        position: relative;
        padding: clamp(3.5rem, 9vw, 7rem) 0 clamp(3rem, 7vw, 5.5rem);
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-home-eyebrow,
      .leo-section-heading > p,
      .leo-cta > div > p,
      .leo-page-eyebrow {
        margin: 0 0 1.1rem;
        color: var(--leo-accent);
        font-size: 0.7rem;
        font-weight: 750;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .leo-hero h1 {
        max-width: 56rem;
        margin: 0;
        color: var(--leo-ink);
        font-size: clamp(2.25rem, 6vw, 4.65rem);
        font-weight: 680;
        letter-spacing: -0.045em;
        line-height: 1.08;
        text-wrap: balance;
      }

      .leo-home-description {
        max-width: 46rem;
        margin: 1.6rem 0 0;
        color: var(--leo-muted);
        font-size: clamp(1rem, 2vw, 1.15rem);
        line-height: 1.9;
      }

      .leo-hero-actions,
      .leo-cta-actions {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2rem;
      }

      .leo-button {
        display: inline-flex;
        min-height: 2.75rem;
        align-items: center;
        justify-content: center;
        padding: 0.7rem 1.15rem;
        border: 1px solid transparent;
        border-radius: 0.65rem;
        font-size: 0.9rem;
        font-weight: 650;
        transition:
          color 180ms ease,
          background-color 180ms ease,
          border-color 180ms ease,
          transform 180ms ease;
      }

      .leo-button:hover {
        transform: translateY(-1px);
      }

      .leo-button-primary {
        background: var(--leo-accent-strong);
        color: #fff;
      }

      .leo-button-primary:hover {
        background: var(--leo-accent);
        color: #fff;
      }

      .leo-button-secondary {
        border-color: var(--leo-line);
        background: var(--leo-card);
        color: var(--leo-ink);
      }

      .leo-button-secondary:hover {
        border-color: var(--leo-accent);
        color: var(--leo-accent);
      }

      .leo-text-link,
      .leo-section-link {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        color: var(--leo-accent-strong);
        font-size: 0.88rem;
        font-weight: 650;
        transition:
          color 180ms ease,
          gap 180ms ease;
      }

      .leo-text-link:hover,
      .leo-section-link:hover {
        gap: 0.55rem;
        color: var(--leo-accent);
      }

      .leo-about-link {
        margin-left: 0.3rem;
      }

      .leo-slogan {
        position: absolute;
        right: 0;
        bottom: 1.25rem;
        margin: 0;
        color: var(--leo-muted);
        font-size: 0.7rem;
        font-weight: 650;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .leo-home-section {
        padding: clamp(3.5rem, 7vw, 5.5rem) 0;
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-section-heading {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.8fr);
        column-gap: 2rem;
        align-items: end;
        margin-bottom: 2.25rem;
      }

      .leo-section-heading > p {
        grid-column: 1 / -1;
      }

      .leo-section-heading h2,
      .leo-about-section h2,
      .leo-cta h2,
      .leo-page-header h1 {
        margin: 0;
        color: var(--leo-ink);
        font-size: clamp(1.75rem, 3.7vw, 2.65rem);
        font-weight: 670;
        letter-spacing: -0.03em;
        line-height: 1.2;
        text-wrap: balance;
      }

      .leo-section-heading > span {
        color: var(--leo-muted);
        font-size: 0.95rem;
        line-height: 1.75;
      }

      .leo-focus-grid,
      .leo-project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .leo-focus-item,
      .leo-project-card,
      .leo-article-card {
        min-width: 0;
        border: 1px solid var(--leo-line);
        border-radius: var(--leo-radius);
        background: var(--leo-card);
      }

      .leo-focus-item {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.9rem;
        padding: 1.35rem;
      }

      .leo-focus-index,
      .leo-start-index {
        color: var(--leo-accent);
        font-size: 0.68rem;
        font-weight: 750;
        letter-spacing: 0.08em;
        line-height: 1.8;
      }

      .leo-focus-item h2,
      .leo-project-card h3,
      .leo-start-item h3,
      .leo-article-card h2 {
        margin: 0;
        color: var(--leo-ink);
        font-weight: 650;
        line-height: 1.35;
      }

      .leo-focus-item h2 {
        font-size: 1rem;
      }

      .leo-focus-item p,
      .leo-project-card p,
      .leo-start-item p,
      .leo-article-card p,
      .leo-about-section > p,
      .leo-cta span,
      .leo-page-header > p,
      .leo-prose p,
      .leo-project-detail dd {
        color: var(--leo-muted);
        line-height: 1.8;
      }

      .leo-focus-item p {
        margin: 0.55rem 0 0;
        font-size: 0.88rem;
      }

      .leo-project-card,
      .leo-article-card {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        transition:
          transform 190ms ease,
          border-color 190ms ease;
      }

      .leo-project-card:hover,
      .leo-article-card:hover {
        transform: translateY(-2px);
        border-color: color-mix(
          in srgb,
          var(--leo-accent) 50%,
          var(--leo-line)
        );
      }

      .leo-project-meta,
      .leo-article-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .leo-status,
      .leo-coming-soon {
        display: inline-flex;
        width: fit-content;
        padding: 0.25rem 0.55rem;
        border-radius: 999px;
        background: var(--leo-accent-soft);
        color: var(--leo-accent-strong);
        font-size: 0.65rem;
        font-weight: 750;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .leo-project-card h3 {
        font-size: 1.15rem;
      }

      .leo-project-card p {
        flex: 1;
        margin: 0.85rem 0 1rem;
        font-size: 0.9rem;
      }

      .leo-tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 1.35rem;
      }

      .leo-tag-list span {
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--leo-line);
        border-radius: 999px;
        color: var(--leo-muted);
        font-size: 0.66rem;
        line-height: 1.2;
      }

      .leo-section-link {
        margin-top: 1.5rem;
      }

      .leo-start-section {
        scroll-margin-top: 5rem;
      }

      .leo-start-grid {
        border-top: 1px solid var(--leo-line);
      }

      .leo-start-item {
        display: grid;
        grid-template-columns: 2rem minmax(0, 1fr) auto;
        gap: 1rem;
        align-items: center;
        padding: 1.25rem 0;
        border-bottom: 1px solid var(--leo-line);
        color: var(--leo-ink);
      }

      .leo-start-item:not(.is-disabled):hover h3 {
        color: var(--leo-accent);
      }

      .leo-start-item h3 {
        font-size: 1rem;
        transition: color 180ms ease;
      }

      .leo-start-item p {
        margin: 0.25rem 0 0;
        font-size: 0.83rem;
      }

      .leo-start-item.is-disabled {
        opacity: 0.75;
      }

      .leo-latest-heading {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 1rem;
        padding-top: clamp(3.5rem, 7vw, 5.5rem);
        scroll-margin-top: 5rem;
      }

      .leo-latest-heading > div > span {
        color: var(--leo-ink);
        font-size: clamp(1.75rem, 3.7vw, 2.65rem);
        font-weight: 670;
        letter-spacing: -0.03em;
      }

      .leo-latest-heading p {
        margin: 0.5rem 0 0;
        color: var(--leo-muted);
        font-size: 0.9rem;
      }

      .leo-latest-heading > span {
        color: var(--leo-muted);
        font-size: 0.64rem;
        font-weight: 650;
        letter-spacing: 0.14em;
      }

      .leo-articles-section {
        padding: 2rem 0 clamp(3.5rem, 7vw, 5.5rem);
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-article-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .leo-article-meta {
        color: var(--leo-muted);
        font-size: 0.72rem;
      }

      .leo-article-meta span {
        color: var(--leo-accent);
        font-weight: 650;
      }

      .leo-article-card h2 {
        font-size: 1.08rem;
      }

      .leo-article-card h2 a:hover {
        color: var(--leo-accent);
      }

      .leo-article-card p {
        flex: 1;
        margin: 0.8rem 0 1.25rem;
        font-size: 0.88rem;
      }

      .leo-empty-state {
        grid-column: 1 / -1;
        padding: 2rem 0;
        color: var(--leo-muted);
      }

      .leo-about-section {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
        column-gap: clamp(2rem, 6vw, 6rem);
        align-items: start;
      }

      .leo-about-section > .leo-home-eyebrow {
        grid-column: 1 / -1;
      }

      .leo-about-section > p {
        margin: 0;
        font-size: 0.98rem;
      }

      .leo-about-section > .leo-button {
        grid-column: 2;
        width: fit-content;
        margin-top: 1.2rem;
      }

      .leo-cta {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 2rem;
        margin: clamp(3.5rem, 7vw, 5.5rem) 0;
        padding: clamp(1.5rem, 4vw, 2.5rem);
        border: 1px solid var(--leo-line);
        border-radius: calc(var(--leo-radius) + 0.2rem);
        background: var(--leo-subtle);
      }

      .leo-cta h2 {
        font-size: clamp(1.6rem, 3vw, 2.25rem);
      }

      .leo-cta span {
        display: block;
        max-width: 42rem;
        margin-top: 0.75rem;
        font-size: 0.92rem;
      }

      .leo-cta-actions {
        flex-shrink: 0;
        margin-top: 0;
      }

      .leo-page {
        padding: clamp(3rem, 7vw, 5rem) 0 5rem;
      }

      .leo-page-header {
        max-width: 48rem;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-page-header > p:last-child {
        margin: 1.25rem 0 0;
        font-size: 1rem;
      }

      .leo-page-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 2.5rem;
      }

      .leo-prose {
        max-width: 48rem;
        margin-top: 2.5rem;
      }

      .leo-prose section {
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-prose h2,
      .leo-project-detail h2 {
        margin: 0 0 0.75rem;
        color: var(--leo-ink);
        font-size: 1.15rem;
        font-weight: 650;
      }

      .leo-prose p {
        margin: 0;
        font-size: 0.95rem;
      }

      .leo-project-detail {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(15rem, 0.6fr);
        gap: clamp(2rem, 7vw, 6rem);
        margin-top: 2.5rem;
      }

      .leo-project-detail dl {
        margin: 0;
      }

      .leo-project-detail-row {
        padding: 1.35rem 0;
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-project-detail dt {
        margin-bottom: 0.4rem;
        color: var(--leo-ink);
        font-size: 0.82rem;
        font-weight: 700;
      }

      .leo-project-detail dd {
        margin: 0;
        font-size: 0.92rem;
      }

      .leo-project-aside {
        height: fit-content;
        padding: 1.25rem;
        border: 1px solid var(--leo-line);
        border-radius: var(--leo-radius);
        background: var(--leo-subtle);
      }

      .leo-project-aside p {
        margin: 0 0 0.9rem;
        color: var(--leo-muted);
        font-size: 0.82rem;
        line-height: 1.7;
      }

      #theme-nobelium article h2 {
        transition: color 180ms ease;
      }

      @media (max-width: 900px) {
        .leo-focus-grid,
        .leo-project-grid,
        .leo-article-grid,
        .leo-page-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .leo-project-detail {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 767px) {
        .leo-menu-button {
          display: inline-flex;
        }
      }

      @media (max-width: 640px) {
        .leo-hero {
          padding-top: 2.75rem;
        }

        .leo-hero h1 {
          font-size: clamp(2.15rem, 10.5vw, 3rem);
          line-height: 1.12;
        }

        .leo-home-description {
          line-height: 1.8;
        }

        .leo-slogan {
          position: static;
          margin-top: 2rem;
        }

        .leo-focus-grid,
        .leo-project-grid,
        .leo-article-grid,
        .leo-page-grid {
          grid-template-columns: 1fr;
        }

        .leo-section-heading,
        .leo-about-section {
          grid-template-columns: 1fr;
        }

        .leo-section-heading > span {
          margin-top: 0.75rem;
        }

        .leo-about-section > p {
          margin-top: 1rem;
        }

        .leo-about-section > .leo-button {
          grid-column: 1;
        }

        .leo-cta {
          align-items: stretch;
          flex-direction: column;
        }

        .leo-cta-actions,
        .leo-cta-actions .leo-button {
          width: 100%;
        }

        .leo-latest-heading {
          align-items: start;
          flex-direction: column;
        }

        .leo-start-item {
          grid-template-columns: 1.5rem minmax(0, 1fr);
        }

        .leo-start-item > :last-child {
          grid-column: 2;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #theme-nobelium *,
        #theme-nobelium *::before,
        #theme-nobelium *::after {
          scroll-behavior: auto !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      ${themeConsoleStyle('nobelium', CONFIG)}
    `}</style>
  )
}

export { Style }
