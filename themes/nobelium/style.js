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
        --leo-violet: #6d28d9;
        --leo-visual-bg: #0b0e14;
        --leo-visual-panel: #141925;
        --leo-visual-line: #2a3346;
        --leo-ink: #111827;
        --leo-muted: #5f6877;
        --leo-subtle: #f8fafc;
        --leo-line: #e2e8f0;
        --leo-card: #ffffff;
        --leo-radius: 0.85rem;
        color: var(--leo-ink);
      }

      .dark #theme-nobelium {
        --leo-accent: #7dd3fc;
        --leo-accent-strong: #93c5fd;
        --leo-accent-soft: #17233d;
        --leo-violet: #a78bfa;
        --leo-ink: #f8fafc;
        --leo-muted: #aeb7c5;
        --leo-subtle: #10141b;
        --leo-line: #2b3442;
        --leo-card: #0e1218;
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

      .sticky-nav {
        border-bottom: 1px solid transparent;
        backdrop-filter: blur(16px);
      }

      .sticky-nav-full {
        border-color: var(--leo-line);
      }

      .leo-mobile-menu-layer {
        position: fixed;
        inset: 0;
        z-index: 60;
        overflow: hidden;
        visibility: hidden;
        pointer-events: none;
      }

      .leo-mobile-menu-layer.is-open {
        visibility: visible;
        pointer-events: auto;
      }

      .leo-mobile-menu-backdrop {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgba(2, 6, 12, 0.72);
        opacity: 0;
        backdrop-filter: blur(5px);
        transition: opacity 220ms ease;
      }

      .leo-mobile-menu-layer.is-open .leo-mobile-menu-backdrop {
        opacity: 1;
      }

      .leo-mobile-menu {
        position: absolute;
        inset: 0 0 0 auto;
        width: min(88vw, 25rem);
        overflow-y: auto;
        padding: 6rem 1.5rem 2rem;
        border-left: 1px solid #303744;
        background: #0d1015;
        box-shadow: -24px 0 80px rgba(0, 0, 0, 0.36);
        color: #f8fafc;
        transform: translateX(100%);
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .leo-mobile-menu-layer.is-open .leo-mobile-menu {
        transform: translateX(0);
      }

      .leo-mobile-panel-close {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        display: inline-flex;
        width: 3rem;
        height: 3rem;
        align-items: center;
        justify-content: center;
        border: 1px solid #3b4453;
        border-radius: 999px;
        color: #f8fafc;
        font-size: 2rem;
        font-weight: 250;
        line-height: 1;
      }

      .leo-mobile-menu-kicker {
        display: grid;
        gap: 0.4rem;
        padding-bottom: 1.4rem;
        border-bottom: 1px solid #343b48;
      }

      .leo-mobile-menu-kicker span {
        color: #8ec5ff;
        font-size: 0.72rem;
        font-weight: 750;
        letter-spacing: 0.17em;
      }

      .leo-mobile-menu-kicker small {
        color: #828c9d;
        font-size: 0.62rem;
        letter-spacing: 0.08em;
      }

      .leo-mobile-menu ul {
        display: grid;
        padding: 1rem 0 0;
      }

      .leo-mobile-menu a {
        position: relative;
        display: grid;
        grid-template-columns: 2rem minmax(0, 1fr) auto;
        align-items: center;
        padding: 1.15rem 0.25rem;
        border-bottom: 1px solid #343b48;
        color: #f8fafc;
        font-size: 1.35rem;
        font-weight: 620;
      }

      .leo-mobile-menu a > span {
        color: #727d8e;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      .leo-mobile-menu a > i {
        color: #727d8e;
        font-size: 0.85rem;
        font-style: normal;
      }

      .leo-mobile-menu a:hover,
      .leo-mobile-menu a[aria-current='page'] {
        color: #93c5fd;
      }

      .leo-mobile-menu a[aria-current='page']::before {
        position: absolute;
        left: 0;
        width: 3px;
        height: 2rem;
        background: linear-gradient(#60a5fa, #8b5cf6);
        content: '';
      }

      .leo-mobile-menu > p {
        margin: 2rem 0 0;
        color: #727d8e;
        font-size: 0.65rem;
        font-weight: 650;
        letter-spacing: 0.14em;
        text-transform: uppercase;
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
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
        gap: clamp(2.5rem, 6vw, 5.5rem);
        align-items: center;
        padding: clamp(3.5rem, 9vw, 7rem) 0 clamp(3rem, 7vw, 5.5rem);
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-hero-copy {
        min-width: 0;
      }

      .leo-hero-kicker {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.1rem;
      }

      .leo-hero-kicker .leo-home-eyebrow {
        margin: 0;
      }

      .leo-hero-kicker > span {
        padding-left: 0.75rem;
        border-left: 1px solid var(--leo-line);
        color: var(--leo-muted);
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.04em;
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
        max-width: 47rem;
        margin: 0;
        color: var(--leo-ink);
        font-size: clamp(2.25rem, 5vw, 4.25rem);
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

      .dark .leo-button-primary,
      .dark .leo-button-primary:hover {
        color: #0b1120;
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

      .leo-hero-visual {
        position: relative;
        min-height: 27rem;
        overflow: hidden;
        border: 1px solid #283246;
        border-radius: calc(var(--leo-radius) + 0.35rem);
        background:
          linear-gradient(rgba(99, 102, 241, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
          radial-gradient(
            circle at 76% 24%,
            rgba(124, 58, 237, 0.28),
            transparent 34%
          ),
          radial-gradient(
            circle at 16% 82%,
            rgba(37, 99, 235, 0.25),
            transparent 36%
          ),
          var(--leo-visual-bg);
        background-size:
          32px 32px,
          32px 32px,
          auto,
          auto,
          auto;
        box-shadow: 0 28px 80px rgba(15, 23, 42, 0.2);
        color: #eef2ff;
      }

      .leo-hero-visual::after {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        box-shadow: inset 0 0 70px rgba(3, 7, 18, 0.48);
        content: '';
        pointer-events: none;
      }

      .leo-hero-visual-header,
      .leo-hero-visual-footer {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.1rem;
        color: #8f9aae;
        font-size: 0.58rem;
        font-weight: 700;
        letter-spacing: 0.12em;
      }

      .leo-hero-visual-header {
        border-bottom: 1px solid #273044;
      }

      .leo-visual-live {
        padding: 0.25rem 0.45rem;
        border: 1px solid rgba(96, 165, 250, 0.38);
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.16);
        color: #93c5fd;
      }

      .leo-hero-visual-canvas {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: minmax(5.5rem, 0.7fr) 2.2rem minmax(7rem, 1fr);
        grid-template-rows: 1fr auto;
        gap: 1.1rem 0.65rem;
        align-items: center;
        min-height: 20.5rem;
        padding: 1.4rem;
      }

      .leo-visual-source,
      .leo-visual-agent,
      .leo-visual-output {
        border: 1px solid var(--leo-visual-line);
        border-radius: 0.7rem;
        background: rgba(20, 25, 37, 0.92);
      }

      .leo-visual-source {
        display: grid;
        gap: 0.55rem;
        padding: 0.9rem;
      }

      .leo-visual-source span,
      .leo-visual-agent span,
      .leo-visual-output span {
        color: #7f8aa0;
        font-size: 0.5rem;
        font-weight: 700;
        letter-spacing: 0.11em;
      }

      .leo-visual-source i {
        display: block;
        height: 0.38rem;
        border-radius: 999px;
        background: #273044;
      }

      .leo-visual-source i:nth-child(3) {
        width: 72%;
      }

      .leo-visual-source i:nth-child(4) {
        width: 88%;
      }

      .leo-visual-connector {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
      }

      .leo-visual-connector i:first-child,
      .leo-visual-connector i:last-child {
        height: 1px;
        background: #46536a;
      }

      .leo-visual-connector i:nth-child(2) {
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 999px;
        background: #60a5fa;
        box-shadow: 0 0 18px #3b82f6;
      }

      .leo-visual-agent {
        display: grid;
        padding: 1.15rem;
        border-color: #46557b;
        background: linear-gradient(
          145deg,
          rgba(30, 41, 68, 0.96),
          rgba(18, 22, 34, 0.96)
        );
      }

      .leo-visual-agent strong {
        margin-top: 0.35rem;
        font-size: clamp(1.5rem, 3vw, 2.15rem);
        letter-spacing: -0.04em;
      }

      .leo-visual-agent small,
      .leo-visual-output small {
        margin-top: 0.5rem;
        color: #8792a6;
        font-size: 0.48rem;
        letter-spacing: 0.08em;
      }

      .leo-visual-output {
        grid-column: 3;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        padding: 0.8rem 0.9rem;
      }

      .leo-visual-output b {
        grid-row: 1 / 3;
        grid-column: 2;
        color: #a78bfa;
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        line-height: 1;
      }

      .leo-hero-visual-footer {
        border-top: 1px solid #273044;
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
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.9rem;
        overflow: hidden;
        padding: 1.35rem;
      }

      .leo-focus-item::after {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 3.5rem;
        height: 3px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--leo-accent),
          var(--leo-violet)
        );
        content: '';
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
        overflow: hidden;
        transition:
          transform 190ms ease,
          border-color 190ms ease,
          box-shadow 190ms ease;
      }

      .leo-project-card:hover,
      .leo-article-card:hover {
        transform: translateY(-2px);
        border-color: var(--leo-accent);
        box-shadow: 0 18px 48px rgba(15, 23, 42, 0.09);
      }

      .dark .leo-project-card:hover,
      .dark .leo-article-card:hover {
        box-shadow: 0 20px 54px rgba(0, 0, 0, 0.32);
      }

      .leo-project-card-body,
      .leo-article-card-body {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 1.4rem;
      }

      .leo-project-visual {
        position: relative;
        min-height: 12.5rem;
        overflow: hidden;
        border-bottom: 1px solid #273044;
        background:
          linear-gradient(rgba(96, 165, 250, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96, 165, 250, 0.07) 1px, transparent 1px),
          radial-gradient(
            circle at 80% 18%,
            rgba(109, 40, 217, 0.32),
            transparent 38%
          ),
          #0b0e14;
        background-size:
          24px 24px,
          24px 24px,
          auto,
          auto;
        color: #f8fafc;
      }

      .leo-project-visual-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 0.85rem;
        border-bottom: 1px solid #273044;
        color: #8691a5;
        font-size: 0.52rem;
        font-weight: 700;
        letter-spacing: 0.12em;
      }

      .leo-project-visual-stage {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 9.6rem;
        padding: 1.1rem;
      }

      .leo-quote-sheet {
        display: grid;
        width: 56%;
        gap: 0.45rem;
        padding: 0.9rem;
        border: 1px solid #35425a;
        border-radius: 0.55rem;
        background: #141925;
        transform: rotate(-3deg);
      }

      .leo-quote-sheet i {
        height: 0.48rem;
        border-radius: 999px;
        background: linear-gradient(90deg, #37445a 64%, #60a5fa 64%);
      }

      .leo-quote-sheet i:nth-child(2) {
        width: 82%;
      }

      .leo-quote-sheet i:nth-child(3) {
        background: linear-gradient(90deg, #37445a 48%, #a78bfa 48%);
      }

      .leo-review-panel {
        display: grid;
        gap: 0.35rem;
        width: 42%;
        margin-left: -0.65rem;
        padding: 0.75rem;
        border: 1px solid #46557b;
        border-radius: 0.55rem;
        background: rgba(20, 25, 37, 0.96);
        box-shadow: -14px 16px 36px rgba(0, 0, 0, 0.34);
      }

      .leo-review-panel span {
        padding: 0.32rem 0.4rem;
        border-radius: 0.3rem;
        background: #192234;
        color: #93c5fd;
        font-size: 0.48rem;
        font-weight: 700;
      }

      .leo-review-panel span:last-child {
        color: #fca5a5;
      }

      .leo-estimate-bars {
        display: flex;
        height: 7rem;
        align-items: end;
        gap: 0.55rem;
        padding: 0 0.3rem;
      }

      .leo-estimate-bars i {
        width: 1.1rem;
        height: 38%;
        border-radius: 0.2rem 0.2rem 0 0;
        background: linear-gradient(#60a5fa, #1d4ed8);
      }

      .leo-estimate-bars i:nth-child(2) {
        height: 62%;
      }

      .leo-estimate-bars i:nth-child(3) {
        height: 84%;
        background: linear-gradient(#a78bfa, #6d28d9);
      }

      .leo-estimate-bars i:nth-child(4) {
        height: 52%;
      }

      .leo-estimate-total {
        display: grid;
        margin-left: 1.2rem;
      }

      .leo-estimate-total span,
      .leo-estimate-total small {
        color: #7f8aa0;
        font-size: 0.46rem;
        font-weight: 700;
        letter-spacing: 0.1em;
      }

      .leo-estimate-total strong {
        margin: 0.25rem 0;
        color: #f8fafc;
        font-size: 2.5rem;
        line-height: 1;
      }

      .leo-flow-map {
        display: grid;
        grid-template-columns: auto 1fr auto 1fr auto 1fr auto;
        align-items: center;
        width: 100%;
      }

      .leo-flow-map span {
        display: inline-flex;
        min-height: 2.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: 1px solid #3a465d;
        border-radius: 0.45rem;
        background: #141925;
        color: #aeb8ca;
        font-size: 0.45rem;
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      .leo-flow-map span:nth-of-type(3) {
        border-color: #6d62a7;
        color: #c4b5fd;
        box-shadow: 0 0 24px rgba(124, 58, 237, 0.25);
      }

      .leo-flow-map i {
        height: 1px;
        background: linear-gradient(90deg, #344057, #60a5fa);
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

      .leo-project-meta time {
        color: var(--leo-muted);
        font-size: 0.56rem;
        font-weight: 650;
        letter-spacing: 0.06em;
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

      .leo-article-grid.is-single {
        grid-template-columns: 1fr;
      }

      .leo-article-grid.is-single .leo-article-card {
        display: grid;
        grid-template-columns: minmax(0, 1.18fr) minmax(20rem, 0.82fr);
      }

      .leo-article-grid.is-single .leo-article-visual {
        min-height: 22rem;
        border-right: 1px solid var(--leo-line);
        border-bottom: 0;
      }

      .leo-article-grid.is-single .leo-article-card-body {
        justify-content: center;
        padding: clamp(1.5rem, 4vw, 3rem);
      }

      .leo-article-grid.is-single .leo-article-card h2 {
        font-size: clamp(1.45rem, 3vw, 2.25rem);
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

      .leo-article-visual {
        position: relative;
        display: block;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-bottom: 1px solid var(--leo-line);
        background: #0b0e14;
      }

      .leo-article-cover-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 220ms ease;
      }

      .leo-article-card:hover .leo-article-cover-image {
        transform: scale(1.018);
      }

      .leo-article-fallback-visual {
        position: absolute;
        inset: 0;
        display: grid;
        align-content: center;
        padding: 1.35rem;
        background:
          linear-gradient(135deg, rgba(37, 99, 235, 0.24), transparent 52%),
          radial-gradient(
            circle at 80% 30%,
            rgba(124, 58, 237, 0.35),
            transparent 34%
          ),
          repeating-linear-gradient(
            90deg,
            rgba(148, 163, 184, 0.08) 0 1px,
            transparent 1px 28px
          ),
          #0b0e14;
        color: #f8fafc;
      }

      .leo-article-fallback-visual span,
      .leo-article-fallback-visual small {
        color: #8f9aae;
        font-size: 0.52rem;
        font-weight: 700;
        letter-spacing: 0.13em;
      }

      .leo-article-fallback-visual strong {
        margin-top: 0.3rem;
        font-size: clamp(1.35rem, 3vw, 2rem);
        letter-spacing: -0.035em;
      }

      .leo-article-fallback-visual i {
        width: 3.5rem;
        height: 3px;
        margin: 0.8rem 0;
        background: linear-gradient(90deg, #60a5fa, #8b5cf6);
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

      .dark .leo-cta {
        background:
          radial-gradient(
            circle at 88% 18%,
            rgba(124, 58, 237, 0.16),
            transparent 32%
          ),
          linear-gradient(135deg, #101722, #0d1117);
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

      .leo-page-description {
        margin: 1.25rem 0 0;
        font-size: 1rem;
      }

      .leo-project-updated {
        display: block;
        margin-top: -0.65rem;
        color: var(--leo-muted);
        font-size: 0.72rem;
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

      .leo-contact-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(13rem, 16rem);
        gap: clamp(1.5rem, 5vw, 3rem);
        align-items: start;
        margin-top: 1.25rem;
      }

      .leo-contact-methods > p {
        margin-bottom: 1.25rem;
      }

      .leo-contact-prompts {
        display: grid;
        gap: 0.75rem;
        margin: 1rem 0 0;
        padding: 0;
        list-style: none;
      }

      .leo-contact-prompts li {
        display: grid;
        grid-template-columns: 2rem minmax(0, 1fr);
        gap: 0.8rem;
        padding: 1rem;
        border: 1px solid var(--leo-line);
        border-radius: 0.7rem;
        background: var(--leo-subtle);
      }

      .leo-contact-prompts li > span {
        color: var(--leo-accent);
        font-size: 0.68rem;
        font-weight: 750;
        letter-spacing: 0.08em;
      }

      .leo-contact-prompts strong {
        color: var(--leo-ink);
        font-size: 0.88rem;
      }

      .leo-contact-prompts p {
        margin-top: 0.25rem;
        font-size: 0.83rem;
      }

      .leo-wechat-card {
        margin: 0;
        padding: 0.8rem;
        border: 1px solid var(--leo-line);
        border-radius: var(--leo-radius);
        background: var(--leo-card);
      }

      .leo-wechat-qr {
        display: block;
        width: 100%;
        height: auto;
        border-radius: calc(var(--leo-radius) - 0.35rem);
        background: #fff;
      }

      .leo-wechat-card figcaption {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.85rem 0.25rem 0.2rem;
      }

      .leo-wechat-card strong {
        color: var(--leo-ink);
        font-size: 0.95rem;
      }

      .leo-wechat-card span {
        color: var(--leo-muted);
        font-size: 0.78rem;
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
        scroll-margin-top: 6rem;
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

      .leo-project-detail-list {
        display: grid;
        gap: 0.55rem;
        margin: 0;
        padding-left: 1.2rem;
      }

      .leo-project-detail-list li {
        padding-left: 0.2rem;
      }

      .leo-project-side {
        position: sticky;
        top: 6rem;
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

      .leo-project-toc {
        margin-bottom: 1.1rem;
        padding-bottom: 1.1rem;
        border-bottom: 1px solid var(--leo-line);
      }

      .leo-project-toc > p {
        margin-bottom: 0.65rem;
        color: var(--leo-accent-strong);
        font-size: 0.62rem;
        font-weight: 750;
        letter-spacing: 0.12em;
      }

      .leo-project-toc ol {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.25rem 0.65rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .leo-project-toc a {
        color: var(--leo-muted);
        font-size: 0.72rem;
        line-height: 1.5;
        transition: color 180ms ease;
      }

      .leo-project-toc a:hover {
        color: var(--leo-accent);
      }

      .leo-responsibility-table {
        overflow: hidden;
        border: 1px solid var(--leo-line);
        border-radius: 0.7rem;
      }

      .leo-responsibility-table > div {
        display: grid;
        grid-template-columns: minmax(7rem, 0.35fr) minmax(0, 1fr);
      }

      .leo-responsibility-table > div + div {
        border-top: 1px solid var(--leo-line);
      }

      .leo-responsibility-table strong,
      .leo-responsibility-table span {
        padding: 0.75rem 0.85rem;
        font-size: 0.8rem;
        line-height: 1.6;
      }

      .leo-responsibility-table strong {
        background: var(--leo-subtle);
        color: var(--leo-ink);
      }

      .leo-responsibility-table span {
        border-left: 1px solid var(--leo-line);
        color: var(--leo-muted);
      }

      .leo-footer-brand {
        display: grid;
        gap: 0.1rem;
      }

      .leo-footer-brand p:last-child {
        color: var(--leo-muted);
        font-size: 0.65rem;
        letter-spacing: 0.04em;
      }

      #theme-nobelium article h2 {
        transition: color 180ms ease;
      }

      @media (max-width: 900px) {
        .leo-hero {
          grid-template-columns: 1fr;
        }

        .leo-hero-visual {
          min-height: 24rem;
        }

        .leo-focus-grid,
        .leo-project-grid,
        .leo-article-grid,
        .leo-page-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .leo-article-grid.is-single .leo-article-card {
          grid-template-columns: 1fr;
        }

        .leo-article-grid.is-single .leo-article-visual {
          min-height: auto;
          border-right: 0;
          border-bottom: 1px solid var(--leo-line);
        }

        .leo-project-detail {
          grid-template-columns: 1fr;
        }

        .leo-project-side {
          display: contents;
        }

        .leo-project-toc,
        .leo-project-aside {
          padding: 1.25rem;
          border: 1px solid var(--leo-line);
          border-radius: var(--leo-radius);
          background: var(--leo-subtle);
        }

        .leo-project-toc {
          order: -1;
          margin: 0;
        }

        .leo-project-aside {
          order: 1;
        }
      }

      @media (max-width: 767px) {
        .leo-menu-button {
          display: inline-flex;
        }
      }

      @media (max-width: 640px) {
        .leo-hero {
          gap: 2.5rem;
          padding-top: 2.75rem;
        }

        .leo-hero h1 {
          font-size: clamp(2.15rem, 10.5vw, 3rem);
          line-height: 1.12;
        }

        .leo-home-description {
          line-height: 1.8;
        }

        .leo-hero-kicker {
          align-items: flex-start;
          flex-direction: column;
          gap: 0.45rem;
        }

        .leo-hero-kicker > span {
          padding-left: 0;
          border-left: 0;
        }

        .leo-hero-copy > .leo-hero-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .leo-hero-copy > .leo-hero-actions .leo-button {
          width: 100%;
        }

        .leo-hero-copy > .leo-hero-actions .leo-about-link {
          grid-column: 1 / -1;
          width: fit-content;
          margin-left: 0;
        }

        .leo-slogan {
          position: static;
          margin-top: 2rem;
          grid-column: 1;
        }

        .leo-hero-visual {
          min-height: 21.5rem;
          border-radius: var(--leo-radius);
        }

        .leo-hero-visual-canvas {
          grid-template-columns: minmax(4.5rem, 0.65fr) 1.7rem minmax(
              6rem,
              1fr
            );
          min-height: 15.5rem;
          padding: 1rem;
        }

        .leo-visual-source,
        .leo-visual-agent {
          padding: 0.72rem;
        }

        .leo-visual-agent strong {
          font-size: 1.35rem;
        }

        .leo-project-visual {
          min-height: 13rem;
        }

        .leo-mobile-menu {
          width: min(92vw, 24rem);
        }

        .leo-focus-grid,
        .leo-project-grid,
        .leo-article-grid,
        .leo-page-grid {
          grid-template-columns: 1fr;
        }

        .leo-contact-grid {
          grid-template-columns: 1fr;
        }

        .leo-wechat-card {
          width: min(100%, 18rem);
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

        .leo-responsibility-table > div {
          grid-template-columns: 1fr;
        }

        .leo-responsibility-table span {
          padding-top: 0;
          border-left: 0;
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
