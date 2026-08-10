import DarkModeButton from '@/components/DarkModeButton'
import Vercel from '@/components/Vercel'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

export const Footer = props => {
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const router = useRouter()
  const isBrandPage = [
    '/',
    '/projects',
    '/projects/[slug]',
    '/about',
    '/contact'
  ].includes(router.route)

  return (
    <footer
      className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        isBrandPage
          ? 'max-w-6xl px-4 sm:px-6 lg:px-8'
          : !fullWidth
            ? 'max-w-2xl px-4'
            : 'px-4 md:px-24'
      }`}
    >
      <DarkModeButton className='text-center py-4' />
      <hr className='border-gray-200 dark:border-gray-600' />
      <div className='my-4 text-sm leading-6'>
        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <p>© 2026 {siteConfig('BRAND_NAME_EN')}</p>
          <nav aria-label='页脚导航'>
            <ul className='flex items-center gap-4'>
              <li>
                <SmartLink href='/projects'>项目</SmartLink>
              </li>
              <li>
                <SmartLink href='/about'>关于</SmartLink>
              </li>
              <li>
                <SmartLink href='/contact'>联系</SmartLink>
              </li>
            </ul>
          </nav>
          <Vercel />
        </div>
      </div>
    </footer>
  )
}
