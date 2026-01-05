export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDetailsEn: string;
  fullDetailsAr: string;
  challengesSolved: {
    en: string[];
    ar: string[];
  };
  technologies: string[];
  achievements: {
    en: string[];
    ar: string[];
  };
  features: string[];
  image?: string;
  icon: React.ReactNode;
}

export const projectsData: Project[] = [
  {
    id: 'crm-system',
    titleEn: 'CRM System',
    titleAr: 'نظام إدارة علاقات العملاء',
    shortDescEn: 'Comprehensive customer relationship management with AI-powered insights and automation',
    shortDescAr: 'نظام شامل لإدارة علاقات العملاء مع رؤى وأتمتة مدعومة بالذكاء الاصطناعي',
    fullDetailsEn: 'A state-of-the-art Customer Relationship Management system built with AI-powered analytics and automation capabilities. This comprehensive solution revolutionizes how businesses interact with their customers by providing real-time insights, predictive analytics, and intelligent automation workflows. The system seamlessly integrates with existing business tools and provides a unified view of customer interactions across all touchpoints.',
    fullDetailsAr: 'نظام إدارة علاقات العملاء متطور مبني على تحليلات وإمكانيات أتمتة مدعومة بالذكاء الاصطناعي. يُحدث هذا الحل الشامل ثورة في كيفية تفاعل الشركات مع عملائها من خلال توفير رؤى في الوقت الفعلي وتحليلات تنبؤية وسير عمل أتمتة ذكية. يتكامل النظام بسلاسة مع أدوات العمل الحالية ويوفر رؤية موحدة لتفاعلات العملاء عبر جميع نقاط الاتصال.',
    challengesSolved: {
      en: [
        'Fragmented customer data across multiple platforms',
        'Lack of real-time visibility into customer interactions',
        'Manual and time-consuming lead management processes',
        'Difficulty in predicting customer behavior and needs',
        'Inefficient sales pipeline tracking and forecasting'
      ],
      ar: [
        'بيانات العملاء المجزأة عبر منصات متعددة',
        'عدم وجود رؤية في الوقت الفعلي لتفاعلات العملاء',
        'عمليات إدارة العملاء المحتملين اليدوية والتي تستغرق وقتاً طويلاً',
        'صعوبة التنبؤ بسلوك واحتياجات العملاء',
        'تتبع وتوقع مسار المبيعات غير الفعال'
      ]
    },
    technologies: ['.NET', 'React', 'AI/ML', 'PostgreSQL'],
    achievements: {
      en: [
        'Increased lead conversion rate by 45%',
        'Reduced customer response time by 60%',
        'Automated 70% of routine customer interactions',
        'Improved sales forecasting accuracy to 92%',
        'Achieved 99.9% system uptime'
      ],
      ar: [
        'زيادة معدل تحويل العملاء المحتملين بنسبة 45٪',
        'تقليل وقت الاستجابة للعملاء بنسبة 60٪',
        'أتمتة 70٪ من تفاعلات العملاء الروتينية',
        'تحسين دقة توقعات المبيعات إلى 92٪',
        'تحقيق وقت تشغيل النظام بنسبة 99.9٪'
      ]
    },
    features: ['Lead Management', 'Sales Pipeline', 'AI Recommendations', 'Email Integration'],
    image: '/img/6bc11121-59d4-4b3a-b4de-c26e6c886876.jpg',
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    id: 'erp-system',
    titleEn: 'ERP System',
    titleAr: 'نظام تخطيط موارد المؤسسة',
    shortDescEn: 'Enterprise resource planning solution integrating all business processes',
    shortDescAr: 'حل تخطيط موارد المؤسسات يدمج جميع العمليات التجارية',
    fullDetailsEn: 'A comprehensive Enterprise Resource Planning system that unifies all core business processes into one integrated platform. This powerful solution connects finance, inventory, HR, and operations in real-time, providing executives with actionable insights and streamlined workflows. Built with scalability in mind, it adapts to growing business needs while maintaining peak performance.',
    fullDetailsAr: 'نظام تخطيط موارد المؤسسات الشامل الذي يوحد جميع عمليات الأعمال الأساسية في منصة متكاملة واحدة. يربط هذا الحل القوي بين المالية والمخزون والموارد البشرية والعمليات في الوقت الفعلي، مما يوفر للمديرين التنفيذيين رؤى قابلة للتنفيذ وسير عمل مبسط. تم بناؤه مع وضع قابلية التوسع في الاعتبار، فهو يتكيف مع احتياجات العمل المتنامية مع الحفاظ على الأداء الأمثل.',
    challengesSolved: {
      en: [
        'Siloed departments with no data integration',
        'Manual data entry and reconciliation errors',
        'Lack of real-time financial visibility',
        'Inefficient inventory management leading to stockouts',
        'Complex reporting requiring multiple systems'
      ],
      ar: [
        'الإدارات المعزولة بدون تكامل البيانات',
        'أخطاء إدخال البيانات والتسوية اليدوية',
        'عدم وجود رؤية مالية في الوقت الفعلي',
        'إدارة المخزون غير الفعالة المؤدية إلى نقص المخزون',
        'التقارير المعقدة التي تتطلب أنظمة متعددة'
      ]
    },
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    achievements: {
      en: [
        'Reduced operational costs by 35%',
        'Improved inventory accuracy to 98%',
        'Decreased financial closing time by 50%',
        'Integrated 15+ business modules seamlessly',
        'Achieved real-time data synchronization across all departments'
      ],
      ar: [
        'تخفيض التكاليف التشغيلية بنسبة 35٪',
        'تحسين دقة المخزون إلى 98٪',
        'تقليل وقت الإغلاق المالي بنسبة 50٪',
        'دمج أكثر من 15 وحدة أعمال بسلاسة',
        'تحقيق مزامنة البيانات في الوقت الفعلي عبر جميع الأقسام'
      ]
    },
    features: ['Finance Management', 'Inventory Control', 'HR Integration', 'Real-time Analytics'],
    image: '/img/e691eac8-b2c9-4c0a-b546-d34dd278b572.jpg',
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
  {
    id: 'hr-management',
    titleEn: 'HR Management System',
    titleAr: 'نظام إدارة الموارد البشرية',
    shortDescEn: 'Complete human resources management with payroll, attendance, and performance tracking',
    shortDescAr: 'إدارة كاملة للموارد البشرية مع الرواتب والحضور وتتبع الأداء',
    fullDetailsEn: 'An all-in-one Human Resources Management System designed to automate and streamline every aspect of workforce management. From recruitment to retirement, this platform handles attendance tracking, payroll processing, performance evaluations, and employee development with precision and efficiency. The system empowers HR teams to focus on strategic initiatives while automating routine tasks.',
    fullDetailsAr: 'نظام إدارة الموارد البشرية الشامل المصمم لأتمتة وتبسيط كل جانب من جوانب إدارة القوى العاملة. من التوظيف إلى التقاعد، تتعامل هذه المنصة مع تتبع الحضور ومعالجة كشوف المرتبات وتقييمات الأداء وتطوير الموظفين بدقة وكفاءة. يمكّن النظام فرق الموارد البشرية من التركيز على المبادرات الاستراتيجية مع أتمتة المهام الروتينية.',
    image: '/img/unnamed (9).jpg',
    challengesSolved: {
      en: [
        'Manual attendance tracking prone to errors',
        'Complex payroll calculations and delays',
        'Lack of structured performance review process',
        'Difficulty in tracking employee training and development',
        'No centralized employee records management'
      ],
      ar: [
        'تتبع الحضور اليدوي المعرض للأخطاء',
        'حسابات الرواتب المعقدة والتأخيرات',
        'عدم وجود عملية مراجعة أداء منظمة',
        'صعوبة في تتبع تدريب وتطوير الموظفين',
        'لا يوجد إدارة مركزية لسجلات الموظفين'
      ]
    },
    technologies: ['NestJS', 'Angular', 'MongoDB', 'Docker'],
    achievements: {
      en: [
        'Automated 85% of HR administrative tasks',
        'Reduced payroll processing time by 75%',
        'Improved employee satisfaction scores by 40%',
        'Streamlined recruitment process reducing time-to-hire by 50%',
        'Achieved 100% compliance with labor regulations'
      ],
      ar: [
        'أتمتة 85٪ من المهام الإدارية للموارد البشرية',
        'تقليل وقت معالجة الرواتب بنسبة 75٪',
        'تحسين درجات رضا الموظفين بنسبة 40٪',
        'تبسيط عملية التوظيف وتقليل وقت التوظيف بنسبة 50٪',
        'تحقيق امتثال 100٪ للوائح العمل'
      ]
    },
    features: ['Attendance Tracking', 'Payroll Automation', 'Performance Reviews', 'Leave Management'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    id: 'warehouse-procurement',
    titleEn: 'Warehouse & Procurement',
    titleAr: 'إدارة المخازن والمشتريات',
    shortDescEn: 'Advanced warehouse management with automated procurement and inventory optimization',
    shortDescAr: 'إدارة متقدمة للمخازن مع الشراء الآلي وتحسين المخزون',
    fullDetailsEn: 'A sophisticated warehouse and procurement management system that leverages AI to optimize inventory levels and automate purchasing decisions. The platform provides real-time visibility into stock levels, automates reordering processes, and integrates seamlessly with supplier networks. Advanced analytics predict demand patterns and prevent stockouts while minimizing carrying costs.',
    fullDetailsAr: 'نظام إدارة مخازن ومشتريات متطور يستفيد من الذكاء الاصطناعي لتحسين مستويات المخزون وأتمتة قرارات الشراء. توفر المنصة رؤية في الوقت الفعلي لمستويات المخزون، وتقوم بأتمتة عمليات إعادة الطلب، وتتكامل بسلاسة مع شبكات الموردين. تتنبأ التحليلات المتقدمة بأنماط الطلب وتمنع نقص المخزون مع تقليل تكاليف الحمل.',
    challengesSolved: {
      en: [
        'Inaccurate inventory counts leading to discrepancies',
        'Manual procurement processes causing delays',
        'Poor supplier relationship management',
        'Lack of demand forecasting capabilities',
        'Inefficient warehouse space utilization'
      ],
      ar: [
        'عدم دقة جرد المخزون مما يؤدي إلى اختلافات',
        'عمليات الشراء اليدوية التي تسبب تأخيرات',
        'إدارة سيئة لعلاقات الموردين',
        'عدم وجود قدرات للتنبؤ بالطلب',
        'استخدام غير فعال لمساحة المستودع'
      ]
    },
    technologies: ['.NET Core', 'React', 'SQL Server', 'AI'],
    achievements: {
      en: [
        'Reduced inventory holding costs by 40%',
        'Improved order fulfillment accuracy to 99.5%',
        'Decreased procurement cycle time by 55%',
        'Optimized warehouse space utilization by 30%',
        'Achieved 95% on-time supplier delivery rate'
      ],
      ar: [
        'تخفيض تكاليف حمل المخزون بنسبة 40٪',
        'تحسين دقة تنفيذ الطلبات إلى 99.5٪',
        'تقليل وقت دورة المشتريات بنسبة 55٪',
        'تحسين استخدام مساحة المستودع بنسبة 30٪',
        'تحقيق معدل تسليم الموردين في الوقت المحدد بنسبة 95٪'
      ]
    },
    features: ['Inventory Tracking', 'Supplier Management', 'Purchase Orders', 'Stock Optimization'],
    image: '/img/unnamed (8).jpg',
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z" />
      </svg>
    ),
  },
  {
    id: 'equipment-tracking',
    titleEn: 'Equipment & Machinery Tracking',
    titleAr: 'تتبع المعدات والآلات',
    shortDescEn: 'IoT-enabled equipment tracking with maintenance scheduling and performance analytics',
    shortDescAr: 'تتبع المعدات بتقنية IoT مع جدولة الصيانة وتحليلات الأداء',
    fullDetailsEn: 'An IoT-powered equipment and machinery tracking system that provides real-time location monitoring, predictive maintenance alerts, and comprehensive performance analytics. The platform uses sensor data and machine learning to predict equipment failures before they occur, optimizing maintenance schedules and maximizing asset uptime. Integration with GPS and RFID technologies ensures accurate tracking across multiple sites.',
    fullDetailsAr: 'نظام تتبع المعدات والآلات المدعوم بإنترنت الأشياء الذي يوفر مراقبة الموقع في الوقت الفعلي وتنبيهات الصيانة التنبؤية وتحليلات الأداء الشاملة. تستخدم المنصة بيانات المستشعرات والتعلم الآلي للتنبؤ بأعطال المعدات قبل حدوثها، وتحسين جداول الصيانة وزيادة وقت تشغيل الأصول. يضمن التكامل مع تقنيات GPS و RFID التتبع الدقيق عبر مواقع متعددة.',
    challengesSolved: {
      en: [
        'Difficulty locating equipment across multiple sites',
        'Reactive maintenance leading to unexpected downtime',
        'Lack of usage analytics for asset optimization',
        'Manual maintenance record keeping',
        'No visibility into equipment performance metrics'
      ],
      ar: [
        'صعوبة تحديد موقع المعدات عبر مواقع متعددة',
        'الصيانة التفاعلية المؤدية إلى توقف غير متوقع',
        'عدم وجود تحليلات الاستخدام لتحسين الأصول',
        'حفظ سجلات الصيانة اليدوية',
        'لا رؤية لمقاييس أداء المعدات'
      ]
    },
    technologies: ['Laravel', 'Next.js', 'PostgreSQL', 'IoT'],
    achievements: {
      en: [
        'Reduced equipment downtime by 65%',
        'Increased asset utilization by 45%',
        'Lowered maintenance costs by 30%',
        'Improved equipment lifespan by 25%',
        'Achieved 98% preventive maintenance compliance'
      ],
      ar: [
        'تقليل وقت توقف المعدات بنسبة 65٪',
        'زيادة استخدام الأصول بنسبة 45٪',
        'تخفيض تكاليف الصيانة بنسبة 30٪',
        'تحسين عمر المعدات بنسبة 25٪',
        'تحقيق امتثال الصيانة الوقائية بنسبة 98٪'
      ]
    },
    features: ['Real-time Location', 'Maintenance Alerts', 'Usage Analytics', 'Asset Management'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
  },
  {
    id: 'invoicing-system',
    titleEn: 'Invoicing & Payment Certificates',
    titleAr: 'الفواتير ومستخلصات الدفع',
    shortDescEn: 'Automated invoicing system with payment tracking and certificate generation',
    shortDescAr: 'نظام فواتير آلي مع تتبع الدفع وإصدار المستخلصات',
    fullDetailsEn: 'A comprehensive invoicing and payment certificate system that automates billing processes and ensures compliance with tax regulations. The platform generates professional invoices, tracks payments in real-time, and produces certified payment statements for contractors and clients. Built-in tax calculation engines and integration with accounting systems streamline financial operations.',
    fullDetailsAr: 'نظام شامل للفواتير وشهادات الدفع يقوم بأتمتة عمليات الفوترة ويضمن الامتثال للوائح الضرائب. تقوم المنصة بإنشاء فواتير احترافية وتتبع المدفوعات في الوقت الفعلي وإنتاج بيانات دفع معتمدة للمقاولين والعملاء. تعمل محركات حساب الضرائب المدمجة والتكامل مع أنظمة المحاسبة على تبسيط العمليات المالية.',
    challengesSolved: {
      en: [
        'Manual invoice creation and errors',
        'Difficulty tracking payment status',
        'Non-compliance with tax regulations',
        'Delayed payment certificate generation',
        'Lack of integration with accounting systems'
      ],
      ar: [
        'إنشاء الفواتير اليدوية والأخطاء',
        'صعوبة تتبع حالة الدفع',
        'عدم الامتثال للوائح الضرائب',
        'تأخر إنشاء شهادة الدفع',
        'عدم التكامل مع أنظمة المحاسبة'
      ]
    },
    technologies: ['.NET', 'React', 'SQL Server', 'PDF Gen'],
    achievements: {
      en: [
        'Reduced invoicing time by 80%',
        'Achieved 100% tax compliance',
        'Improved cash flow visibility by 90%',
        'Decreased payment collection time by 40%',
        'Automated generation of 1000+ invoices monthly'
      ],
      ar: [
        'تقليل وقت الفوترة بنسبة 80٪',
        'تحقيق امتثال ضريبي بنسبة 100٪',
        'تحسين رؤية التدفق النقدي بنسبة 90٪',
        'تقليل وقت تحصيل المدفوعات بنسبة 40٪',
        'إنشاء أكثر من 1000 فاتورة شهرياً بشكل آلي'
      ]
    },
    features: ['Auto Invoicing', 'Payment Tracking', 'Certificate Generation', 'Tax Compliance'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
  {
    id: 'workforce-management',
    titleEn: 'Workforce & Contractors',
    titleAr: 'إدارة العمالة والمقاولين',
    shortDescEn: 'Comprehensive workforce management for contractors and temporary workers',
    shortDescAr: 'إدارة شاملة للقوى العاملة للمقاولين والعمال المؤقتين',
    fullDetailsEn: 'A specialized workforce management platform designed for managing contractors, temporary workers, and seasonal employees. The system handles contractor databases, shift scheduling, payment processing, and document management with ease. Real-time communication features and mobile accessibility ensure seamless coordination between managers and field workers.',
    fullDetailsAr: 'منصة إدارة القوى العاملة المتخصصة المصممة لإدارة المقاولين والعمال المؤقتين والموظفين الموسميين. يتعامل النظام مع قواعد بيانات المقاولين وجدولة المناوبات ومعالجة المدفوعات وإدارة المستندات بسهولة. تضمن ميزات الاتصال في الوقت الفعلي وإمكانية الوصول عبر الهاتف المحمول التنسيق السلس بين المديرين والعاملين في الميدان.',
    challengesSolved: {
      en: [
        'Difficulty managing large contractor workforce',
        'Complex shift scheduling and conflicts',
        'Delayed payment processing for contractors',
        'Lack of centralized contractor documentation',
        'Poor communication with field workers'
      ],
      ar: [
        'صعوبة إدارة قوة عاملة كبيرة من المقاولين',
        'جدولة المناوبات المعقدة والتعارضات',
        'تأخر معالجة المدفوعات للمقاولين',
        'عدم وجود توثيق مركزي للمقاولين',
        'ضعف التواصل مع العاملين في الميدان'
      ]
    },
    technologies: ['NestJS', 'Vue.js', 'MongoDB', 'WebSockets'],
    achievements: {
      en: [
        'Managed 500+ contractors efficiently',
        'Reduced scheduling conflicts by 75%',
        'Improved payment processing speed by 60%',
        'Achieved 95% contractor satisfaction rate',
        'Streamlined onboarding process to 24 hours'
      ],
      ar: [
        'إدارة أكثر من 500 مقاول بكفاءة',
        'تقليل تعارضات الجدولة بنسبة 75٪',
        'تحسين سرعة معالجة المدفوعات بنسبة 60٪',
        'تحقيق معدل رضا المقاولين بنسبة 95٪',
        'تبسيط عملية التوظيف إلى 24 ساعة'
      ]
    },
    features: ['Contractor Database', 'Shift Scheduling', 'Payment Processing', 'Document Management'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
      </svg>
    ),
  },
  {
    id: 'cost-budget-management',
    titleEn: 'Cost & Budget Management',
    titleAr: 'إدارة التكاليف والميزانية',
    shortDescEn: 'Financial planning and cost control with predictive analytics and budget forecasting',
    shortDescAr: 'التخطيط المالي ومراقبة التكاليف مع التحليلات التنبؤية وتوقعات الميزانية',
    fullDetailsEn: 'An advanced financial planning and cost management system powered by AI and predictive analytics. The platform provides real-time budget tracking, cost variance analysis, and intelligent forecasting to help organizations optimize their financial performance. Automated alerts notify stakeholders of budget overruns before they occur, enabling proactive cost control.',
    fullDetailsAr: 'نظام تخطيط مالي وإدارة تكاليف متقدم مدعوم بالذكاء الاصطناعي والتحليلات التنبؤية. توفر المنصة تتبع الميزانية في الوقت الفعلي وتحليل تباين التكلفة والتوقعات الذكية لمساعدة المؤسسات على تحسين أدائها المالي. تُخطر التنبيهات الآلية أصحاب المصلحة بتجاوزات الميزانية قبل حدوثها، مما يتيح التحكم الاستباقي في التكاليف.',
    challengesSolved: {
      en: [
        'Lack of real-time budget visibility',
        'Manual cost tracking and errors',
        'Difficulty predicting future expenses',
        'Budget overruns discovered too late',
        'Complex financial reporting processes'
      ],
      ar: [
        'عدم وجود رؤية للميزانية في الوقت الفعلي',
        'تتبع التكاليف اليدوية والأخطاء',
        'صعوبة التنبؤ بالنفقات المستقبلية',
        'اكتشاف تجاوزات الميزانية بعد فوات الأوان',
        'عمليات إعداد التقارير المالية المعقدة'
      ]
    },
    technologies: ['Laravel', 'React', 'MySQL', 'AI/ML'],
    achievements: {
      en: [
        'Reduced budget variances by 50%',
        'Improved forecasting accuracy to 93%',
        'Decreased financial reporting time by 70%',
        'Saved 20% in operational costs through optimization',
        'Provided real-time financial insights to 100+ stakeholders'
      ],
      ar: [
        'تقليل تباينات الميزانية بنسبة 50٪',
        'تحسين دقة التوقعات إلى 93٪',
        'تقليل وقت إعداد التقارير المالية بنسبة 70٪',
        'توفير 20٪ من التكاليف التشغيلية من خلال التحسين',
        'توفير رؤى مالية في الوقت الفعلي لأكثر من 100 صاحب مصلحة'
      ]
    },
    features: ['Budget Planning', 'Cost Tracking', 'Financial Reports', 'Predictive Analytics'],
    image: '/img/unnamed (3).jpg',
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    titleEn: 'Project Management System',
    titleAr: 'نظام إدارة المشاريع',
    shortDescEn: 'Agile project management platform with task tracking, collaboration, and reporting',
    shortDescAr: 'منصة إدارة مشاريع رشيقة مع تتبع المهام والتعاون وإعداد التقارير',
    fullDetailsEn: 'A robust project management platform built for agile teams and complex projects. The system features Gantt charts, kanban boards, resource allocation tools, and real-time collaboration features. Advanced reporting provides stakeholders with instant visibility into project progress, risks, and resource utilization. Integration with popular development tools ensures seamless workflow.',
    fullDetailsAr: 'منصة إدارة مشاريع قوية مبنية للفرق الرشيقة والمشاريع المعقدة. يتميز النظام بمخططات جانت ولوحات كانبان وأدوات تخصيص الموارد وميزات التعاون في الوقت الفعلي. توفر التقارير المتقدمة لأصحاب المصلحة رؤية فورية لتقدم المشروع والمخاطر واستخدام الموارد. يضمن التكامل مع أدوات التطوير الشائعة سير عمل سلس.',
    image: '/img/unnamed (4).jpg',
    challengesSolved: {
      en: [
        'Lack of project visibility and transparency',
        'Inefficient task assignment and tracking',
        'Poor team collaboration and communication',
        'Difficulty managing multiple projects simultaneously',
        'No centralized project documentation'
      ],
      ar: [
        'عدم وجود رؤية وشفافية للمشروع',
        'تعيين وتتبع المهام غير الفعال',
        'ضعف تعاون وتواصل الفريق',
        'صعوبة إدارة مشاريع متعددة في وقت واحد',
        'لا توثيق مركزي للمشروع'
      ]
    },
    technologies: ['.NET Core', 'Angular', 'PostgreSQL', 'SignalR'],
    achievements: {
      en: [
        'Improved project delivery rate by 60%',
        'Reduced project overruns by 45%',
        'Increased team productivity by 55%',
        'Managed 50+ concurrent projects successfully',
        'Achieved 98% stakeholder satisfaction'
      ],
      ar: [
        'تحسين معدل تسليم المشروع بنسبة 60٪',
        'تقليل تجاوزات المشروع بنسبة 45٪',
        'زيادة إنتاجية الفريق بنسبة 55٪',
        'إدارة أكثر من 50 مشروعاً متزامناً بنجاح',
        'تحقيق رضا أصحاب المصلحة بنسبة 98٪'
      ]
    },
    features: ['Task Management', 'Gantt Charts', 'Team Collaboration', 'Progress Tracking'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp-automation',
    titleEn: 'WhatsApp Automation',
    titleAr: 'نظام مراسلة واتساب آلي',
    shortDescEn: 'WhatsApp business automation with chatbots, broadcasts, and customer engagement',
    shortDescAr: 'أتمتة واتساب للأعمال مع روبوتات الدردشة والرسائل الجماعية وتفاعل العملاء',
    fullDetailsEn: 'A comprehensive WhatsApp Business API integration platform that automates customer communications and enhances engagement. The system features intelligent chatbots, broadcast messaging, customer segmentation, and detailed analytics. Businesses can handle thousands of conversations simultaneously while maintaining personalized customer experiences through AI-powered responses.',
    fullDetailsAr: 'منصة تكامل شاملة لواجهة برمجة تطبيقات WhatsApp Business تعمل على أتمتة اتصالات العملاء وتعزيز المشاركة. يتميز النظام بروبوتات الدردشة الذكية ورسائل البث وتقسيم العملاء والتحليلات التفصيلية. يمكن للشركات التعامل مع آلاف المحادثات في وقت واحد مع الحفاظ على تجارب العملاء الشخصية من خلال الردود المدعومة بالذكاء الاصطناعي.',
    image: '/img/unnamed (6).jpg',
    challengesSolved: {
      en: [
        'Manual customer support via WhatsApp',
        'Inability to handle high message volumes',
        'Lack of customer interaction analytics',
        'Difficulty in sending targeted campaigns',
        'No integration with existing CRM systems'
      ],
      ar: [
        'دعم العملاء اليدوي عبر واتساب',
        'عدم القدرة على التعامل مع أحجام الرسائل العالية',
        'عدم وجود تحليلات تفاعل العملاء',
        'صعوبة في إرسال حملات مستهدفة',
        'لا يوجد تكامل مع أنظمة CRM الحالية'
      ]
    },
    technologies: ['Node.js', 'Next.js', 'MongoDB', 'WhatsApp API'],
    achievements: {
      en: [
        'Automated 90% of customer inquiries',
        'Handled 10,000+ daily conversations',
        'Improved response time to under 30 seconds',
        'Increased customer engagement by 80%',
        'Achieved 95% customer satisfaction rate'
      ],
      ar: [
        'أتمتة 90٪ من استفسارات العملاء',
        'التعامل مع أكثر من 10,000 محادثة يومياً',
        'تحسين وقت الاستجابة إلى أقل من 30 ثانية',
        'زيادة تفاعل العملاء بنسبة 80٪',
        'تحقيق معدل رضا العملاء بنسبة 95٪'
      ]
    },
    features: ['Auto Replies', 'Broadcast Messages', 'Chatbot Integration', 'Analytics Dashboard'],
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];
