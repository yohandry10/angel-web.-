export type ProjectCategory =
  | "webs"
  | "sistemas"
  | "ecommerce"
  | "aulas"
  | "apis"
  | "automatizaciones";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  short: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
  image: string;
  imageAlt: string;
  accent: string;
}

export const CATEGORIES: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "webs", label: "Webs" },
  { id: "sistemas", label: "Sistemas" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "aulas", label: "Aulas virtuales" },
  { id: "apis", label: "APIs" },
  { id: "automatizaciones", label: "Automatizaciones" },
];

const webTech = ["React", "TypeScript", "Tailwind", "SEO"];
const appTech = ["React", "TypeScript", "PostgreSQL", "Tailwind"];

export const PROJECTS: Project[] = [
  {
    id: "tienda-ropa",
    name: "Tienda de Ropa",
    category: "ecommerce",
    categoryLabel: "Ecommerce",
    short: "Tienda online visual para catálogo, compras y gestión comercial.",
    description:
      "Ecommerce para una marca de moda con catálogo organizado, experiencia responsive y flujo preparado para convertir visitas en pedidos.",
    problem: "La marca dependía de redes sociales y necesitaba una vitrina propia y confiable.",
    solution:
      "Diseñé una tienda rápida, clara y adaptable a campañas, con productos, categorías, promociones y contacto directo.",
    result: "Un canal digital propio, más profesional y listo para escalar ventas.",
    features: [
      "Catálogo responsive",
      "Categorías",
      "Ficha de producto",
      "CTA de compra",
      "Contacto directo",
    ],
    tech: webTech,
    demoUrl: "https://tienda-ropa-sigma.vercel.app/",
    image: "/media/portfolio/projects/tienda-ropa.webp",
    imageAlt: "Vista de tienda online de ropa",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    id: "tienda-de-quesos",
    name: "Tienda de Quesos",
    category: "ecommerce",
    categoryLabel: "Ecommerce",
    short: "Ecommerce artesanal para catálogo, marca y pedidos.",
    description:
      "Tienda digital para productos artesanales, con catálogo visual y experiencia enfocada en compra rápida desde móvil.",
    problem:
      "El negocio necesitaba vender fuera del local físico y presentar mejor su variedad de productos.",
    solution:
      "Construí una tienda responsive con categorías, fichas de producto y llamados de compra claros.",
    result: "Canal digital preparado para recibir pedidos y reforzar la marca.",
    features: [
      "Catálogo de productos",
      "Diseño gastronómico",
      "Ficha de producto",
      "Pedido por contacto",
      "Responsive",
    ],
    tech: webTech,
    demoUrl: "https://www.diovalle.com/",
    image: "/media/portfolio/projects/tienda-de-quesos.webp",
    imageAlt: "Vista de tienda online de quesos",
    accent: "from-amber-400/30 to-cyan-500/10",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Multiproducto",
    category: "ecommerce",
    categoryLabel: "Ecommerce",
    short: "Tienda digital para catálogo amplio, campañas y pedidos.",
    description:
      "Tienda online preparada para productos variados, navegación simple y operación comercial desde canales digitales.",
    problem:
      "El negocio necesitaba pasar de venta informal a un catálogo digital con mejor presentación.",
    solution:
      "Desarrollé una tienda clara, con componentes reutilizables para productos, categorías y contacto.",
    result: "Canal comercial propio, ordenado y listo para alimentar campañas de venta.",
    features: [
      "Catálogo multiproducto",
      "Categorías",
      "Ficha de producto",
      "CTA de compra",
      "Diseño responsive",
    ],
    tech: webTech,
    demoUrl: "https://e-ecommerce-seven.vercel.app/",
    image: "/media/portfolio/projects/ecommerce-.webp",
    imageAlt: "Vista de ecommerce multiproducto",
    accent: "from-cyan-400/30 to-violet-500/10",
  },
  {
    id: "crm",
    name: "CRM Comercial",
    category: "sistemas",
    categoryLabel: "Sistema",
    short: "Sistema para clientes, oportunidades, tareas y seguimiento comercial.",
    description:
      "CRM diseñado para ordenar prospectos, clientes, embudos de venta y actividades del equipo comercial.",
    problem:
      "El seguimiento comercial estaba disperso y se perdían oportunidades por falta de trazabilidad.",
    solution:
      "Implementé vistas operativas para pipeline, clientes, tareas y reportes, con foco en uso diario.",
    result: "Mayor control sobre oportunidades y mejor visibilidad del rendimiento comercial.",
    features: [
      "Pipeline de ventas",
      "Gestión de clientes",
      "Tareas",
      "Reportes",
      "Roles de usuario",
    ],
    tech: appTech,
    demoUrl: "https://crm-trivia1.vercel.app/",
    image: "/media/portfolio/projects/crm.webp",
    imageAlt: "Vista de CRM comercial",
    accent: "from-cyan-400/30 to-violet-500/10",
  },
  {
    id: "saas",
    name: "Portal SaaS",
    category: "sistemas",
    categoryLabel: "SaaS",
    short: "Plataforma SaaS con panel, usuarios, planes y métricas.",
    description:
      "Base SaaS para negocio digital con administración, usuarios, módulos internos y estructura preparada para suscripciones.",
    problem: "El cliente necesitaba convertir una herramienta interna en un producto vendible.",
    solution:
      "Diseñé una arquitectura multiusuario con panel centralizado, métricas y base extensible para planes comerciales.",
    result: "Producto digital más ordenado, presentable y listo para iterar comercialmente.",
    features: [
      "Panel admin",
      "Gestión de usuarios",
      "Módulos internos",
      "Métricas",
      "Arquitectura escalable",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    demoUrl: "https://www.gitgov.cloud/",
    image: "/media/portfolio/projects/saas.webp",
    imageAlt: "Vista de portal SaaS",
    accent: "from-emerald-400/30 to-cyan-500/10",
  },
  {
    id: "educacion",
    name: "Plataforma Educativa",
    category: "aulas",
    categoryLabel: "Aula virtual",
    short: "Sitio educativo para programas, admisiones y contenido académico.",
    description:
      "Experiencia digital para una institución educativa, pensada para comunicar programas, captar interesados y ordenar información académica.",
    problem:
      "La institución necesitaba una presencia profesional que explicara su oferta y redujera fricción.",
    solution:
      "Organicé la información en secciones claras, con llamados a la acción y navegación simple.",
    result:
      "Comunicación más clara para estudiantes y un canal listo para campañas de inscripción.",
    features: [
      "Secciones académicas",
      "Formularios",
      "SEO base",
      "Diseño institucional",
      "Responsive",
    ],
    tech: webTech,
    demoUrl: "https://www.digitalvalleyinstitute.com/",
    image: "/media/portfolio/projects/educacion.webp",
    imageAlt: "Vista de plataforma educativa",
    accent: "from-cyan-400/30 to-emerald-500/10",
  },
  {
    id: "empresa-electrica",
    name: "Empresa Eléctrica",
    category: "webs",
    categoryLabel: "Web",
    short: "Web corporativa para servicios eléctricos e ingeniería.",
    description:
      "Sitio institucional para empresa eléctrica, con enfoque en servicios, confianza técnica y solicitud de cotizaciones.",
    problem: "La empresa necesitaba explicar sus servicios técnicos de forma profesional.",
    solution:
      "Construí una estructura corporativa sobria, con servicios segmentados y rutas claras hacia contacto.",
    result: "Mejor percepción comercial y presencia digital preparada para clientes B2B.",
    features: [
      "Servicios destacados",
      "Diseño corporativo",
      "CTA de cotización",
      "Responsive",
      "Carga optimizada",
    ],
    tech: webTech,
    demoUrl: "https://www.logintecsac.com/",
    image: "/media/portfolio/projects/EMPRESA-ELECTRICA.webp",
    imageAlt: "Vista de web para empresa eléctrica",
    accent: "from-blue-400/30 to-cyan-500/10",
  },
  {
    id: "marketing",
    name: "Agencia de Marketing",
    category: "webs",
    categoryLabel: "Web",
    short: "Landing comercial para servicios de marketing y captación.",
    description:
      "Web orientada a conversión para una agencia de marketing, con servicios, beneficios, prueba social y contacto directo.",
    problem: "La agencia necesitaba comunicar valor rápido y captar leads calificados.",
    solution:
      "Construí una landing con jerarquía comercial, bloques de servicios y llamados a la acción visibles.",
    result: "Una presentación digital más fuerte para campañas, anuncios y tráfico orgánico.",
    features: ["Landing de conversión", "Servicios", "Formulario", "SEO base", "Responsive"],
    tech: ["React", "Tailwind", "Framer Motion", "SEO"],
    demoUrl: "https://aura-marketing-studio.vercel.app/",
    image: "/media/portfolio/projects/marketing.webp",
    imageAlt: "Vista de landing para agencia de marketing",
    accent: "from-cyan-400/30 to-pink-500/10",
  },
  {
    id: "restaurant",
    name: "Restaurante",
    category: "webs",
    categoryLabel: "Web",
    short: "Web gastronómica con menú, reservas y presencia visual.",
    description:
      "Sitio para restaurante con identidad visual, platos destacados, información clave y acceso rápido a reservas o pedidos.",
    problem: "El restaurante necesitaba mostrar su propuesta y facilitar reservas desde móvil.",
    solution:
      "Diseñé una experiencia visual enfocada en apetito, navegación simple y CTAs para contacto.",
    result: "Mejor presentación del negocio y menos fricción para clientes nuevos.",
    features: ["Menú destacado", "Reservas", "Galería", "Ubicación", "Responsive"],
    tech: webTech,
    demoUrl: "https://restaurant1-steel-zeta.vercel.app/",
    image: "/media/portfolio/projects/restaurant.webp",
    imageAlt: "Vista de web para restaurante",
    accent: "from-violet-400/30 to-cyan-500/10",
  },
  {
    id: "laboratorio",
    name: "Laboratorio Clínico",
    category: "webs",
    categoryLabel: "Web",
    short: "Web médica para servicios, análisis y contacto con pacientes.",
    description:
      "Sitio para laboratorio con servicios, análisis, confianza institucional y accesos claros para pacientes.",
    problem:
      "El laboratorio requería explicar servicios de salud de forma clara, confiable y accesible.",
    solution:
      "Organicé la información médica con una interfaz limpia, CTA visibles y estructura adaptable a móvil.",
    result: "Mayor claridad para pacientes y una presencia profesional para campañas locales.",
    features: [
      "Servicios médicos",
      "Secciones informativas",
      "Contacto",
      "Diseño confiable",
      "Carga optimizada",
    ],
    tech: webTech,
    demoUrl: "https://www.laboratorioslopez.com/",
    image: "/media/portfolio/projects/laboratorio.webp",
    imageAlt: "Vista de web para laboratorio clínico",
    accent: "from-cyan-400/30 to-amber-500/10",
  },
  {
    id: "abogados",
    name: "Estudio de Abogados",
    category: "webs",
    categoryLabel: "Web",
    short: "Web profesional para servicios legales y consulta inicial.",
    description:
      "Sitio institucional para firma legal, enfocado en confianza, áreas de práctica y conversión de consultas.",
    problem:
      "El estudio necesitaba transmitir seriedad y convertir visitas en solicitudes de asesoría.",
    solution:
      "Desarrollé una web sobria, con servicios legales ordenados, mensajes claros y contacto visible.",
    result: "Una presencia digital más profesional y preparada para captar casos.",
    features: ["Áreas de práctica", "Perfil profesional", "Consulta", "SEO local", "Responsive"],
    tech: webTech,
    demoUrl: "https://www.grupovalleabogados.com/",
    image: "/media/portfolio/projects/abogados.webp",
    imageAlt: "Vista de web para estudio de abogados",
    accent: "from-cyan-400/30 to-indigo-500/10",
  },
  {
    id: "centro-conciliacion",
    name: "Centro de Conciliación",
    category: "webs",
    categoryLabel: "Web",
    short: "Sitio legal para trámites, servicios y captación de consultas.",
    description:
      "Web para centro de conciliación con explicación de servicios, beneficios, requisitos y contacto rápido.",
    problem:
      "El centro necesitaba explicar procesos legales de forma simple para usuarios no técnicos.",
    solution:
      "Estructuré la información por servicios, pasos y llamados a consulta, con diseño claro y accesible.",
    result: "Mejor entendimiento del servicio y contacto más directo desde web.",
    features: ["Servicios legales", "Proceso explicado", "Formulario", "WhatsApp", "SEO local"],
    tech: webTech,
    demoUrl: "https://acecopconciliacion.com/",
    image: "/media/portfolio/projects/centro-conciliacion.webp",
    imageAlt: "Vista de web para centro de conciliación",
    accent: "from-blue-400/30 to-emerald-500/10",
  },
  {
    id: "empresa-constructora",
    name: "Empresa Constructora",
    category: "webs",
    categoryLabel: "Web",
    short: "Web corporativa para obras, servicios y proyectos de construcción.",
    description:
      "Sitio para constructora con servicios, proyectos, experiencia y contacto comercial.",
    problem: "La empresa necesitaba mostrar solidez técnica y portafolio para nuevas licitaciones.",
    solution:
      "Creé una web institucional con bloques de proyectos, servicios y mensajes de confianza.",
    result: "Mejor carta de presentación para clientes corporativos y procesos comerciales.",
    features: [
      "Servicios",
      "Portafolio de obras",
      "Cotización",
      "Diseño institucional",
      "Responsive",
    ],
    tech: webTech,
    demoUrl: "https://www.titan.com.pe/",
    image: "/media/portfolio/projects/empresa-constructora.webp",
    imageAlt: "Vista de web para empresa constructora",
    accent: "from-cyan-400/30 to-rose-500/10",
  },
  {
    id: "casa-playa",
    name: "Casa de Playa",
    category: "webs",
    categoryLabel: "Web",
    short: "Landing inmobiliaria para alquiler, venta o promoción turística.",
    description:
      "Web visual para propiedad de playa, con enfoque en experiencia, galería, ubicación y contacto.",
    problem:
      "El proyecto necesitaba mostrar el valor de la propiedad de forma aspiracional y clara.",
    solution: "Diseñé una landing con imagen protagonista, detalles relevantes y contacto rápido.",
    result: "Una presentación digital lista para campañas, reservas o venta directa.",
    features: ["Galería visual", "Detalles de propiedad", "Contacto", "Ubicación", "Responsive"],
    tech: webTech,
    demoUrl: "https://www.alquilanorte.com/",
    image: "/media/portfolio/projects/casa-playa.webp",
    imageAlt: "Vista de landing para casa de playa",
    accent: "from-emerald-400/30 to-cyan-500/10",
  },
  {
    id: "hanna",
    name: "Hanna",
    category: "webs",
    categoryLabel: "Web",
    short: "Web de marca personal o comercial con presentación premium.",
    description:
      "Sitio de identidad para una marca con enfoque visual, secciones comerciales y contacto directo.",
    problem:
      "La marca necesitaba una presencia digital más cuidada para sostener campañas y contacto.",
    solution:
      "Desarrollé una experiencia visual limpia, con contenido jerarquizado y diseño adaptable.",
    result: "Mayor consistencia de marca y una web lista para convertir tráfico en conversaciones.",
    features: [
      "Presentación de marca",
      "Secciones comerciales",
      "Contacto",
      "Responsive",
      "Performance",
    ],
    tech: webTech,
    demoUrl: "https://www.hananingeniera.com/",
    image: "/media/portfolio/projects/hanna.webp",
    imageAlt: "Vista de web Hanna",
    accent: "from-indigo-400/30 to-cyan-500/10",
  },
  {
    id: "peru-explorer",
    name: "Peru Explorer",
    category: "webs",
    categoryLabel: "Web",
    short: "Portal turístico para explorar destinos y experiencias en Perú.",
    description:
      "Experiencia web turística enfocada en destinos, contenido visual y navegación para viajeros.",
    problem: "El proyecto necesitaba presentar destinos de forma atractiva y útil para visitantes.",
    solution:
      "Diseñé una interfaz visual con secciones de exploración, información clara y recorrido responsive.",
    result: "Un portal turístico más atractivo para campañas y posicionamiento de contenido.",
    features: [
      "Destinos destacados",
      "Contenido visual",
      "Navegación",
      "SEO turístico",
      "Carga optimizada",
    ],
    tech: webTech,
    demoUrl: "https://peru-explorer.vercel.app/",
    image: "/media/portfolio/projects/peru-explorer.vercel.app_.webp",
    imageAlt: "Vista de portal Peru Explorer",
    accent: "from-amber-400/30 to-cyan-500/10",
  },
  {
    id: "minerales-empresa",
    name: "Empresa de Minerales",
    category: "webs",
    categoryLabel: "Web",
    short: "Web corporativa para operaciones, servicios y confianza industrial.",
    description:
      "Sitio industrial para empresa de minerales, con foco en servicios, capacidad operativa y presentación corporativa.",
    problem:
      "La empresa necesitaba comunicar experiencia y capacidad técnica a clientes corporativos.",
    solution:
      "Estructuré una web institucional con mensajes técnicos, servicios y contacto comercial.",
    result: "Una presencia digital más sólida para reuniones, propuestas y prospección.",
    features: [
      "Servicios industriales",
      "Perfil corporativo",
      "Contacto",
      "Responsive",
      "SEO base",
    ],
    tech: webTech,
    demoUrl: "https://www.incaphytominerals.com/",
    image: "/media/portfolio/projects/minerales-empresa.webp",
    imageAlt: "Vista de web para empresa de minerales",
    accent: "from-orange-400/30 to-cyan-500/10",
  },
  {
    id: "abc",
    name: "ABC Corporativo",
    category: "webs",
    categoryLabel: "Web",
    short: "Web institucional para servicios, marca y generación de confianza.",
    description:
      "Sitio corporativo para presentar servicios, propuesta de valor y canales de contacto de forma profesional.",
    problem:
      "La empresa requería una web ordenada para comunicar mejor su oferta y respaldar ventas.",
    solution:
      "Creé una estructura institucional limpia, con jerarquía visual, beneficios y contacto claro.",
    result: "Mejor presentación comercial y un punto central para clientes potenciales.",
    features: [
      "Servicios destacados",
      "Diseño institucional",
      "Contacto",
      "Responsive",
      "SEO base",
    ],
    tech: webTech,
    demoUrl: "https://www.abcsolucionesperu.com/",
    image: "/media/portfolio/projects/abc.webp",
    imageAlt: "Vista de web ABC corporativo",
    accent: "from-emerald-400/30 to-blue-500/10",
  },
];
