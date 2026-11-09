// ── Translation System (EN ↔ ZH Simplified) ──────────────────

const translations = {
    en: {
        // Top bar
        'bar-title': 'TaiHome Realty',

        // Nav tabs
        'nav-home': 'Home',
        'nav-employees': 'Our Team',
        'nav-selling': 'Selling',
        'nav-buying': 'Office Listings',
        'nav-renting': 'Exclusives',
        'nav-joinFirm': 'Join Our Firm',
        'nav-contact': 'Contact Us',
        'nav-sell-home': 'Sell Your Home',
        'nav-eval': 'Home Evaluation',

        // Home page
        'hero-eyebrow': "Toronto's Trusted Realty",
        'hero-title-main': 'Find Your Perfect ',
        'hero-title-em': 'Home',
        'hero-subtitle': 'TaiHome Realty Inc. connects buyers, sellers, and renters with experienced agents who put your goals first.',
        'hero-btn-browse': 'Browse Homes',
        'hero-btn-agent': 'Talk to an Agent',
        'stat-sold': 'Homes Sold',
        'stat-exp': 'Years of Experience',
        'stat-sat': 'Client Satisfaction',
        'section-what': 'What We Do',
        'svc-buying-title': 'Buying',
        'svc-buying-desc': 'Explore our curated listings and let our agents guide you to the home you deserve.',
        'svc-selling-title': 'Selling',
        'svc-selling-desc': 'Market your property with precision pricing, professional photography, and expert negotiation.',
        'svc-renting-title': 'Renting',
        'svc-renting-desc': 'Discover quality rental homes and investment properties across the GTA.',
        'svc-join-title': 'Join the Team',
        'svc-join-desc': 'Ambitious agents are welcome. Grow your career at TaiHome Realty.',

        // Employees page
        'emp-page-title': 'Our Team',
        'emp-page-subtitle': 'Meet the experienced professionals at TaiHome Realty',
        'emp-view-btn': 'View Profile',
        'emp-back': 'Back to Team',
        'emp-call': 'Call',
        'emp-email': 'Email',
        'emp-deals': 'Deals Closed',
        'emp-years': 'Experience',
        'emp-contact-title': 'Get in Touch',

        // Selling page
        'sell-page-title': 'Selling Your Home',
        'sell-page-subtitle': 'Expert guidance from listing to closing',
        'sell-tab-sell': 'Sell Your Home',
        'sell-tab-eval': 'Home Evaluation',
        'sell-why-title': 'Why Sell With TaiHome?',
        'sell-why-desc': 'We leverage local market knowledge, professional staging, and powerful marketing to get you top dollar.',
        'step1-title': 'Free Consultation',
        'step1-desc': 'We review your goals, timeline, and the current market to build a tailored selling strategy.',
        'step2-title': 'Prepare & Stage',
        'step2-desc': 'Our team advises on improvements and professional staging to maximize your home\'s appeal.',
        'step3-title': 'List & Market',
        'step3-desc': 'MLS listing, social media campaigns, professional photography, and targeted outreach.',
        'step4-title': 'Negotiate & Close',
        'step4-desc': 'We negotiate on your behalf and handle all paperwork through to a smooth closing.',
        'cta-sell-title': 'Ready to list your home?',
        'cta-sell-desc': 'Contact us today for a no-obligation conversation.',
        'cta-sell-btn': 'Contact Us',
        'eval-title': 'Free Home Evaluation',
        'eval-desc': 'Find out what your home is worth in today\'s market — no obligation, no pressure.',
        'eval-address-label': 'Property Address',
        'eval-address-ph': '123 Main Street, Toronto, ON',
        'eval-type-label': 'Property Type',
        'eval-type-ph': 'Select type',
        'eval-beds-label': 'Bedrooms',
        'eval-beds-ph': 'Select',
        'eval-name-label': 'Your Name',
        'eval-name-ph': 'Jane Smith',
        'eval-phone-label': 'Phone Number',
        'eval-phone-ph': '(416) 555-0100',
        'eval-email-label': 'Email Address',
        'eval-email-ph': 'jane@email.com',
        'eval-notes-label': 'Additional Notes',
        'eval-notes-ph': 'Any recent renovations, unique features, or timeline...',
        'eval-submit': 'Request Evaluation',
        'eval-success-title': 'Request Received!',
        'eval-success-desc': 'One of our agents will reach out within 24 hours with your home evaluation.',

        // Buying page
        'buy-page-title': 'Office Listings',
        'buy-page-subtitle': 'Explore available properties in the Greater Toronto Area',
        'buy-search-ph': 'Search by address or neighbourhood…',
        'buy-filter-type': 'All Types',
        'buy-filter-price': 'Any Price',
        'buy-empty': 'No listings match your search. Try adjusting filters.',

        // Renting page
        'rent-page-title': 'Exclusives',
        'rent-page-subtitle': 'Find exclusive listings across the Greater Toronto Area',

        // Join page
        'join-page-title': 'Apply Now',
        'join-page-subtitle': 'Welcome Join the TaiHome Realty family and grow your real estate career',
        'join-why-title': 'TaiHome Realty Policies:',
        'join-b1': 'Low Cost, Remote Work;',
        'join-b2': 'No Desk Fee (No Office Yet);',
        'join-b3': 'Lease 10%;',
        'join-b4': 'Selling & Buying $500;',
        'join-b5': 'No Deal No Charges;',
        'join-b6': 'No Contract;',
        'join-b7': 'Lowest Charges In GTA;',
        'join-form-title': 'Submit Your Application',
        'join-please-read': 'Please read carefully — we are currently accepting applications for licensed real estate agents in Ontario. All applicants must hold a valid RECO registration.',
        'app-first-label': 'First Name',
        'app-first-ph': 'Jane',
        'app-last-label': 'Last Name',
        'app-last-ph': 'Smith',
        'app-email-label': 'Email',
        'app-email-ph': 'jane@email.com',
        'app-phone-label': 'Phone',
        'app-phone-ph': '(416) 555-0100',
        'app-reco-label': 'RECO Registration #',
        'app-reco-ph': 'e.g. 4567890',
        'app-exp-label': 'Years of Experience',
        'app-langs-label': 'Languages Spoken',
        'app-langs-ph': 'e.g. English, Mandarin, Cantonese',
        'app-why-label': 'Why do you want to join TaiHome?',
        'app-why-ph': 'Tell us about yourself and your goals…',
        'app-submit': 'Submit Application',
        'app-success-title': 'Application Submitted!',
        'app-success-desc': 'Thank you for your interest. We\'ll review your application and be in touch within 3\u20135 business days.',

        // Contact page
        'contact-page-title': 'Contact Us',
        'contact-page-subtitle': 'We\'re here to help \u2014 reach out any time',
        'contact-phone-label': 'Phone',
        'contact-email-label': 'Email',
        'contact-office-label': 'Office',
        'contact-hours-label': 'Office Hours',
        'contact-hours-val': 'Mon–Fri: 9:00 AM – 6:00 PM<br>Sat: 10:00 AM – 4:00 PM',
        'c-name-label': 'Name',
        'c-name-ph': 'Your Name',
        'c-phone-label': 'Phone',
        'c-phone-ph': '(416) 555-0000',
        'c-email-label': 'Email',
        'c-email-ph': 'you@email.com',
        'c-subject-label': 'Subject',
        'c-subject-ph': 'How can we help?',
        'c-msg-label': 'Message',
        'c-msg-ph': 'Tell us more about how we can help…',
        'c-submit': 'Send Message',
        'contact-success-title': 'Message Sent!',
        'contact-success-desc': 'Thanks for reaching out. An agent will contact you within one business day.',

        'footer-tagline': 'Real Estate Services across the Greater Toronto Area',
        'footer-rights': 'All Rights Reserved. Independently Developed.',

        // Translate button
        'translate-btn': '中文',
    },

    zh: {
        'bar-title': '太後地產',
        'nav-home': '主页',
        'nav-employees': '我们的团队',
        'nav-selling': '房屋出售',
        'nav-buying': '公司房源',
        'nav-renting': '暗盘',
        'nav-joinFirm': '加入我们',
        'nav-contact': '联系我们',
        'nav-sell-home': '出售房屋',
        'nav-eval': '房屋估价',
        'hero-eyebrow': '多伦多值得信赖的房地产公司',
        'hero-title-main': '找到您理想的',
        'hero-title-em': '家',
        'hero-subtitle': '太後地產公司将买家、卖家和租户与经验丰富的经纪人联系起来，我们始终将您的目标放在首位。',
        'hero-btn-browse': '浏览房源',
        'hero-btn-agent': '联系经纪人',
        'stat-sold': '成交房屋',
        'stat-exp': '从业年限',
        'stat-sat': '客户满意度',
        'section-what': '我们的服务',
        'svc-buying-title': '公司房源',
        'svc-buying-desc': '浏览我们精选的房源，让我们的经纪人引导您找到理想的家。',
        'svc-selling-title': '房屋出售',
        'svc-selling-desc': '通过精准定价、专业摄影和专家谈判，让您的房产卖出最佳价格。',
        'svc-renting-title': '暗盘',
        'svc-renting-desc': '在大多伦多地区发现优质出租房屋和投资物业。',
        'svc-join-title': '加入团队',
        'svc-join-desc': '欢迎有进取心的经纪人加入，在太後地產发展您的事业。',
        'emp-page-title': '我们的团队',
        'emp-page-subtitle': '认识太後地產经验丰富的专业人士',
        'emp-view-btn': '查看简介',
        'emp-back': '返回团队',
        'emp-call': '致电',
        'emp-email': '发邮件',
        'emp-deals': '成交记录',
        'emp-years': '从业经验',
        'emp-contact-title': '立即联系',
        'sell-page-title': '出售您的房屋',
        'sell-page-subtitle': '从挂牌到成交的专业指导',
        'sell-tab-sell': '出售房屋',
        'sell-tab-eval': '房屋估价',
        'sell-why-title': '为何选择泰家出售？',
        'sell-why-desc': '我们凭借深厚的本地市场知识、专业布置和强大的营销推广，助您卖出最高价。',
        'step1-title': '免费咨询',
        'step1-desc': '我们审查您的目标、时间安排和当前市场，制定专属销售策略。',
        'step2-title': '准备与布置',
        'step2-desc': '我们的团队为您提供装修建议和专业布置，最大化房产的吸引力。',
        'step3-title': '挂牌与推广',
        'step3-desc': 'MLS挂牌、社交媒体营销、专业摄影及精准客户触达。',
        'step4-title': '谈判与成交',
        'step4-desc': '我们代表您进行谈判，处理全部文件，确保顺利过户。',
        'cta-sell-title': '准备好挂牌了吗？',
        'cta-sell-desc': '立即联系我们，享受无压力的免费咨询。',
        'cta-sell-btn': '联系我们',
        'eval-title': '免费房屋估价',
        'eval-desc': '了解您房屋在当前市场的价值——无义务，无压力。',
        'eval-address-label': '房产地址',
        'eval-address-ph': '123 Main Street, Toronto, ON',
        'eval-type-label': '房产类型',
        'eval-type-ph': '请选择',
        'eval-beds-label': '卧室数量',
        'eval-beds-ph': '请选择',
        'eval-name-label': '您的姓名',
        'eval-name-ph': '张三',
        'eval-phone-label': '电话号码',
        'eval-phone-ph': '(416) 555-0100',
        'eval-email-label': '电子邮件',
        'eval-email-ph': 'zhang@email.com',
        'eval-notes-label': '备注',
        'eval-notes-ph': '近期装修、特色或时间要求等……',
        'eval-submit': '申请估价',
        'eval-success-title': '申请已收到！',
        'eval-success-desc': '我们的经纪人将在24小时内与您联系，提供房屋估价报告。',
        'buy-page-title': '公司房源',
        'buy-page-subtitle': '浏览大多伦多地区的可行房源',
        'buy-search-ph': '按地址或社区搜索…',
        'buy-filter-type': '全部类型',
        'buy-filter-price': '不限价格',
        'buy-empty': '没有符合条件的房源，请尝试调整筛选条件。',
        'rent-page-title': '暗盘',
        'rent-page-subtitle': '大多伦多地区的优质出租房源',
        'join-page-title': '立即申请',
        'join-page-subtitle': '欢迎加盟太後地產大家庭，发展您的房地产事业',
        'join-why-title': '太後地產政策：',
        'join-b1': '低成本，远程办公;',
        'join-b2': '无办公费（暂无办公室）;',
        'join-b3': '租赁收费10%;',
        'join-b4': '买卖收费$500;',
        'join-b5': '不做单不收费;',
        'join-b6': '无合约;',
        'join-b7': '大多伦多地区收费最低;',
        'join-form-title': '提交申请',
        'join-please-read': '请仔细阅读——我们目前正在招募安大略省持牌房地产经纪人。所有申请人须持有有效的RECO牌照。',
        'app-first-label': '名字',
        'app-first-ph': '三',
        'app-last-label': '姓氏',
        'app-last-ph': '张',
        'app-email-label': '电子邮件',
        'app-email-ph': 'zhang@email.com',
        'app-phone-label': '电话',
        'app-phone-ph': '(416) 555-0100',
        'app-reco-label': 'RECO注册号',
        'app-reco-ph': '例如：4567890',
        'app-exp-label': '从业年限',
        'app-langs-label': '使用语言',
        'app-langs-ph': '例如：普通话、粤语、英语',
        'app-why-label': '您为什么想加入太後？',
        'app-why-ph': '请介绍您自己及您的职业目标……',
        'app-submit': '提交申请',
        'app-success-title': '申请已提交！',
        'app-success-desc': '感谢您的关注，我们将在3至5个工作日内审核您的申请并与您联系。',
        'contact-page-title': '联系我们',
        'contact-page-subtitle': '随时欢迎您联系我们',
        'contact-phone-label': '电话',
        'contact-email-label': '电子邮件',
        'contact-office-label': '办公室',
        'contact-hours-label': '办公时间',
        'contact-hours-val': '周一至周五：上午9:00 – 下午6:00<br>周六：上午10:00 – 下午4:00',
        'c-name-label': '姓名',
        'c-name-ph': '您的姓名',
        'c-phone-label': '电话',
        'c-phone-ph': '(416) 555-0000',
        'c-email-label': '电子邮件',
        'c-email-ph': 'you@email.com',
        'c-subject-label': '主题',
        'c-subject-ph': '我们能为您做什么？',
        'c-msg-label': '留言',
        'c-msg-ph': '请详细描述您的需求……',
        'c-submit': '发送留言',
        'contact-success-title': '留言已发送！',
        'contact-success-desc': '感谢您的联系，我们的经纪人将在一个工作日内与您联系。',
        'footer-tagline': '大多伦多地区房地产服务',
        'footer-rights': '版权所有。独立开发。',
        'translate-btn': 'English',
    }
};

// ── Theme Toggle (Dark = gold-on-black, Light = black-on-gold) ─
(function () {
    const toggle = document.querySelector('[data-theme-toggle]');
    const root = document.documentElement;
    let theme = 'dark';

    const iconDark  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const iconLight = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

    function apply() {
        root.setAttribute('data-theme', theme);
        if (toggle) {
        toggle.innerHTML = theme === 'dark' ? iconDark : iconLight;
        toggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    apply();

    if (toggle) {
        toggle.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        apply();
        });
    }
})();

// ── Page Navigation ───────────────────────────────────────────
function showPage(tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));

    const page = document.getElementById('page-' + tabId);
    if (page) page.classList.add('active');

    document.querySelectorAll(`.nav-tab[data-tab="${tabId}"]`).forEach(b => b.classList.add('active'));

    const empDetails = document.getElementById('employee-details');
    if (empDetails) empDetails.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => showPage(btn.dataset.tab));
    });

document.querySelectorAll('[data-tab]:not(.nav-tab):not(.dropdown-trigger)').forEach(el => {
    el.addEventListener('click', () => showPage(el.dataset.tab));
});


// ── Dropdown Nav ─────────────────────────────────────────────
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));

    dropdown.querySelectorAll('.dropdown-list a').forEach(link => {
    link.addEventListener('click', e => {
        // Multi-page nav uses plain links (no data-tab) — let them navigate normally.
        if (!link.dataset.tab) return;
        e.preventDefault();
        showPage(link.dataset.tab);
        const section = link.dataset.section;
        if (section) activateSellingSection(section);
        dropdown.classList.remove('open');
    });
  });
}


// ── Selling Tabs ─────────────────────────────────────────────
function activateSellingSection(section) {
    document.querySelectorAll('.selling-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.selling-section').forEach(s => s.classList.remove('active'));
    const tab = document.querySelector(`.selling-tab[data-section="${section}"]`);
    const sec = document.getElementById(section + '-section');
    if (tab) tab.classList.add('active');
    if (sec) sec.classList.add('active');
}

document.querySelectorAll('.selling-tab').forEach(btn => {
    btn.addEventListener('click', () => activateSellingSection(btn.dataset.section));
});


// ── Employee Data ─────────────────────────────────────────────
const employees = [
    {
        id: 1,
        name: 'Adam Wei',
        title: 'Broker of Record',
        initials: 'AW',
        color: '#437a22',
        languages: 'English, Mandarin',
        bio: 'With years of experience in the Toronto real estate market, I provide professional, reliable, and personalized services to help you achieve your property goals. Whether you are buying, selling, renting, or investing, I am committed to delivering the best results.',
        phone: '+16477015158',
        email: 'adamwei2020@gmail.com',
        deals: 0,
        years: 0,
        img: 'employees/agent-adam-wei.jpg',
        url: 'https://www.realtor.ca/agent/2100055/adam-wei-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 2,
        name: 'Linda Pu',
        title: 'Salesperson',
        initials: 'LP',
        color: '#7a39bb',
        languages: 'English, Mandarin',
        bio: 'n/a',
        phone: '+16477834588',
        email: 'pusubi2008@gmail.com',
        deals: 0,
        years: 0,
        img: 'employees/agent-linda-pu.jpg',
        url: 'https://www.realtor.ca/agent/1983684/linda-pu-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 3,
        name: 'Bryan Lei',
        title: 'Salesperson',
        initials: 'BL',
        color: '#01696f',
        languages: 'English, Cantonese, Mandarin',
        bio: 'n/a',
        phone: '+16477015158',
        email: 'n/a',
        deals: 0,
        years: 0,
        img: 'employees/agent-bryan-lei.jpg',
        url: 'https://www.realtor.ca/agent/2084905/bryan-lei-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 4,
        name: 'David Cheng',
        title: 'Salesperson',
        initials: 'DC',
        color: '#437a22',
        languages: 'English, Mandarin',
        bio: 'n/a',
        phone: '+16477015158',
        email: 'n/a',
        deals: 0,
        years: 0,
        img: 'employees/agent-david-cheng.jpg',
        url: 'https://www.realtor.ca/agent/2100974/david-cheng-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 5,
        name: 'Mahmood Kalantary',
        title: 'Salesperson',
        initials: 'MK',
        color: '#006494',
        languages: 'English',
        bio: 'n/a',
        phone: '+16477015158',
        email: 'n/a',
        deals: 0,
        years: 0,
        img: 'employees/agent-mahmood-kalantary.jpg',
        url: 'https://www.realtor.ca/agent/2099047/mahmood-kalantary-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 6,
        name: 'Song Hai',
        title: 'Salesperson',
        initials: 'SH',
        color: '#964219',
        languages: 'English, Mandarin, Mongolian',
        bio: 'n/a',
        phone: '+16477015158',
        email: 'n/a',
        deals: 0,
        years: 0,
        img: 'employees/agent-song-hai.jpg',
        url: 'https://www.realtor.ca/agent/1988228/song-hai-51-foxwarren-dr-toronto-ontario-m2k1l1',
    },
    {
        id: 7,
        name: 'Chandler Ren',
        title: 'Salesperson',
        initials: 'CR',
        color: '#1d4ed8',
        languages: 'English, Mandarin',
        bio: 'n/a',
        phone: '+16477015158',
        email: 'n/a',
        deals: 0,
        years: 0,
        img: 'employees/Chandler-Ren.jpg',
        url: 'https://www.realtor.ca/a/h_sn/jb',
    },
];


// ── Render Employees ──────────────────────────────────────────
// Split pages under pages/ set data-asset-base="../" on <body> so
// relative image paths resolve correctly. Root page defaults to ''.
var ASSET_BASE = (document.body && document.body.dataset && document.body.dataset.assetBase) || '';
function renderEmployeesLang(lang) {
    const grid = document.getElementById('employees-grid');
    if (!grid) return;
    const t = translations[lang];
    grid.innerHTML = employees.map(emp => `
        <a class="employee-card" href="${emp.url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none; display:block; cursor:pointer;">
        <div class="emp-avatar-wrap">
            <img class="emp-photo" src="${ASSET_BASE}${emp.img}" alt="${emp.name}" width="96" height="96" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="emp-avatar" style="background:${emp.color}22;color:${emp.color};display:none">${emp.initials}</div>
        </div>
        <div class="emp-info">
            <h3 class="emp-name">${emp.name}</h3>
            <p class="emp-title">${emp.title}</p>
            <p class="emp-langs">${emp.languages}</p>
        </div>
        <span class="btn btn-ghost emp-view-btn">${t['emp-view-btn']}</span>
        </a>
    `).join('');
}

// Employee detail view (kept for any future use but cards now link externally)
function openEmployeeDetail(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    const avatarEl = document.getElementById('profile-avatar');
    avatarEl.style.cssText = `background:${emp.color}22;color:${emp.color}`;
    // Show photo in profile if available
    avatarEl.innerHTML = `
        <img src="${ASSET_BASE}${emp.img}" alt="${emp.name}"
        style="width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:9999px;"
        onerror="this.style.display='none';this.parentElement.textContent='${emp.initials}';"
        />
    `;

    document.getElementById('profile-name').textContent = emp.name;
    document.getElementById('profile-title').textContent = emp.title;
    document.getElementById('profile-langs').innerHTML = `🌐 ${emp.languages}`;
    document.getElementById('profile-bio').textContent = emp.bio;
    document.getElementById('profile-stats').innerHTML = `
        <div class="stat-pill">
        <strong>${emp.deals}</strong>
        <span>Deals Closed</span>
        </div>
        <div class="stat-pill">
        <strong>${emp.years}</strong>
        <span>Experience</span>
        </div>
    `;

    const phoneEl = document.getElementById('profile-phone');
    const emailEl = document.getElementById('profile-email');
    if (phoneEl) phoneEl.href = 'tel:' + emp.phone;
    if (emailEl) emailEl.href = 'mailto:' + emp.email;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('employee-details').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('back-btn')?.addEventListener('click', () => {
    document.getElementById('employee-details').classList.remove('active');
    document.getElementById('page-employees').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Listings Data ─────────────────────────────────────────────
const listings = [
    { id: 1, address: '3573 Colonial Drive, Mississauga (Erin Mills)', type: 'Detached', price: 1_399_000, beds: 6, baths: 7, sqft: "2500-3000", tag: 'New', url: 'https://www.realmaster.cn/s/okhAUZK3vS?lang=en', img: 'homes/3573ColonialDrive.jpg' },
    { id: 2, address: '38 Foxwarren Drive, Toronto (Bayview Village)', type: 'Detached', price: 3_690_000, beds: 7, baths: 7, sqft: "3500-5000", tag: 'New', url: 'https://www.realmaster.cn/s/1MejwwjRsz?lang=en', img: 'homes/38FoxwarrenDrive.jpg' },
    { id: 3, address: '6 Iron Street, Welland (Lincoln/Crowland)', type: 'Detached', price: 379_900, beds: 3, baths: 1, sqft: "700-1100", tag: 'For Sale', url: 'https://www.realmaster.cn/s/NX15qjS5EN?lang=en', img: 'homes/iron.jpg' },
    { id: 4, address: '3880 Midland Avenue, Toronto (Milliken), Unit 05', type: 'Retail', price: 500_000, sqft: "1080", tag: 'Sold Conditional', url: 'https://www.realmaster.cn/s/uABiSgjTDN?lang=en', img: 'homes/3880midlandave.jpg' },
    { id: 5, address: '72 Bowerbank Drive, Toronto (Newtonbrook East)', type: 'Detached', price: 1_279_000, beds: 5, baths: 3, sqft: "1500-2000", tag: 'For Sale', url: 'https://www.realmaster.cn/s/ZBkeSebC0o?lang=en', img: 'homes/bowerbank.jpg' },
    { id: 6, address: '43 Karen Street, Vaughan (Crestwood-Springfarm-Yorkhill)', type: 'Semi-Detached', price: 1_098_000, beds: 3, baths: 3, sqft: "1500-2000", tag: 'For Sale', url: 'https://www.realmaster.cn/s/bcgyqnEOsw?lang=en', img: 'homes/43Karen.jpg' },
    { id: 7, address: '12 Vonda Avenue, Toronto (Willowdale East)', type: 'Detached', price: 1_490_000, beds: 6, baths: 4, sqft: "2000-2500", tag: 'For Sale', url: 'https://www.realmaster.cn/s/jPdSGCP4Yp?lang=en', img: 'homes/12vondaave.jpg' },
    { id: 8, address: '462 Ellerslie Avenue, Toronto (Willowdale West)', type: 'Detached', price: 1_249_000, beds: 3, baths: 1, sqft: "700-1100", tag: 'For Sale', url: 'https://www.realmaster.cn/s/NXojbg7CAA?lang=en', img: 'homes/462ellerslieave.jpg' },
    { id: 9, address: '6 Vonda Avenue, Toronto (Willowdale East)', type: 'Detached', price: 1_490_000, beds: 5, baths: 3, sqft: "2000-2500", tag: 'New', url: 'https://www.realmaster.cn/s/qpRHKtSNvg?lang=en', img: 'homes/vonda.jpg' },
    { id: 10, address: '639 Royal York Road, Toronto (Stonegate-Queensway)', type: 'Detached', price: 1_340_000, beds: 4, baths: 3, sqft: "1500-2000", tag: 'Sold', url: 'https://www.realmaster.com/s/sxrQ4r6Kmk?lang=en', img: 'homes/639Royal.jpg' },
    { id: 11, address: '10 Centurion Court, Toronto (Bayview Woods-Steeles)', type: 'Detached', price: 1_400_000, beds: 6, baths: 4, sqft: "2000-2500", tag: 'Sold', url: 'https://www.realmaster.cn/s/nbJIAIxhOh?lang=en', img: 'homes/10Centurion.jpg' },
    { id: 12, address: '400 Alex Gardner Circle, Aurora (Aurora Village), Unit 74', type: 'Townhouse', price: 630_000, beds: 2, baths: 3, sqft: "1200-1399", tag: 'Sold', url: 'https://www.realmaster.cn/s/MXu7A1nDVn?lang=en', img: 'homes/400Alex.jpg' },
    { id: 13, address: '8 Eaton Park Lane, Toronto (L\'Amoreaux), Unit 3', type: 'Townhouse', price: 940_000, beds: 5, baths: 4, sqft: "1500-2000", tag: 'Sold', url: 'https://www.realmaster.cn/s/eBoKtPq4lg?lang=en', img: 'homes/8Eaton.jpg' },
    { id: 14, address: '28 Hollywood Avenue Toronto (Willowdale East), Unit 809', type: 'Condo', price: 798_000, beds: 3, baths: 2, sqft: "1000-1199", tag: 'Delisted', url: 'https://www.realmaster.cn/s/oqXFtQGS4C?lang=en', img: 'homes/holywood.jpg' },
    { id: 15, address: '159 Wellesley Street E, Toronto (Cabbagetown-South St. James Town), Unit 1509', type: 'Condo', price: 598_800, beds: 2, baths: 1, sqft: "500-599", tag: 'Delisted', url: 'https://www.realmaster.cn/s/mB1d3WAcIf?lang=en', img: 'homes/159Wellesley.jpg' },
    { id: 16, address: '40 Tottenham Road, Toronto (Banbury-Don Mills)', type: 'Detached', price: 1_999_000, beds: 6, baths: 6, sqft: "3500-5000", tag: 'New', url: 'https://www.realmaster.cn/s/te3NyAyLGh?lang=en', img: 'homes/placeholder.svg' },
];

const rentals = [
    { id: 1, address: 'Garden Suite 15 Merredin Place, Toronto (Banbury-Don Mills)', type: 'Detached', price: 3_000, beds: 2, baths: 1, sqft: "< 700", tag: 'For Rent', isRental: true, url: 'https://www.realmaster.cn/s/W9MCW2izxs?lang=en', img: 'homes/placeholder.svg' },
    { id: 2, address: '60 Shuter Street, Toronto (Church-Yonge Corridor), Unit 309', type: 'Condo', price: 2_625, beds: 2, baths: 2, sqft: "700-799", tag: 'For Rent', isRental: true, url: 'https://www.realmaster.cn/s/dck4xKw28V?lang=en', img: 'homes/placeholder.svg' },
    { id: 3, address: '38 Foxwarren Drive, Toronto (Bayview Village)', type: 'Detached', price: 8_000, beds: 7, baths: 7, sqft: "3500-5000", tag: 'Leased', isRental: true, url: 'https://www.realmaster.cn/s/Tl2DrDtDGc?lang=en', img: 'homes/placeholder.svg' },
];

function formatPrice(price, isRental) {
    if (isRental) return '$' + price.toLocaleString() + '/mo';
    if (price >= 1_000_000) return '$' + (price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 2) + 'M';
    return '$' + (price / 1000).toFixed(0) + 'K';
}

function listingCard(l) {
    const colors = { 'For Sale': 'var(--color-primary)', 'New': 'var(--color-success)', 'For Rent': 'var(--color-blue)' };
    return `
        <a class="listing-card" href="${l.url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;cursor:pointer;">
        <div class="listing-img-placeholder">
            <span class="listing-tag" style="background:${colors[l.tag] || 'var(--color-primary)'}66;color:${colors[l.tag] || 'var(--color-primary)'}">${l.tag}</span>
            <img
            class="listing-photo"
            src="${ASSET_BASE}${l.img}"
            alt="${l.address}"
            width="400" height="180"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            />
            <div class="listing-img-icon" style="display:none;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".3"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
        </div>
        <div class="listing-body">
            <div class="listing-price">${formatPrice(l.price, l.isRental)}</div>
            <p class="listing-address">${l.address}</p>
            <p class="listing-type">${l.type}</p>
            <div class="listing-meta">
            <span>${l.beds} bd</span>
            <span>${l.baths} ba</span>
            <span>${l.sqft.toLocaleString()} sqft</span>
            </div>
        </div>
        </a>
    `;
}

function renderListings(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.map(listingCard).join('');
}

// Buying page filters
function applyFilters() {
    const search = document.getElementById('search-listings').value.toLowerCase();
    const type = document.getElementById('filter-type').value;
    const priceMax = parseInt(document.getElementById('filter-price').value) * 1000 || Infinity;
    const filtered = listings.filter(l =>
        (!search || l.address.toLowerCase().includes(search)) &&
        (!type || l.type === type) &&
        (l.price <= priceMax)
    );
    renderListings(filtered, 'listings-grid');
    document.getElementById('empty-listings').classList.toggle('hidden', filtered.length > 0);
}

['search-listings', 'filter-type', 'filter-price'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applyFilters);
});

// ── Stat Counter Animation ────────────────────────────────────
function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 1400;
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

// ── Form Handlers ─────────────────────────────────────────────
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

// ── Init ───────────────────────────────────────────────────────
renderEmployeesLang('en');
renderListings(listings, 'listings-grid');
renderListings(rentals, 'rentals-grid');
animateCounters();

// Re-run counter animation when Home tab is shown
document.querySelectorAll('.nav-tab[data-tab="home"]').forEach(btn => {
    btn.addEventListener('click', () => setTimeout(animateCounters, 100));
});

// Map translation keys to DOM elements
function applyTranslations(lang) {
    const t = translations[lang];
    const set = (sel, key, attr) => {
        const el = document.querySelector(sel);
        if (!el || !t[key]) return;
        if (attr === 'placeholder') el.placeholder = t[key];
        else if (attr === 'innerHTML') el.innerHTML = t[key];
        else el.textContent = t[key];
    };
    const setAll = (sel, key) => {
        document.querySelectorAll(sel).forEach(el => { if (t[key]) el.textContent = t[key]; });
    };

    // Top bar
    set('#bar h1', 'bar-title');

    // Nav tabs
    set('.nav-tab[data-tab="home"]', 'nav-home');
    set('.nav-tab[data-tab="employees"]', 'nav-employees');
    set('.dropdown-trigger', 'nav-selling');
    set('.nav-tab[data-tab="buying"]', 'nav-buying');
    set('.nav-tab[data-tab="renting"]', 'nav-renting');
    set('.nav-tab[data-tab="joinFirm"]', 'nav-joinFirm');
    set('.nav-tab[data-tab="contact"]', 'nav-contact');
    // Keep chevron in selling button
    const sellingBtn = document.querySelector('.dropdown-trigger');
    if (sellingBtn) {
        const chevron = sellingBtn.querySelector('.chevron');
        sellingBtn.textContent = t['nav-selling'] || '';
        if (chevron) sellingBtn.appendChild(chevron);
    }
    const dropLinks = document.querySelectorAll('.dropdown-list li a');
    if (dropLinks[0]) {
        dropLinks[0].textContent = t['nav-sell-home'] || '';
        dropLinks[0].setAttribute('data-tab', 'selling');
        dropLinks[0].setAttribute('data-section', 'sell');
    }
    if (dropLinks[1]) {
        dropLinks[1].textContent = t['nav-eval'] || '';
        dropLinks[1].setAttribute('data-tab', 'selling');
        dropLinks[1].setAttribute('data-section', 'eval');
    }

    // Hero
    set('.hero-eyebrow', 'hero-eyebrow');
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = (t['hero-title-main'] || '') + '<em>' + (t['hero-title-em'] || '') + '</em>';
    set('.hero-subtitle', 'hero-subtitle');
    const heroBtns = document.querySelectorAll('.hero-actions .btn');
    if (heroBtns[0]) heroBtns[0].textContent = t['hero-btn-browse'] || '';
    if (heroBtns[1]) heroBtns[1].textContent = t['hero-btn-agent'] || '';

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t['stat-sold'] || '';
    if (statLabels[1]) statLabels[1].textContent = t['stat-exp'] || '';
    if (statLabels[2]) statLabels[2].textContent = t['stat-sat'] || '';

    // Services
    set('.section-title', 'section-what');
    const svcCards = document.querySelectorAll('.service-card');
    const svcKeys = [['svc-buying-title','svc-buying-desc'],['svc-selling-title','svc-selling-desc'],['svc-renting-title','svc-renting-desc'],['svc-join-title','svc-join-desc']];
    svcCards.forEach((card, i) => {
        if (!svcKeys[i]) return;
        const h3 = card.querySelector('h3'); const p = card.querySelector('p');
        if (h3) h3.textContent = t[svcKeys[i][0]] || '';
        if (p)  p.textContent  = t[svcKeys[i][1]] || '';
    });

    // Employees page header
    set('#page-employees .page-title', 'emp-page-title');
    set('#page-employees .page-subtitle', 'emp-page-subtitle');

    // Employee cards (re-render)
    renderEmployeesLang(lang);

    // Employee detail buttons
    const callBtn = document.getElementById('profile-phone');
    const emailBtn = document.getElementById('profile-email');
    if (callBtn) { const svg = callBtn.querySelector('svg'); callBtn.textContent = t['emp-call'] || ''; if (svg) callBtn.insertBefore(svg, callBtn.firstChild); }
    if (emailBtn) { const svg = emailBtn.querySelector('svg'); emailBtn.textContent = t['emp-email'] || ''; if (svg) emailBtn.insertBefore(svg, emailBtn.firstChild); }
    set('.profile-contact h3', 'emp-contact-title');
    set('#back-btn', 'emp-back');
    const backSvg = document.querySelector('#back-btn svg');
    const backBtn = document.getElementById('back-btn');
    if (backBtn && backSvg) { backBtn.textContent = t['emp-back'] || ''; backBtn.insertBefore(backSvg, backBtn.firstChild); }

    // Selling page
    set('#page-selling .page-title', 'sell-page-title');
    set('#page-selling .page-subtitle', 'sell-page-subtitle');
    const sellTabs = document.querySelectorAll('.selling-tab');
    if (sellTabs[0]) sellTabs[0].textContent = t['sell-tab-sell'] || '';
    if (sellTabs[1]) sellTabs[1].textContent = t['sell-tab-eval'] || '';
    set('#sell-section .selling-intro h2', 'sell-why-title');
    set('#sell-section .selling-intro p', 'sell-why-desc');
    const steps = document.querySelectorAll('.step-item');
    const stepKeys = [['step1-title','step1-desc'],['step2-title','step2-desc'],['step3-title','step3-desc'],['step4-title','step4-desc']];
    steps.forEach((s, i) => {
        if (!stepKeys[i]) return;
        const h3 = s.querySelector('h3'); const p = s.querySelector('p');
        if (h3) h3.textContent = t[stepKeys[i][0]] || '';
        if (p)  p.textContent  = t[stepKeys[i][1]] || '';
    });
    set('.cta-box h3', 'cta-sell-title');
    set('.cta-box p', 'cta-sell-desc');
    const ctaBtn = document.querySelector('.cta-box .btn');
    if (ctaBtn) ctaBtn.textContent = t['cta-sell-btn'] || '';
    set('#eval-section .selling-intro h2', 'eval-title');
    set('#eval-section .selling-intro p', 'eval-desc');
    set('label[for="eval-address"]', 'eval-address-label');
    set('#eval-address', 'eval-address-ph', 'placeholder');
    set('label[for="eval-type"]', 'eval-type-label');
    set('label[for="eval-beds"]', 'eval-beds-label');
    set('label[for="eval-name"]', 'eval-name-label');
    set('#eval-name', 'eval-name-ph', 'placeholder');
    set('label[for="eval-phone"]', 'eval-phone-label');
    set('#eval-phone', 'eval-phone-ph', 'placeholder');
    set('label[for="eval-email"]', 'eval-email-label');
    set('#eval-email', 'eval-email-ph', 'placeholder');
    set('label[for="eval-notes"]', 'eval-notes-label');
    set('#eval-notes', 'eval-notes-ph', 'placeholder');
    set('#eval-form button[type="submit"]', 'eval-submit');
    set('#eval-success h3', 'eval-success-title');
    set('#eval-success p', 'eval-success-desc');

    // Buying page
    set('#page-buying .page-title', 'buy-page-title');
    set('#page-buying .page-subtitle', 'buy-page-subtitle');
    set('#search-listings', 'buy-search-ph', 'placeholder');
    const filterType = document.querySelector('#filter-type option:first-child');
    if (filterType) filterType.textContent = t['buy-filter-type'] || '';
    const filterPrice = document.querySelector('#filter-price option:first-child');
    if (filterPrice) filterPrice.textContent = t['buy-filter-price'] || '';
    set('#empty-listings p', 'buy-empty');

    // Renting page
    set('#page-renting .page-title', 'rent-page-title');
    set('#page-renting .page-subtitle', 'rent-page-subtitle');

    // Join page
    set('#page-joinFirm .page-title', 'join-page-title');
    set('#page-joinFirm .page-subtitle', 'join-page-subtitle');
    set('.join-intro h2', 'join-why-title');
    const benefs = document.querySelectorAll('.join-benefits li');
    const bKeys = ['join-b1','join-b2','join-b3','join-b4','join-b5','join-b6','join-b7', 'join-b8'];
    benefs.forEach((li, i) => {
        if (!bKeys[i]) return;
        const svg = li.querySelector('svg');
        li.textContent = t[bKeys[i]];
        if (svg) li.insertBefore(svg, li.firstChild);
    });
    set('.join-intro h2', 'join-why-title');
    set('.application-section h2', 'join-form-title');
    set('.please-read', 'join-please-read');
    set('label[for="app-first"]', 'app-first-label');
    set('#app-first', 'app-first-ph', 'placeholder');
    set('label[for="app-last"]', 'app-last-label');
    set('#app-last', 'app-last-ph', 'placeholder');
    set('label[for="app-email"]', 'app-email-label');
    set('#app-email', 'app-email-ph', 'placeholder');
    set('label[for="app-phone"]', 'app-phone-label');
    set('#app-phone', 'app-phone-ph', 'placeholder');
    set('label[for="app-reco"]', 'app-reco-label');
    set('#app-reco', 'app-reco-ph', 'placeholder');
    set('label[for="app-exp"]', 'app-exp-label');
    set('label[for="app-langs"]', 'app-langs-label');
    set('#app-langs', 'app-langs-ph', 'placeholder');
    set('label[for="app-why"]', 'app-why-label');
    set('#app-why', 'app-why-ph', 'placeholder');
    set('#application-form button[type="submit"]', 'app-submit');
    set('#app-success h3', 'app-success-title');
    set('#app-success p', 'app-success-desc');

    // Contact page
    set('#page-contact .page-title', 'contact-page-title');
    set('#page-contact .page-subtitle', 'contact-page-subtitle');
    const cDetails = document.querySelectorAll('.contact-detail');
    const cKeys = ['contact-phone-label','contact-email-label','contact-office-label','contact-hours-label'];
    const cValKeys = [null, null, 'contact-office-val','contact-hours-val'];
    cDetails.forEach((d, i) => {
        const h4 = d.querySelector('h4'); const p = d.querySelector('p');
        if (h4 && t[cKeys[i]]) h4.textContent = t[cKeys[i]];
        if (p && cValKeys[i] && t[cValKeys[i]]) p.innerHTML = t[cValKeys[i]];
    });
    set('label[for="c-name"]', 'c-name-label');
    set('#c-name', 'c-name-ph', 'placeholder');
    set('label[for="c-phone"]', 'c-phone-label');
    set('#c-phone', 'c-phone-ph', 'placeholder');
    set('label[for="c-email"]', 'c-email-label');
    set('#c-email', 'c-email-ph', 'placeholder');
    set('label[for="c-subject"]', 'c-subject-label');
    const cSubjectPh = document.querySelector('#c-subject option:first-child');
    if (cSubjectPh) cSubjectPh.textContent = t['c-subject-ph'] || '';
    set('label[for="c-message"]', 'c-msg-label');
    set('#c-message', 'c-msg-ph', 'placeholder');
    set('#contact-form button[type="submit"]', 'c-submit');
    set('#contact-success h3', 'contact-success-title');
    set('#contact-success p', 'contact-success-desc');

    // Translate button label
    set('#translate-btn', 'translate-btn');

    // Footer
    const footerTagline = document.querySelector('.footer-tagline-span');
    const footerRights = document.querySelector('.footer-rights-span');
    if (footerTagline && t['footer-tagline']) footerTagline.textContent = t['footer-tagline'];
    if (footerRights && t['footer-rights']) footerRights.textContent = t['footer-rights'];
}

// ── Translate Button ──────────────────────────────────────────
let currentLang = 'en';
const translateBtn = document.getElementById('translate-btn');
if (translateBtn) {
    translateBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        applyTranslations(currentLang);
        // Update lang attribute for font rendering
        document.documentElement.setAttribute('lang', currentLang === 'zh' ? 'zh-Hans' : 'en');
    });
}