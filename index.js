// ═══════════════════════════════════════════════════════════════════════════
// TaiHome Realty Inc. (太後地產) — Application Logic & Bilingual UI System
// Supports both root SPA (index.html) and split pages (pages/*.html)
// ═══════════════════════════════════════════════════════════════════════════

const translations = {
    en: {
        // Brand & Header
        'brand-name': 'TAIHOME',
        'brand-sub': 'Realty Inc., Brokerage*',
        'header-cta': 'Free Evaluation',
        'translate-btn': '中文',

        // Navigation
        'nav-home': 'Home',
        'nav-employees': 'Our Team',
        'nav-selling': 'Selling',
        'nav-buying': 'Listings',
        'nav-renting': 'Exclusives',
        'nav-joinFirm': 'Join Us',
        'nav-contact': 'Contact',
        'nav-sell-home': 'Sell Your Home',
        'nav-eval': 'Free Home Evaluation',

        // Home — Hero
        'hero-eyebrow': 'Greater Toronto Area Brokerage',
        'hero-title-main': 'Find Your Perfect ',
        'hero-title-em': 'Home',
        'hero-title-end': ' in Toronto',
        'hero-subtitle': 'TaiHome Realty Inc. connects buyers, sellers, and investors across the GTA with experienced multilingual agents who put your goals first.',
        'hero-search-ph': 'Neighbourhood or address (e.g. Bayview Village, Willowdale)…',
        'hero-search-type': 'All Property Types',
        'hero-search-price': 'Any Max Price',
        'hero-search-btn': 'Search Listings',
        'hero-link-excl': 'Explore Exclusive Off-Market Homes →',
        'hero-link-eval': 'Request a Free Home Valuation →',

        // Home — Stats
        'stat-sold': 'Homes Sold',
        'stat-exp': 'Years in the GTA',
        'stat-sat': 'Client Satisfaction',
        'stat-langs-val': 'EN · 中文 · 粵語',
        'stat-langs': 'Multilingual Team',

        // Home — Featured Listings & Services
        'feat-eyebrow': 'Featured Portfolio',
        'feat-title': 'Signature Properties Across the GTA',
        'feat-view-all': 'View All Listings →',
        'svc-eyebrow': 'Full-Service Brokerage',
        'section-what': 'Tailored Real Estate Advisory',
        'svc-buying-title': 'Buying a Home',
        'svc-buying-desc': 'Explore curated GTA residences and let our local specialists guide every step from tour to closing.',
        'svc-buying-cta': 'Browse Listings →',
        'svc-selling-title': 'Selling Strategically',
        'svc-selling-desc': 'Maximize value with precision market pricing, architectural staging, and targeted bilingual outreach.',
        'svc-selling-cta': 'Selling Process →',
        'svc-renting-title': 'Exclusives & Leasing',
        'svc-renting-desc': 'Access private exclusive assignments, luxury leases, and high-yield GTA investment properties.',
        'svc-renting-cta': 'View Exclusives →',
        'svc-join-title': 'Join Our Brokerage',
        'svc-join-desc': 'Keep more of every commission with $0 monthly desk fees and a flat $500 transaction fee.',
        'svc-join-cta': 'Agent Benefits →',

        // Team Page
        'emp-eyebrow': 'Licensed Professionals',
        'emp-page-title': 'Meet Our Team',
        'emp-page-subtitle': 'Dedicated Greater Toronto Area realtors committed to transparent advice and exceptional outcomes.',
        'emp-view-btn': 'View Realtor.ca Profile ↗',
        'emp-back': 'Back to Team',
        'emp-call': 'Call',
        'emp-email': 'Email',
        'emp-deals': 'Deals Closed',
        'emp-years': 'Experience',
        'emp-contact-title': 'Get in Touch',
        'role-broker': 'Broker of Record',
        'role-sales': 'Sales Representative',

        // Selling & Evaluation Page
        'sell-eyebrow': 'Seller Representation',
        'sell-page-title': 'Selling Your Home',
        'sell-page-subtitle': 'Strategic pricing, elevated presentation, and skilled negotiation from listing to closing.',
        'sell-tab-sell': 'Sell Your Home',
        'sell-tab-eval': 'Free Home Evaluation',
        'sell-why-title': 'Why List With TaiHome Realty?',
        'sell-why-desc': 'We combine hyper-local neighbourhood data, professional staging, and bilingual GTA buyer reach to command top market value.',
        'step1-title': ' Consultation & Pricing',
        'step1-desc': 'We review comparable sales, your timeline, and market momentum to craft a tailored pricing strategy.',
        'step2-title': 'Prepare & Stage',
        'step2-desc': 'Targeted improvement advice and professional staging ensure your home makes an unforgettable first impression.',
        'step3-title': 'Launch & Market',
        'step3-desc': 'MLS® syndication, architectural photography, digital campaigns, and direct outreach across our buyer network.',
        'step4-title': 'Negotiate & Close',
        'step4-desc': 'We advocate fiercely on terms and price, coordinating every detail through a seamless closing day.',
        'cta-sell-title': 'Ready to discuss your property?',
        'cta-sell-desc': 'Speak with a TaiHome advisor for a confidential, no-obligation consultation.',
        'cta-sell-btn': 'Schedule a Conversation',

        'eval-title': 'Complimentary Home Evaluation',
        'eval-desc': 'Discover what your property could command in today\'s Greater Toronto market — zero obligation.',
        'eval-address-label': 'Property Address',
        'eval-address-ph': '123 Main Street, Toronto, ON',
        'eval-type-label': 'Property Type',
        'eval-type-ph': 'Select type',
        'eval-beds-label': 'Bedrooms',
        'eval-beds-ph': 'Select',
        'eval-name-label': 'Your Name',
        'eval-name-ph': 'Jane Smith',
        'eval-phone-label': 'Phone Number',
        'eval-phone-ph': '(647) 701-5158',
        'eval-email-label': 'Email Address',
        'eval-email-ph': 'jane@email.com',
        'eval-notes-label': 'Additional Details',
        'eval-notes-ph': 'Recent upgrades, lot features, or ideal timeline…',
        'eval-submit': 'Request Free Evaluation',
        'eval-success-title': 'Evaluation Request Received',
        'eval-success-desc': 'Thank you — one of our senior GTA agents will prepare your market report and reach out within 24 hours.',

        // Listings & Exclusives
        'buy-eyebrow': 'Brokerage Portfolio',
        'buy-page-title': 'Office Listings',
        'buy-page-subtitle': 'Explore active residences and recent transactions across Toronto, North York, Markham, Vaughan, and Mississauga.',
        'pill-available': 'Available',
        'pill-sold': 'Sold Portfolio',
        'pill-all': 'All Listings',
        'buy-search-ph': 'Search by street, city, or neighbourhood…',
        'buy-filter-type': 'All Property Types',
        'buy-filter-price': 'Any Price',
        'price-800': 'Under $800K',
        'price-1500': 'Under $1.5M',
        'price-2500': 'Under $2.5M',
        'price-4000': 'Under $4M',
        'buy-empty': 'No properties match your current filters. Try viewing All Listings or adjusting price.',

        'rent-eyebrow': 'Private & Rental Collection',
        'rent-page-title': 'Exclusives & Leases',
        'rent-page-subtitle': 'Curated rental residences and exclusive opportunities across the Greater Toronto Area.',

        // Join Our Firm
        'join-eyebrow': 'Careers for Ontario RECO Agents',
        'join-page-title': 'Keep More of Every Commission',
        'join-page-subtitle': 'Grow your real estate business at TaiHome Realty with industry-low flat fees, cloud flexibility, and full brokerage backing.',
        'comm1-eyebrow': 'Buy & Sell Closings',
        'comm1-fig': '$500',
        'comm1-title': 'Flat Transaction Fee',
        'comm1-desc': 'Pay just $500 per residential sale or purchase closing — keep the rest of your hard-earned commission.',
        'comm2-eyebrow': 'Zero Overhead',
        'comm2-fig': '$0 / mo',
        'comm2-title': 'Monthly Desk Fee',
        'comm2-desc': 'Cloud-first remote workflow supported by our North York brokerage headquarters — zero recurring monthly fees.',
        'comm3-eyebrow': 'Leasing & Freedom',
        'comm3-fig': '90 / 10',
        'comm3-title': 'Lease Split · No Lock-In',
        'comm3-desc': 'Retain 90% on lease transactions (only 10% brokerage split) with zero lock-in contracts.',
        'perk-1': 'No Deal, No Charges',
        'perk-2': 'Zero Lock-In Contract',
        'perk-3': '100% Cloud-Ready Workflow',
        'perk-4': 'Lowest Brokerage Fees in GTA',

        'join-form-title': 'Submit Your Agent Application',
        'join-please-read': 'We welcome licensed real estate salespersons and brokers across Ontario. Applicants must hold an active RECO registration in good standing.',
        'app-first-label': 'First Name',
        'app-first-ph': 'Jane',
        'app-last-label': 'Last Name',
        'app-last-ph': 'Smith',
        'app-email-label': 'Email Address',
        'app-email-ph': 'jane@email.com',
        'app-phone-label': 'Phone Number',
        'app-phone-ph': '(647) 701-5158',
        'app-reco-label': 'RECO Registration #',
        'app-reco-ph': 'e.g. 4567890',
        'app-exp-label': 'Years of Experience',
        'app-langs-label': 'Languages Spoken',
        'app-langs-ph': 'e.g. English, Mandarin, Cantonese',
        'app-why-label': 'Tell Us About Your Goals',
        'app-why-ph': 'Share your focus neighbourhoods and what you are looking for in a brokerage…',
        'app-submit': 'Submit Application',
        'app-success-title': 'Application Submitted',
        'app-success-desc': 'Thank you for applying to TaiHome Realty. Our Broker of Record will review your details and reach out within 3–5 business days.',

        // Contact Page
        'contact-eyebrow': 'Direct Advisory',
        'contact-page-title': 'Contact TaiHome Realty',
        'contact-page-subtitle': 'Have a question about buying, selling, or joining our brokerage? Reach out any time.',
        'contact-phone-label': 'Direct Phone',
        'contact-email-label': 'Email',
        'contact-office-label': 'North York Office',
        'contact-map-cta': 'Open in Google Maps ↗',
        'contact-hours-label': 'Business Hours',
        'contact-hours-val': 'Mon–Fri: 9:00 AM – 6:00 PM<br>Sat: 10:00 AM – 4:00 PM',
        'c-name-label': 'Full Name',
        'c-name-ph': 'Your Name',
        'c-phone-label': 'Phone Number',
        'c-phone-ph': '(416) 555-0000',
        'c-email-label': 'Email Address',
        'c-email-ph': 'you@email.com',
        'c-subject-label': 'How Can We Help?',
        'c-subject-ph': 'Select a topic',
        'c-msg-label': 'Message',
        'c-msg-ph': 'Tell us about the property, neighbourhood, or timeline…',
        'c-submit': 'Send Message',
        'contact-success-title': 'Message Sent',
        'contact-success-desc': 'Thank you for reaching out. A TaiHome Realty advisor will respond within one business day.',

        // Footer & Property Card Tokens
        'footer-tagline': 'Real Estate Services across the Greater Toronto Area',
        'footer-rights': 'All Rights Reserved.',
        'unit-bd': 'bd',
        'unit-ba': 'ba',
        'unit-sqft': 'sqft',
        'unit-mo': '/mo',
        'showing-prefix': 'Showing',
        'showing-suffix': 'properties',
        'tag-New': 'New',
        'tag-For Sale': 'For Sale',
        'tag-For Rent': 'For Rent',
        'tag-Sold': 'Sold',
        'tag-Sold Conditional': 'Sold Cond.',
        'tag-Delisted': 'Off Market',
        'tag-Leased': 'Leased',
        'type-Detached': 'Detached',
        'type-Semi-Detached': 'Semi-Detached',
        'type-Townhouse': 'Townhouse',
        'type-Condo': 'Condo',
        'type-Retail': 'Commercial Retail'
    },

    zh: {
        // Brand & Header
        'brand-name': '太後地產',
        'brand-sub': 'TaiHome Realty Inc.*',
        'header-cta': '免费估价',
        'translate-btn': 'EN',

        // Navigation
        'nav-home': '主页',
        'nav-employees': '精英团队',
        'nav-selling': '房屋出售',
        'nav-buying': '公司房源',
        'nav-renting': '独家暗盘',
        'nav-joinFirm': '加盟我们',
        'nav-contact': '联系我们',
        'nav-sell-home': '委托售房',
        'nav-eval': '免费房屋估价',

        // Home — Hero
        'hero-eyebrow': '大多伦多地区精品地产行',
        'hero-title-main': '在多伦多寻觅您理想的',
        'hero-title-em': '家',
        'hero-title-end': '',
        'hero-subtitle': '太後地產连接大多伦多地区买家、卖家与投资者，经验丰富的多语种经纪团队始终将您的目标放在首位。',
        'hero-search-ph': '搜索社区或街道（如 Bayview Village, Willowdale）…',
        'hero-search-type': '全部房产类型',
        'hero-search-price': '不限最高预算',
        'hero-search-btn': '搜索房源',
        'hero-link-excl': '浏览独家暗盘与租赁 →',
        'hero-link-eval': '预约免费专业房屋估价 →',

        // Home — Stats
        'stat-sold': '累计成交房产',
        'stat-exp': '深耕大多伦多年限',
        'stat-sat': '客户满意度',
        'stat-langs-val': '国 · 粤 · 英',
        'stat-langs': '多语种专业服务',

        // Home — Featured Listings & Services
        'feat-eyebrow': '精选房源展示',
        'feat-title': '大多伦多地区代表性物业',
        'feat-view-all': '查看全部房源 →',
        'svc-eyebrow': '全方位地产顾问',
        'section-what': '量身定制的房地产服务',
        'svc-buying-title': '安心置业买房',
        'svc-buying-desc': '精选大多伦多优质住宅与学区名邸，专业经纪全程陪同看房、议价与交割。',
        'svc-buying-cta': '浏览在售房源 →',
        'svc-selling-title': '高价策略售房',
        'svc-selling-desc': '结合精准社区数据分析、专业软装布置与中英双语全渠道推广，助您卖出理想高价。',
        'svc-selling-cta': '了解售房流程 →',
        'svc-renting-title': '暗盘与精品租赁',
        'svc-renting-desc': '尊享非公开暗盘资源、优质住宅租赁及高回报投资物业配置建议。',
        'svc-renting-cta': '查看独家暗盘 →',
        'svc-join-title': '经纪人低费加盟',
        'svc-join-desc': '零月度办公桌费，买卖每单仅收 $500 固定费用，最大化保留您的佣金收入。',
        'svc-join-cta': '查看加盟政策 →',

        // Team Page
        'emp-eyebrow': '持牌专业团队',
        'emp-page-title': '认识我们的团队',
        'emp-page-subtitle': '深耕大多伦多核心社区，为您提供诚信、专业、高效的房地产咨询服务。',
        'emp-view-btn': '查看 Realtor.ca 主页 ↗',
        'emp-back': '返回团队列表',
        'emp-call': '致电',
        'emp-email': '发邮件',
        'emp-deals': '成交记录',
        'emp-years': '从业经验',
        'emp-contact-title': '立即联系',
        'role-broker': '持牌主理经纪 (Broker of Record)',
        'role-sales': '注册地产经纪',

        // Selling & Evaluation Page
        'sell-eyebrow': '卖家专属代理',
        'sell-page-title': '出售您的房产',
        'sell-page-subtitle': '从精准估价、形象包装到谈判过户，全程为您保驾护航。',
        'sell-tab-sell': '出售房屋流程',
        'sell-tab-eval': '免费房屋估价',
        'sell-why-title': '为何委托太後地產出售？',
        'sell-why-desc': '我们凭借本地社区成交数据库、专业家居布置与跨语种买家网络，为您争取最优成交价与条款。',
        'step1-title': '免费咨询与定价',
        'step1-desc': '深入分析周边最新成交数据与市场趋势，结合您的时间安排制定专属挂牌策略。',
        'step2-title': '卖前准备与布置',
        'step2-desc': '提供高性价比焕新建议与专业软装设计，全面提升房屋第一印象与视觉吸引力。',
        'step3-title': '全渠道挂牌推广',
        'step3-desc': 'MLS® 权威发布、建筑级摄影摄像、社交媒体矩阵及精准买家圈层定向推介。',
        'step4-title': '专业谈判与交割',
        'step4-desc': '代表您的核心利益审阅每份报价，把控合同细节直至顺利完成产权交割。',
        'cta-sell-title': '准备了解您的房屋市场潜力？',
        'cta-sell-desc': '立即联系我们的资深经纪，获取一对一保密售房咨询。',
        'cta-sell-btn': '预约售房咨询',

        'eval-title': '免费专业房屋估价',
        'eval-desc': '了解您的房产在当前大多伦多市场的真实价值——无任何附加义务。',
        'eval-address-label': '房产详细地址',
        'eval-address-ph': '例如：51 Foxwarren Dr, Toronto, ON',
        'eval-type-label': '房产类型',
        'eval-type-ph': '请选择类型',
        'eval-beds-label': '卧室数量',
        'eval-beds-ph': '请选择',
        'eval-name-label': '您的姓名',
        'eval-name-ph': '张先生 / 李女士',
        'eval-phone-label': '联系电话',
        'eval-phone-ph': '(647) 701-5158',
        'eval-email-label': '电子邮箱',
        'eval-email-ph': 'name@email.com',
        'eval-notes-label': '补充说明',
        'eval-notes-ph': '近期翻新升级、地块特色或计划出售时间…',
        'eval-submit': '获取免费估价报告',
        'eval-success-title': '估价申请已收到！',
        'eval-success-desc': '感谢您的信任，我们的资深经纪将在 24 小时内为您准备市场评估并与您联系。',

        // Listings & Exclusives
        'buy-eyebrow': '精选物业组合',
        'buy-page-title': '公司房源',
        'buy-page-subtitle': '浏览多伦多、北约克、万锦、旺市及密西沙加的在售名邸与近期成交案例。',
        'pill-available': '在售房源',
        'pill-sold': '成交记录',
        'pill-all': '全部房源',
        'buy-search-ph': '按街道地址、城市或社区名称搜索…',
        'buy-filter-type': '全部房产类型',
        'buy-filter-price': '不限价格',
        'price-800': '$80万以下',
        'price-1500': '$150万以下',
        'price-2500': '$250万以下',
        'price-4000': '$400万以下',
        'buy-empty': '暂无符合当前筛选条件的房源，请尝试切换“全部房源”或放宽价格范围。',

        'rent-eyebrow': '私享暗盘与租赁',
        'rent-page-title': '独家暗盘与租房',
        'rent-page-subtitle': '精选大多伦多地区优质出租物业及非公开独家房源机会。',

        // Join Our Firm
        'join-eyebrow': '安省持牌经纪招募',
        'join-page-title': '保留更多佣金，释放执业自由',
        'join-page-subtitle': '加入太後地產 (TaiHome Realty)，享受全大多伦多极具竞争力的超低平价收费与云端支持。',
        'comm1-eyebrow': '房屋买卖交割',
        'comm1-fig': '$500',
        'comm1-title': '每单固定交易费',
        'comm1-desc': '住宅买卖成交每单仅收 $500 固定费用，助您保留绝大部分辛勤佣金。',
        'comm2-eyebrow': '零固定负担',
        'comm2-fig': '$0 / 月',
        'comm2-title': '零月度办公桌费',
        'comm2-desc': '现代化云端远程办公体系，配合北约克总部行政支持，无任何按月固定收费。',
        'comm3-eyebrow': '租赁分成与自由度',
        'comm3-fig': '90 / 10',
        'comm3-title': '租赁高分成 · 无捆绑合约',
        'comm3-desc': '租赁业务经纪人保留 90%（公司仅收 10%），无业绩捆绑合约，来去自由。',
        'perk-1': '不成交绝不收费',
        'perk-2': '无长期捆绑合约',
        'perk-3': '高效云端远程办公',
        'perk-4': 'GTA 超低经纪行收费',

        'join-form-title': '在线提交加盟申请',
        'join-please-read': '我们热忱欢迎安大略省持牌地产经纪与 Broker 加入。所有申请人须持有有效且信誉良好的 RECO 注册牌照。',
        'app-first-label': '名字 (First Name)',
        'app-first-ph': 'Ming',
        'app-last-label': '姓氏 (Last Name)',
        'app-last-ph': 'Zhang',
        'app-email-label': '电子邮箱',
        'app-email-ph': 'ming@email.com',
        'app-phone-label': '联系电话',
        'app-phone-ph': '(647) 701-5158',
        'app-reco-label': 'RECO 注册编号',
        'app-reco-ph': '例如：4567890',
        'app-exp-label': '从业年限',
        'app-langs-label': '工作语言',
        'app-langs-ph': '例如：普通话、粤语、英语',
        'app-why-label': '您的执业方向与期望',
        'app-why-ph': '请简述您深耕的社区或希望获得的经纪行支持…',
        'app-submit': '提交加盟申请',
        'app-success-title': '加盟申请已提交！',
        'app-success-desc': '感谢您关注太後地產，我们的主理经纪人将在 3–5 个工作日内审阅并与您联系。',

        // Contact Page
        'contact-eyebrow': '随时为您服务',
        'contact-page-title': '联系太後地產',
        'contact-page-subtitle': '无论您计划买房、卖房、租房或咨询经纪加盟，欢迎随时与我们联系。',
        'contact-phone-label': '咨询热线',
        'contact-email-label': '电子邮箱',
        'contact-office-label': '北约克办公地址',
        'contact-map-cta': '在 Google 地图中查看 ↗',
        'contact-hours-label': '办公时间',
        'contact-hours-val': '周一至周五：9:00 AM – 6:00 PM<br>周六：10:00 AM – 4:00 PM',
        'c-name-label': '您的姓名',
        'c-name-ph': '请输入姓名',
        'c-phone-label': '联系电话',
        'c-phone-ph': '(416) 555-0000',
        'c-email-label': '电子邮箱',
        'c-email-ph': 'you@email.com',
        'c-subject-label': '咨询主题',
        'c-subject-ph': '请选择咨询事项',
        'c-msg-label': '留言内容',
        'c-msg-ph': '请告诉我们您关注的房产、社区或时间计划…',
        'c-submit': '发送留言',
        'contact-success-title': '留言已成功发送！',
        'contact-success-desc': '感谢您的来信，我们的地产顾问将在一个工作日内与您取得联系。',

        // Footer & Property Card Tokens
        'footer-tagline': '大多伦多地区专业房地产经纪服务',
        'footer-rights': '版权所有。',
        'unit-bd': '卧',
        'unit-ba': '卫',
        'unit-sqft': '平方尺',
        'unit-mo': '/月',
        'showing-prefix': '当前显示',
        'showing-suffix': '套房源',
        'tag-New': '新盘上市',
        'tag-For Sale': '火热在售',
        'tag-For Rent': '诚意招租',
        'tag-Sold': '已成交',
        'tag-Sold Conditional': '有条件售出',
        'tag-Delisted': '已下架',
        'tag-Leased': '已租出',
        'type-Detached': '独立屋',
        'type-Semi-Detached': '半独立屋',
        'type-Townhouse': '镇屋',
        'type-Condo': '公寓',
        'type-Retail': '商业铺位'
    }
};

const langNameMapZh = {
    'English': '英语',
    'Mandarin': '普通话',
    'Cantonese': '粤语',
    'Mongolian': '蒙古语'
};

let currentLang = 'en';
try {
    const savedLang = localStorage.getItem('taihome-lang');
    if (savedLang === 'zh' || savedLang === 'en') currentLang = savedLang;
} catch (e) {}

// ── 1. Theme Toggle (Dark: Obsidian & Champagne | Light: Warm Ivory) ───────
(function initTheme() {
    const root = document.documentElement;
    let theme = 'dark';
    try {
        const saved = localStorage.getItem('taihome-theme');
        if (saved === 'light' || saved === 'dark') theme = saved;
    } catch (e) {}

    const iconSun  = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    const iconMoon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

    function applyTheme() {
        root.setAttribute('data-theme', theme);
        document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
            btn.innerHTML = theme === 'dark' ? iconSun : iconMoon;
            const label = theme === 'dark' ? 'Switch to Warm Ivory light mode' : 'Switch to Obsidian dark mode';
            btn.setAttribute('title', label);
            btn.setAttribute('aria-label', label);
        });
    }

    applyTheme();

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            theme = theme === 'dark' ? 'light' : 'dark';
            try { localStorage.setItem('taihome-theme', theme); } catch (e) {}
            applyTheme();
        });
    });
})();

// ── 2. SPA Page Navigation & Mobile Drawer ────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer  = document.getElementById('mobile-drawer');

function closeMobileDrawer() {
    if (!mobileDrawer || !mobileMenuBtn) return;
    mobileDrawer.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMobileDrawer();
    });
}

function showPage(tabId, sectionId) {
    const targetPage = document.getElementById('page-' + tabId);
    if (!targetPage) return;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab, .mobile-nav-item').forEach(b => b.classList.remove('active'));

    targetPage.classList.add('active');

    document.querySelectorAll(`.nav-tab[data-tab="${tabId}"], .mobile-nav-item[data-tab="${tabId}"]`).forEach(b => {
        b.classList.add('active');
    });

    if (tabId === 'selling' && sectionId) {
        activateSellingSection(sectionId);
    }

    const empDetails = document.getElementById('employee-details');
    if (empDetails) empDetails.classList.remove('active');

    closeMobileDrawer();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabId === 'home') {
        setTimeout(animateCounters, 80);
    }
}

document.querySelectorAll('[data-tab]').forEach(el => {
    if (el.closest('.dropdown-list')) return;
    el.addEventListener('click', e => {
        const tab = el.dataset.tab;
        if (!tab) return;
        if (el.tagName === 'A') e.preventDefault();
        showPage(tab, el.dataset.section);
    });
});

// Dropdown Navigation
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));

    dropdown.querySelectorAll('.dropdown-list a').forEach(link => {
        link.addEventListener('click', e => {
            if (!link.dataset.tab) return;
            e.preventDefault();
            showPage(link.dataset.tab, link.dataset.section);
            dropdown.classList.remove('open');
        });
    });
});

// Selling Sub-Tabs
function activateSellingSection(section) {
    document.querySelectorAll('.selling-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.selling-section').forEach(s => s.classList.remove('active'));
    const tab = document.querySelector(`.selling-tab[data-section="${section}"]`);
    const sec = document.getElementById(section + '-section');
    if (tab) tab.classList.add('active');
    if (sec) sec.classList.add('active');
}

document.querySelectorAll('.selling-tab[data-section]').forEach(btn => {
    btn.addEventListener('click', () => activateSellingSection(btn.dataset.section));
});

// ── 3. Employee Directory Data & Renderer ─────────────────────────────────
const employees = [
    {
        id: 1,
        name: 'Adam Wei',
        isBroker: true,
        initials: 'AW',
        color: '#b8973d',
        languages: ['English', 'Mandarin'],
        bio: 'With years of experience in the Toronto real estate market, I provide professional, reliable, and personalized services to help you achieve your property goals. Whether you are buying, selling, renting, or investing, I am committed to delivering the best results.',
        phone: '+16477015158',
        email: 'adamwei2020@gmail.com',
        deals: 0,
        years: 0,
        img: 'employees/agent-adam-wei.webp',
        url: 'https://www.realtor.ca/agent/2100055/adam-wei-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 2,
        name: 'Linda Pu',
        isBroker: false,
        initials: 'LP',
        color: '#7a39bb',
        languages: ['English', 'Mandarin'],
        bio: '',
        phone: '+16477834588',
        email: 'pusubi2008@gmail.com',
        deals: 0,
        years: 0,
        img: 'employees/agent-linda-pu.webp',
        url: 'https://www.realtor.ca/agent/1983684/linda-pu-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 3,
        name: 'Bryan Lei',
        isBroker: false,
        initials: 'BL',
        color: '#01696f',
        languages: ['English', 'Cantonese', 'Mandarin'],
        bio: '',
        phone: '+16477015158',
        email: '',
        deals: 0,
        years: 0,
        img: 'employees/agent-bryan-lei.webp',
        url: 'https://www.realtor.ca/agent/2084905/bryan-lei-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 4,
        name: 'David Cheng',
        isBroker: false,
        initials: 'DC',
        color: '#437a22',
        languages: ['English', 'Mandarin'],
        bio: '',
        phone: '+16477015158',
        email: '',
        deals: 0,
        years: 0,
        img: 'employees/agent-david-cheng.webp',
        url: 'https://www.realtor.ca/agent/2100974/david-cheng-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 5,
        name: 'Mahmood Kalantary',
        isBroker: false,
        initials: 'MK',
        color: '#006494',
        languages: ['English'],
        bio: '',
        phone: '+16477015158',
        email: '',
        deals: 0,
        years: 0,
        img: 'employees/agent-mahmood-kalantary.webp',
        url: 'https://www.realtor.ca/agent/2099047/mahmood-kalantary-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 6,
        name: 'Song Hai',
        isBroker: false,
        initials: 'SH',
        color: '#964219',
        languages: ['English', 'Mandarin', 'Mongolian'],
        bio: '',
        phone: '+16477015158',
        email: '',
        deals: 0,
        years: 0,
        img: 'employees/agent-song-hai.webp',
        url: 'https://www.realtor.ca/agent/1988228/song-hai-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 7,
        name: 'Chandler Ren',
        isBroker: false,
        initials: 'CR',
        color: '#1d4ed8',
        languages: ['English', 'Mandarin'],
        bio: '',
        phone: '+16477015158',
        email: '',
        deals: 0,
        years: 0,
        img: 'employees/Chandler-Ren.webp',
        url: 'https://www.realtor.ca/a/h_sn/jb',
    },
];

var ASSET_BASE = (document.body && document.body.dataset && document.body.dataset.assetBase) || '';

function renderEmployeesLang(lang) {
    const grid = document.getElementById('employees-grid');
    if (!grid) return;
    const t = translations[lang] || translations.en;
    grid.innerHTML = employees.map(emp => {
        const roleLabel = emp.isBroker ? t['role-broker'] : t['role-sales'];
        const langPills = emp.languages.map(l => {
            const label = lang === 'zh' ? (langNameMapZh[l] || l) : l;
            return `<span class="emp-lang-pill">${label}</span>`;
        }).join('');
        return `
        <a class="employee-card${emp.isBroker ? ' is-broker' : ''}" href="${emp.url}" target="_blank" rel="noopener noreferrer">
            <div class="emp-avatar-wrap">
                <img class="emp-photo" src="${ASSET_BASE}${emp.img}" alt="${emp.name}" width="112" height="112" loading="lazy" decoding="async"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="emp-avatar" style="background:${emp.color}22;color:${emp.color};display:none">${emp.initials}</div>
            </div>
            <div class="emp-info">
                <span class="emp-role-badge">${roleLabel}</span>
                <h3 class="emp-name">${emp.name}</h3>
                <div class="emp-lang-pills">${langPills}</div>
            </div>
            <div class="emp-actions">
                <span class="btn btn-ghost emp-view-btn">${t['emp-view-btn']}</span>
            </div>
        </a>`;
    }).join('');
}

// ── 4. Listings & Exclusives Data, Parser & Renderer ──────────────────────
const listings = [
    { id: 2, address: '38 Foxwarren Drive, Toronto (Bayview Village)', type: 'Detached', price: 3_690_000, beds: 7, baths: 7, sqft: '3500-5000', tag: 'New', featured: true, url: 'https://www.realmaster.cn/s/1MejwwjRsz?lang=en', img: 'homes/38FoxwarrenDrive.webp' },
    { id: 16, address: '40 Tottenham Road, Toronto (Banbury-Don Mills)', type: 'Detached', price: 1_999_000, beds: 6, baths: 6, sqft: '3500-5000', tag: 'New', featured: true, url: 'https://www.realmaster.cn/s/te3NyAyLGh?lang=en', img: 'homes/40TottenhamRd.webp' },
    { id: 1, address: '3573 Colonial Drive, Mississauga (Erin Mills)', type: 'Detached', price: 1_399_000, beds: 6, baths: 7, sqft: '2500-3000', tag: 'New', featured: true, url: 'https://www.realmaster.cn/s/okhAUZK3vS?lang=en', img: 'homes/3573ColonialDrive.webp' },
    { id: 9, address: '6 Vonda Avenue, Toronto (Willowdale East)', type: 'Detached', price: 1_490_000, beds: 5, baths: 3, sqft: '2000-2500', tag: 'New', url: 'https://www.realmaster.cn/s/qpRHKtSNvg?lang=en', img: 'homes/vonda.webp' },
    { id: 7, address: '12 Vonda Avenue, Toronto (Willowdale East)', type: 'Detached', price: 1_490_000, beds: 6, baths: 4, sqft: '2000-2500', tag: 'For Sale', url: 'https://www.realmaster.cn/s/jPdSGCP4Yp?lang=en', img: 'homes/12vondaave.webp' },
    { id: 5, address: '72 Bowerbank Drive, Toronto (Newtonbrook East)', type: 'Detached', price: 1_279_000, beds: 5, baths: 3, sqft: '1500-2000', tag: 'For Sale', url: 'https://www.realmaster.cn/s/ZBkeSebC0o?lang=en', img: 'homes/bowerbank.webp' },
    { id: 8, address: '462 Ellerslie Avenue, Toronto (Willowdale West)', type: 'Detached', price: 1_249_000, beds: 3, baths: 1, sqft: '700-1100', tag: 'For Sale', url: 'https://www.realmaster.cn/s/NXojbg7CAA?lang=en', img: 'homes/462ellerslieave.webp' },
    { id: 6, address: '43 Karen Street, Vaughan (Crestwood-Springfarm-Yorkhill)', type: 'Semi-Detached', price: 1_098_000, beds: 3, baths: 3, sqft: '1500-2000', tag: 'For Sale', url: 'https://www.realmaster.cn/s/bcgyqnEOsw?lang=en', img: 'homes/43Karen.webp' },
    { id: 3, address: '6 Iron Street, Welland (Lincoln/Crowland)', type: 'Detached', price: 379_900, beds: 3, baths: 1, sqft: '700-1100', tag: 'For Sale', url: 'https://www.realmaster.cn/s/NX15qjS5EN?lang=en', img: 'homes/iron.webp' },
    { id: 4, address: '3880 Midland Avenue, Toronto (Milliken), Unit 05', type: 'Retail', price: 500_000, sqft: '1080', tag: 'Sold Conditional', url: 'https://www.realmaster.cn/s/uABiSgjTDN?lang=en', img: 'homes/3880midlandave.webp' },
    { id: 11, address: '10 Centurion Court, Toronto (Bayview Woods-Steeles)', type: 'Detached', price: 1_400_000, beds: 6, baths: 4, sqft: '2000-2500', tag: 'Sold', url: 'https://www.realmaster.cn/s/nbJIAIxhOh?lang=en', img: 'homes/10Centurion.webp' },
    { id: 10, address: '639 Royal York Road, Toronto (Stonegate-Queensway)', type: 'Detached', price: 1_340_000, beds: 4, baths: 3, sqft: '1500-2000', tag: 'Sold', url: 'https://www.realmaster.com/s/sxrQ4r6Kmk?lang=en', img: 'homes/639Royal.webp' },
    { id: 13, address: '8 Eaton Park Lane, Toronto (L\'Amoreaux), Unit 3', type: 'Townhouse', price: 940_000, beds: 5, baths: 4, sqft: '1500-2000', tag: 'Sold', url: 'https://www.realmaster.cn/s/eBoKtPq4lg?lang=en', img: 'homes/8Eaton.webp' },
    { id: 12, address: '400 Alex Gardner Circle, Aurora (Aurora Village), Unit 74', type: 'Townhouse', price: 630_000, beds: 2, baths: 3, sqft: '1200-1399', tag: 'Sold', url: 'https://www.realmaster.cn/s/MXu7A1nDVn?lang=en', img: 'homes/400Alex.webp' },
    { id: 14, address: '28 Hollywood Avenue, Toronto (Willowdale East), Unit 809', type: 'Condo', price: 798_000, beds: 3, baths: 2, sqft: '1000-1199', tag: 'Delisted', url: 'https://www.realmaster.cn/s/oqXFtQGS4C?lang=en', img: 'homes/holywood.webp' },
    { id: 15, address: '159 Wellesley Street E, Toronto (Cabbagetown-South St. James Town), Unit 1509', type: 'Condo', price: 598_800, beds: 2, baths: 1, sqft: '500-599', tag: 'Delisted', url: 'https://www.realmaster.cn/s/mB1d3WAcIf?lang=en', img: 'homes/159Wellesley.webp' },
];

const rentals = [
    { id: 1, address: 'Garden Suite 15 Merredin Place, Toronto (Banbury-Don Mills)', type: 'Detached', price: 3_000, beds: 2, baths: 1, sqft: '< 700', tag: 'For Rent', isRental: true, url: 'https://www.realmaster.cn/s/W9MCW2izxs?lang=en', img: 'homes/15MerredinPlace.webp' },
    { id: 2, address: '60 Shuter Street, Toronto (Church-Yonge Corridor), Unit 309', type: 'Condo', price: 2_625, beds: 2, baths: 2, sqft: '700-799', tag: 'For Rent', isRental: true, url: 'https://www.realmaster.cn/s/dck4xKw28V?lang=en', img: 'homes/60ShuterStreet.webp' },
    { id: 3, address: '38 Foxwarren Drive, Toronto (Bayview Village)', type: 'Detached', price: 8_000, beds: 7, baths: 7, sqft: '3500-5000', tag: 'Leased', isRental: true, url: 'https://www.realmaster.cn/s/Tl2DrDtDGc?lang=en', img: 'homes/38FoxwarrenDr.webp' },
];

function isAvailableListing(l) {
    return l.tag === 'New' || l.tag === 'For Sale' || l.tag === 'For Rent';
}

function parseAddress(raw) {
    const hoodMatch = raw.match(/\(([^)]+)\)/);
    const neighbourhood = hoodMatch ? hoodMatch[1].trim() : '';
    const cleaned = raw.replace(/\s*\([^)]+\)/, '');
    const parts = cleaned.split(',').map(s => s.trim()).filter(Boolean);
    const street = parts.length > 2 ? `${parts[0]}, ${parts.slice(2).join(', ')}` : (parts[0] || raw);
    const city = parts[1] || 'GTA';
    const area = neighbourhood ? `${neighbourhood} · ${city}` : city;
    return { street, area };
}

function formatPrice(price, isRental, lang) {
    const t = translations[lang] || translations.en;
    if (isRental) return '$' + price.toLocaleString() + t['unit-mo'];
    return '$' + price.toLocaleString();
}

function getTagClass(tag) {
    if (tag === 'New') return 'tag-new';
    if (tag === 'For Sale') return 'tag-sale';
    if (tag === 'For Rent') return 'tag-rent';
    return 'tag-sold';
}

function listingCard(l) {
    const t = translations[currentLang] || translations.en;
    const { street, area } = parseAddress(l.address);
    const active = isAvailableListing(l);
    const tagText = t['tag-' + l.tag] || l.tag;
    const typeText = t['type-' + l.type] || l.type;
    const hasBeds = typeof l.beds === 'number' && typeof l.baths === 'number';

    const bedIcon  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>';
    const bathIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5H4"/></svg>';
    const areaIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>';

    const metaHtml = hasBeds
        ? `<span>${bedIcon}${l.beds} ${t['unit-bd']}</span>
           <span>${bathIcon}${l.baths} ${t['unit-ba']}</span>
           <span>${areaIcon}${l.sqft} ${t['unit-sqft']}</span>`
        : `<span>${areaIcon}${typeText}</span>
           <span>${l.sqft} ${t['unit-sqft']}</span>`;

    return `
        <a class="listing-card${active ? '' : ' is-inactive'}" href="${l.url}" target="_blank" rel="noopener noreferrer">
            <div class="listing-img-placeholder">
                <span class="listing-tag ${getTagClass(l.tag)}">${tagText}</span>
                <span class="listing-type-pill">${typeText}</span>
                <img
                    class="listing-photo"
                    src="${ASSET_BASE}${l.img}"
                    alt="${l.address}"
                    width="480" height="300"
                    loading="lazy"
                    decoding="async"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                />
                <div class="listing-img-icon" style="display:none;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".35"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
            </div>
            <div class="listing-body">
                <div class="listing-area">${area}</div>
                <div class="listing-price">${formatPrice(l.price, l.isRental, currentLang)}</div>
                <p class="listing-address">${street}</p>
                <div class="listing-meta">${metaHtml}</div>
            </div>
        </a>`;
}

function renderListings(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.map(listingCard).join('');
}

function renderFeaturedListings() {
    const featured = listings.filter(l => l.featured).slice(0, 3);
    renderListings(featured, 'featured-listings-grid');
}

// ── 5. Listings Filtering & Status Pills ──────────────────────────────────
let activeStatusFilter = 'available'; // 'available' | 'sold' | 'all'

function updateStatusPillLabels() {
    const t = translations[currentLang] || translations.en;
    const availCount = listings.filter(isAvailableListing).length;
    const soldCount  = listings.length - availCount;

    const pAvail = document.querySelector('.status-pill[data-status="available"]');
    const pSold  = document.querySelector('.status-pill[data-status="sold"]');
    const pAll   = document.querySelector('.status-pill[data-status="all"]');

    if (pAvail) pAvail.textContent = `${t['pill-available']} (${availCount})`;
    if (pSold)  pSold.textContent  = `${t['pill-sold']} (${soldCount})`;
    if (pAll)   pAll.textContent   = `${t['pill-all']} (${listings.length})`;
}

function applyFilters() {
    const searchEl = document.getElementById('search-listings');
    const typeEl   = document.getElementById('filter-type');
    const priceEl  = document.getElementById('filter-price');

    const search   = searchEl ? searchEl.value.trim().toLowerCase() : '';
    const type     = typeEl ? typeEl.value : '';
    const priceMax = (priceEl && priceEl.value) ? parseInt(priceEl.value, 10) * 1000 : Infinity;

    const filtered = listings.filter(l => {
        const matchesStatus =
            activeStatusFilter === 'all' ? true :
            activeStatusFilter === 'available' ? isAvailableListing(l) :
            !isAvailableListing(l);
        const matchesSearch = !search || l.address.toLowerCase().includes(search);
        const matchesType   = !type || l.type === type;
        const matchesPrice  = l.price <= priceMax;
        return matchesStatus && matchesSearch && matchesType && matchesPrice;
    });

    renderListings(filtered, 'listings-grid');

    const emptyEl = document.getElementById('empty-listings');
    if (emptyEl) emptyEl.classList.toggle('hidden', filtered.length > 0);

    const readout = document.getElementById('listings-count');
    if (readout) {
        const t = translations[currentLang] || translations.en;
        readout.textContent = `${t['showing-prefix']} ${filtered.length} ${t['showing-suffix']}`;
    }
}

document.querySelectorAll('.status-pill[data-status]').forEach(pill => {
    pill.addEventListener('click', () => {
        activeStatusFilter = pill.dataset.status;
        document.querySelectorAll('.status-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        applyFilters();
    });
});

['search-listings', 'filter-type', 'filter-price'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applyFilters);
});

// Hero Search Bar Handler (works in both SPA and Multi-Page)
const heroSearchForm = document.getElementById('hero-search-form');
if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', e => {
        const q     = (document.getElementById('hero-search-q')?.value || '').trim();
        const type  = document.getElementById('hero-search-type')?.value || '';
        const price = document.getElementById('hero-search-price')?.value || '';

        const buyingPage = document.getElementById('page-buying');
        if (buyingPage) {
            e.preventDefault();
            const sInput = document.getElementById('search-listings');
            const tInput = document.getElementById('filter-type');
            const pInput = document.getElementById('filter-price');
            if (sInput) sInput.value = q;
            if (tInput) tInput.value = type;
            if (pInput) pInput.value = price;

            // If user searched a specific street that is sold, switch to 'all' automatically so it appears
            if (q) {
                const availMatches = listings.filter(l => isAvailableListing(l) && l.address.toLowerCase().includes(q.toLowerCase()));
                activeStatusFilter = availMatches.length > 0 ? 'available' : 'all';
                document.querySelectorAll('.status-pill').forEach(p => {
                    p.classList.toggle('active', p.dataset.status === activeStatusFilter);
                });
            }

            applyFilters();
            showPage('buying');
        }
        // In multi-page mode (pages/home.html), the form's action="listings.html" submits GET params naturally!
    });
}

// Hydrate URL query parameters on pages/listings.html
(function initUrlQueryFilters() {
    if (!document.getElementById('listings-grid')) return;
    const params = new URLSearchParams(window.location.search);
    const q     = params.get('q');
    const type  = params.get('type');
    const price = params.get('price');
    if (!q && !type && !price) return;

    const sInput = document.getElementById('search-listings');
    const tInput = document.getElementById('filter-type');
    const pInput = document.getElementById('filter-price');
    if (sInput && q) sInput.value = q;
    if (tInput && type) tInput.value = type;
    if (pInput && price) pInput.value = price;

    if (q) {
        const availMatches = listings.filter(l => isAvailableListing(l) && l.address.toLowerCase().includes(q.toLowerCase()));
        if (availMatches.length === 0) {
            activeStatusFilter = 'all';
            document.querySelectorAll('.status-pill').forEach(p => {
                p.classList.toggle('active', p.dataset.status === 'all');
            });
        }
    }
})();

// ── 6. Stat Counter Animation ─────────────────────────────────────────────
function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1200;
        const start = performance.now();
        function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(ease * target);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}

// ── 7. Form Submission Handlers ───────────────────────────────────────────
function setupForm(formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form || !success) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
    });
}
setupForm('eval-form', 'eval-success');
setupForm('application-form', 'app-success');
setupForm('contact-form', 'contact-success');

// ── 8. Bilingual Translation Engine (EN ↔ 中文) ───────────────────────────
function applyTranslations(lang) {
    currentLang = lang;
    const t = translations[lang] || translations.en;

    // Generic [data-i18n] text & [data-i18n-ph] placeholder bindings
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Preserve chevron inside Selling dropdown trigger
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
        const chevron = trigger.querySelector('.chevron');
        trigger.textContent = t['nav-selling'] + ' ';
        if (chevron) trigger.appendChild(chevron);
    });

    // Hero composite title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `${t['hero-title-main']}<em>${t['hero-title-em']}</em>${t['hero-title-end'] || ''}`;
    }

    // Translate property type <select> options across hero, listings, and evaluation
    document.querySelectorAll('select option[data-type-opt]').forEach(opt => {
        const raw = opt.getAttribute('data-type-opt');
        if (t['type-' + raw]) opt.textContent = t['type-' + raw];
    });

    // Re-render dynamic grids & pill labels
    renderEmployeesLang(lang);
    renderFeaturedListings();
    updateStatusPillLabels();
    applyFilters();
    renderListings(rentals, 'rentals-grid');

    // Translate button text
    document.querySelectorAll('#translate-btn, .translate-btn').forEach(btn => {
        btn.textContent = t['translate-btn'];
    });

    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
}

document.querySelectorAll('#translate-btn, .translate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        try { localStorage.setItem('taihome-lang', currentLang); } catch (e) {}
        applyTranslations(currentLang);
    });
});

// ── 9. Initial Render ─────────────────────────────────────────────────────
applyTranslations(currentLang);
animateCounters();
