import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const FocusItem = ({ index, title, children }) => (
  <div className='leo-focus-item'>
    <span className='leo-focus-index'>{index}</span>
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  </div>
)

const LeoHomeIntro = () => {
  return (
    <section className='leo-home-intro' aria-labelledby='leo-home-title'>
      <p className='leo-home-eyebrow'>
        {siteConfig('NOBELIUM_LEO_EYEBROW', null, CONFIG)}
      </p>
      <h1 id='leo-home-title'>
        {siteConfig('NOBELIUM_LEO_TITLE', null, CONFIG)}
      </h1>
      <p className='leo-home-description'>
        {siteConfig('NOBELIUM_LEO_DESCRIPTION', null, CONFIG)}
      </p>

      <div className='leo-focus-grid'>
        <FocusItem index='01' title='Digital Systems'>
          从密码、文件和知识管理开始，建立普通人可以实践、可以持续维护的数字生活系统。
        </FocusItem>
        <FocusItem index='02' title='Daily Intelligence'>
          筛选值得关注的 AI、效率与商业信号，解释它们为什么重要，并持续验证实际价值。
        </FocusItem>
      </div>

      <div className='leo-latest-heading'>
        <span>最新发布</span>
        <span aria-hidden='true'>LATEST NOTES</span>
      </div>
    </section>
  )
}

export default LeoHomeIntro
