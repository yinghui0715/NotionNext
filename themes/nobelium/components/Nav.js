import Collapse from '@/components/Collapse'
import DarkModeButton from '@/components/DarkModeButton'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { LEO_NAV_ITEMS } from '@/lib/site/leoBrandContent'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import { SvgIcon } from './SvgIcon'
/**
 * 顶部导航
 */
const Nav = props => {
  const { siteInfo } = props
  const autoCollapseNavBar = siteConfig(
    'NOBELIUM_AUTO_COLLAPSE_NAV_BAR',
    true,
    CONFIG
  )

  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && autoCollapseNavBar) {
      if (!entry?.isIntersecting) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    return () => {
      if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    }
  }, [sentinalRef])
  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinalRef}></div>
      <div
        className='sticky-nav m-auto w-full h-6 max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60'
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center'>
          <SmartLink href='/' aria-label={siteConfig('TITLE')}>
            <div className='h-6 w-6'>
              {/* <SvgIcon/> */}
              {siteConfig('NOBELIUM_NAV_NOTION_ICON') ? (
                <LazyImage
                  src={siteInfo?.icon}
                  width={24}
                  height={24}
                  alt={siteConfig('AUTHOR')}
                />
              ) : (
                <SvgIcon />
              )}
            </div>
          </SmartLink>
          <p className='logo line-clamp-1 overflow-ellipsis ml-2 font-medium text-gray-800 dark:text-gray-300 header-name whitespace-nowrap'>
            {siteConfig('TITLE')}
          </p>
        </div>
        <NavBar {...props} />
      </div>
    </>
  )
}

const NavBar = props => {
  const [isOpen, changeOpen] = useState(false)
  const router = useRouter()
  const toggleOpen = () => {
    changeOpen(!isOpen)
  }
  const collapseRef = useRef(null)
  const isActive = href =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

  return (
    <div className='flex-shrink-0 flex items-center gap-1'>
      <nav className='hidden md:block' aria-label='主导航'>
        <ul className='flex flex-row items-center gap-1'>
          {LEO_NAV_ITEMS.map(link => (
            <li key={link.href}>
              <SmartLink
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`leo-nav-link ${isActive(link.href) ? 'is-active' : ''}`}
              >
                {link.name}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:hidden'>
        <Collapse
          collapseRef={collapseRef}
          isOpen={isOpen}
          type='vertical'
          className='leo-mobile-menu fixed top-16 left-4 right-4'
        >
          <nav id='leo-mobile-navigation' aria-label='移动端主导航'>
            <ul>
              {LEO_NAV_ITEMS.map(link => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={() => changeOpen(false)}
                  >
                    {link.name}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </div>

      {siteConfig('NOBELIUM_MENU_DARKMODE_BUTTON') && (
        <DarkModeButton className='text-center p-2.5 hover:bg-black hover:bg-opacity-10 rounded-full' />
      )}

      <button
        type='button'
        onClick={toggleOpen}
        className='leo-menu-button md:hidden'
        aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
        aria-expanded={isOpen}
        aria-controls='leo-mobile-navigation'
      >
        <i
          className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}
          aria-hidden='true'
        />
      </button>
    </div>
  )
}

export default Nav
