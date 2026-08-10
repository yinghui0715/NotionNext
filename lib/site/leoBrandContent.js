export const LEO_NAV_ITEMS = [
  { name: '首页', href: '/' },
  { name: '项目', href: '/projects' },
  { name: '文章', href: '/archive' },
  { name: '关于', href: '/about' },
  { name: '联系', href: '/contact' }
]

export const LEO_FOCUS_AREAS = [
  {
    index: '01',
    title: 'Engineering AI',
    description:
      '将报价审查、工程评估、设备选型和项目交付等真实工程流程，转化为可执行的 AI 解决方案。'
  },
  {
    index: '02',
    title: 'AI Automation',
    description:
      '使用 AI Agents、工作流和自动化工具，连接信息、判断与执行，减少重复工作。'
  },
  {
    index: '03',
    title: 'Digital Systems',
    description:
      '从密码、文件、知识和个人数据管理开始，建立可长期维护的数字生活系统。'
  }
]

export const LEO_PROJECTS = [
  {
    title: 'AI Supplier Quotation Review Agent',
    slug: 'ai-supplier-quotation-review-agent',
    status: 'Building',
    category: ['Engineering AI', 'AI Agent', 'Quotation Review'],
    summary:
      '对供应商报价与项目需求进行结构化对比，识别规格偏差、缺失项和潜在风险。',
    problem:
      '报价文件与项目需求通常分散在不同格式中，逐项核对容易遗漏关键差异。',
    previousWorkflow: null,
    solution:
      '构建结构化审查流程，让需求、供应商响应、偏差与待确认项能够被统一比较。',
    architecture: null,
    process: null,
    technology: ['AI Agent', 'Structured Review'],
    result: '项目仍在构建中，尚未发布可验证的公开结果。',
    limitations:
      '当前版本不替代工程判断；输入质量、规格语义和例外条件仍需要人工复核。',
    nextStep: '完成可公开的 Demo 与匿名化输入输出示例。',
    cover: null,
    publishedDate: null,
    updatedDate: null
  },
  {
    title: 'Evergreen Engineering Effort Estimator',
    slug: 'evergreen-engineering-effort-estimator',
    status: 'Case Study',
    category: ['Engineering Tool', 'Estimation', 'Workflow'],
    summary: '将控制器、工作站、网络设备及现场活动的工程人天估算规则标准化。',
    problem:
      '工程工作量估算需要同时考虑设备、活动和交付边界，规则容易分散在个人经验中。',
    previousWorkflow: null,
    solution:
      '将可复用的估算规则整理为一致的输入、判断与输出结构，便于复核和持续维护。',
    architecture: null,
    process: null,
    technology: ['Engineering Tool', 'Rule-based Estimation'],
    result: '作为内部工具案例记录；不公开公司数据、报价或具体项目参数。',
    limitations:
      '公开版本仅说明方法，不包含雇主、客户、设备序列号或受保密限制的数据。',
    nextStep: '整理匿名化案例结构与可公开的方法说明。',
    cover: null,
    publishedDate: null,
    updatedDate: null
  },
  {
    title: 'Engineering Operations AI',
    slug: 'engineering-operations-ai',
    status: 'Prototype',
    category: ['Engineering AI', 'Operations', 'Automation'],
    summary:
      '探索从 Technical Offer、BOM、报价审查到设备交付的工程项目智能化流程。',
    problem:
      '工程项目的信息跨越文档、物料、报价与交付环节，重复整理会削弱判断与协作效率。',
    previousWorkflow: null,
    solution:
      '以原型方式验证不同工程环节如何共享结构化上下文，并连接审查、判断和执行。',
    architecture: null,
    process: null,
    technology: ['Engineering AI', 'Workflow Automation'],
    result: '处于 Prototype 阶段，尚未形成对外承诺或商业化结果。',
    limitations: '当前探索不代表完整产品能力，具体流程仍需按真实业务边界验证。',
    nextStep: '选择一个可匿名化的最小流程，完成端到端验证。',
    cover: null,
    publishedDate: null,
    updatedDate: null
  }
]

export const LEO_START_HERE = [
  {
    index: '01',
    title: '了解 AI Automation × Engineering AI 路线',
    description: '从工程经验、真实流程与长期构建方向开始。',
    href: '/about'
  },
  {
    index: '02',
    title: '查看正在构建的项目',
    description: '了解当前的 Building、Prototype 与 Case Study。',
    href: '/projects'
  },
  {
    index: '03',
    title: '阅读 Digital Systems 系列',
    description: '相关系列内容正在整理，发布后将从这里进入。',
    href: null,
    status: 'Coming Soon'
  }
]

export function getLeoProject(slug) {
  return LEO_PROJECTS.find(project => project.slug === slug) || null
}

export function stripLeadingArticleEmoji(title = '') {
  return String(title)
    .replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, '')
    .trim()
}
