const CONFIG = {
  NOBELIUM_NAV_NOTION_ICON: true, // 是否读取Notion图标作为站点头像 ; 否则默认显示黑色SVG方块
  NOBELIUM_COLOR_PRIMARY: '#2563eb',

  // Leo 数字工坊首页
  NOBELIUM_LEO_EYEBROW: 'LEO DIGITAL LAB',
  NOBELIUM_LEO_TITLE: '把零散的工具，变成长期可用的数字系统',
  NOBELIUM_LEO_DESCRIPTION:
    '记录 AI、自动化与个人数字系统的真实实践。关注方法、验证和长期维护，而不是追逐工具本身。',

  // 特殊菜单
  NOBELIUM_MENU_RANDOM_POST: false, // 极简导航不显示随机文章
  NOBELIUM_MENU_SEARCH_BUTTON: false, // 使用文字搜索入口，避免重复按钮
  NOBELIUM_MENU_DARKMODE_BUTTON: true, // 菜单显示深色模式切换

  // 默认菜单配置 （开启自定义菜单后，以下配置则失效，请在Notion中自行配置菜单）
  NOBELIUM_MENU_CATEGORY: false, // 显示分类
  NOBELIUM_MENU_TAG: false, // 首页不暴露旧标签体系
  NOBELIUM_MENU_ARCHIVE: true, // 显示归档
  NOBELIUM_MENU_SEARCH: true, // 显示搜索
  NOBELIUM_MENU_RSS: false, // 显示订阅

  NOBELIUM_AUTO_COLLAPSE_NAV_BAR: true // 页头导航栏动画
}
export default CONFIG
