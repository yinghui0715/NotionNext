export const LEO_NAV_ITEMS = [
  { name: '首页', href: '/' },
  { name: '项目', href: '/projects' },
  { name: '文章', href: '/archive' },
  { name: '关于', href: '/about' },
  { name: '联系', href: '/contact' }
]

export const LEO_POSITIONING = {
  identity: '工程师驱动 · AI 协作 · 公开构建',
  footer: 'Engineering AI · AI Automation · Digital Systems'
}

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
    visual: 'quotation',
    visualLabel: 'SPECIFICATION REVIEW',
    category: ['Engineering AI', 'AI Agent', 'Quotation Review'],
    summary:
      '对供应商报价与项目需求进行结构化对比，识别规格偏差、缺失项和潜在风险。',
    currentProgress: '问题定义、审查流程与人工复核边界已完成公开整理。',
    publicEvidence: '问题说明、结构化 Workflow 与验证边界。',
    nextMilestone: '使用 Mock Data 完成最小端到端 Workflow。',
    background:
      '工程项目中的需求、技术规格与供应商响应经常分散在不同文档和表格中。审查工作需要工程师理解上下文，也需要逐项确认响应是否完整。',
    problem:
      '将项目要求与供应商报价逐项对齐，区分符合项、偏差项、缺失项与待澄清项，同时保留工程师最终判断。',
    previousWorkflow: [
      '收集项目需求、技术规格、数据表与供应商报价。',
      '人工在多个文件之间查找对应条款，并记录差异。',
      '把缺失信息和疑问整理成澄清清单。',
      '由工程师再次复核关键规格、例外条件与风险。'
    ],
    solution:
      '构建 Human-in-the-loop 审查流程，把需求与供应商响应转换成统一结构，再生成可追溯的差异、风险和待确认项。',
    responsibility: [
      {
        role: 'AI / 自动化',
        scope: '整理输入、执行结构化比较，并标记偏差、缺失与低置信度结果。'
      },
      {
        role: 'Human Review',
        scope: '验证来源、规格和例外条件，确认重要判断与对外输出。'
      },
      {
        role: '明确边界',
        scope: '不替代工程责任、商业判断或最终批准。'
      }
    ],
    architecture: [
      'Input：接收 Mock Project、Synthetic Data 或经过脱敏的需求与报价。',
      'Normalization：提取条款、参数、单位、供应商响应与备注，并映射到统一字段。',
      'Review：匹配需求和响应，标记偏差、缺失、假设条件与低置信度结果。',
      'Human Review Gate：工程师确认重要判断，必要时退回补充信息。',
      'Output：输出结构化对比表、风险清单和待澄清问题。'
    ],
    process: [
      '选择一个边界清晰、可以匿名化的最小报价审查场景。',
      '定义输入字段、比较规则、风险标签与人工复核点。',
      '准备 Synthetic Data 和 Mock Supplier Response。',
      '运行信息提取、条款匹配与异常标记流程。',
      '与人工审查基线比较，记录误报、漏报和无法判断的情况。',
      '根据验证结果调整规则、提示词与输出结构。'
    ],
    demo: '尚未公开。V1 Demo 计划只使用 Synthetic Data、Mock Project 或 Sanitized Data，并同时展示人工复核步骤。',
    technology: [
      'AI Agent',
      'Structured Review',
      'Human-in-the-loop',
      'Synthetic Data'
    ],
    result:
      '目前公开范围仅包含问题定义与流程设计；项目仍在 Building 阶段，尚未提供可验证 Demo、准确率或商业结果。',
    limitations:
      '文档质量、单位差异、模糊规格和项目例外条件都可能影响判断。该流程只辅助审查，不替代工程责任、商业判断或最终批准。',
    nextStep: [
      '冻结 V1 输入字段、审查规则与输出格式。',
      '完成 Mock Data 和最小端到端 Workflow。',
      '形成可公开的匿名化输入、输出与人工复核示例。',
      '记录当前局限，再决定是否整理为 GitHub Portfolio 与 Case Study。'
    ],
    cover: null,
    publishedDate: null,
    updatedDate: '2026-08-18'
  },
  {
    title: 'Evergreen Engineering Effort Estimator',
    slug: 'evergreen-engineering-effort-estimator',
    status: 'Case Study',
    visual: 'estimation',
    visualLabel: 'EFFORT MODEL',
    category: ['Engineering Tool', 'Estimation', 'Workflow'],
    summary: '将控制器、工作站、网络设备及现场活动的工程人天估算规则标准化。',
    currentProgress: '估算规则、输入边界和复核方法已形成匿名化案例结构。',
    publicEvidence: '规则化估算方法、输入输出结构与保密边界。',
    nextMilestone: '整理可公开的方法说明与匿名化示例。',
    background:
      '工程工作量估算需要同时理解设备范围、项目活动与交付边界，判断常常分散在表格、规则和个人经验中。',
    problem:
      '工程工作量估算需要同时考虑设备、活动和交付边界，规则容易分散在个人经验中。',
    previousWorkflow: null,
    solution:
      '将可复用的估算规则整理为一致的输入、判断与输出结构，便于复核和持续维护。',
    responsibility: [
      {
        role: '工具 / 规则',
        scope: '根据已确认的范围与规则生成可复核的估算明细。'
      },
      {
        role: 'Human Review',
        scope: '确认设备范围、例外活动、交付边界和适用条件。'
      },
      {
        role: '明确边界',
        scope: '不替代报价审批、资源承诺或项目责任。'
      }
    ],
    architecture: null,
    process: null,
    technology: ['Engineering Tool', 'Rule-based Estimation'],
    result: '作为内部工具案例记录；不公开公司数据、报价或具体项目参数。',
    limitations:
      '公开版本仅说明方法，不包含雇主、客户、设备序列号或受保密限制的数据。',
    nextStep: '整理匿名化案例结构与可公开的方法说明。',
    cover: null,
    publishedDate: null,
    updatedDate: '2026-08-18'
  },
  {
    title: 'Engineering Operations AI',
    slug: 'engineering-operations-ai',
    status: 'Prototype',
    visual: 'operations',
    visualLabel: 'OPERATIONS FLOW',
    category: ['Engineering AI', 'Operations', 'Automation'],
    summary:
      '探索从 Technical Offer、BOM、报价审查到设备交付的工程项目智能化流程。',
    currentProgress: '探索范围、流程假设和风险边界已完成第一版整理。',
    publicEvidence: '跨环节流程假设、探索范围与风险说明。',
    nextMilestone: '选择一个可匿名化的最小流程完成端到端原型。',
    background:
      '工程项目的信息会跨越技术方案、物料、报价、审查和交付阶段，多个环节需要重复整理相同上下文。',
    problem:
      '工程项目的信息跨越文档、物料、报价与交付环节，重复整理会削弱判断与协作效率。',
    previousWorkflow: null,
    solution:
      '以原型方式验证不同工程环节如何共享结构化上下文，并连接审查、判断和执行。',
    responsibility: [
      {
        role: 'AI / 自动化',
        scope: '在已定义边界内连接上下文、整理信息并提示需要复核的节点。'
      },
      {
        role: 'Human Review',
        scope: '验证流程假设、处理例外，并决定判断能否进入后续执行。'
      },
      {
        role: '明确边界',
        scope: '原型不代表完整产品能力，也不自动作出工程或交付承诺。'
      }
    ],
    architecture: null,
    process: null,
    technology: ['Engineering AI', 'Workflow Automation'],
    result: '处于 Prototype 阶段，尚未形成对外承诺或商业化结果。',
    limitations: '当前探索不代表完整产品能力，具体流程仍需按真实业务边界验证。',
    nextStep: '选择一个可匿名化的最小流程，完成端到端验证。',
    cover: null,
    publishedDate: null,
    updatedDate: '2026-08-18'
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

export const LEO_CONTACT_PROMPTS = [
  {
    index: '01',
    title: '你的背景',
    description: '说明你的角色与使用场景；公司和客户名称可以匿名化。'
  },
  {
    index: '02',
    title: '当前卡点',
    description: '描述重复发生的步骤、现有输入输出，以及最耗费判断的环节。'
  },
  {
    index: '03',
    title: '希望得到的结果',
    description: '说明希望澄清问题、验证原型，还是建立一套可维护的工作流。'
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
