export type Lang = 'es' | 'en'

export interface NavT {
  home: string
  about: string
  experience: string
  skills: string
  certifications: string
  projects: string
  contact: string
  contactBtn: string
  openMenu: string
}

export interface HeroT {
  badge: string
  greetingName: string
  greetingSurname: string
  role: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  stat1Label: string
  stat2Label: string
  stat3Label: string
  photoTitle: string
  photoSubtitle: string
}

export interface AboutHighlight {
  title: string
  description: string
}

export interface AboutT {
  eyebrow: string
  title: string
  statSemester: string
  statSemesterLabel: string
  statRank: string
  statRankLabel: string
  statYears: string
  statYearsLabel: string
  statProjects: string
  statProjectsLabel: string
  paragraphs: string[]
  highlights: {
    recommendation: AboutHighlight
    researcher: AboutHighlight
    tical: AboutHighlight
    afide: AboutHighlight
  }
}

export interface ExperienceRoleT {
  role: string
  company: string
  period: string
  highlights: string[]
}

export interface ExperienceT {
  eyebrow: string
  title: string
  intro: string
  currentBadge: string
  roles: ExperienceRoleT[]
}

export interface SkillCategoryT {
  title: string
  skills: string[]
}

export interface SkillsT {
  eyebrow: string
  title: string
  intro: string
  categories: SkillCategoryT[]
  languagesTitle: string
  spanish: string
  spanishLevel: string
  english: string
  englishLevel: string
}

export interface CertificationT {
  institution: string
  course: string
  detail?: string
  year: string
  featured?: boolean
}

export interface CongressT {
  title: string
  organizer: string
  year: string
}

export interface CertificationsT {
  eyebrow: string
  title: string
  intro: string
  featuredBadge: string
  items: CertificationT[]
  congressesTitle: string
  congresses: CongressT[]
}

export interface ProjectTextT {
  title: string
  description: string
  note?: string
}

export interface ProjectsT {
  eyebrow: string
  title: string
  intro: string
  featuredBadge: string
  demo: string
  code: string
  frontend: string
  backend: string
  items: ProjectTextT[]
}

export interface ContactInfoT {
  emailTitle: string
  phoneTitle: string
  locationTitle: string
}

export interface ContactT {
  eyebrow: string
  title: string
  intro: string
  infoTitle: string
  info: ContactInfoT
  followTitle: string
  formTitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  subjectLabel: string
  subjectPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitBtn: string
  submitNote: string
}

export interface FooterT {
  tagline: string
}

export interface Translations {
  nav: NavT
  hero: HeroT
  about: AboutT
  experience: ExperienceT
  skills: SkillsT
  certifications: CertificationsT
  projects: ProjectsT
  contact: ContactT
  footer: FooterT
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      certifications: 'Certificaciones',
      projects: 'Proyectos',
      contact: 'Contacto',
      contactBtn: 'Contactar',
      openMenu: 'Abrir menú'
    },
    hero: {
      badge: 'Becario PRONABEC · 2.º puesto académico',
      greetingName: 'Jorge',
      greetingSurname: 'Condorios',
      role: 'Desarrollador Full Stack & QA',
      description:
        'Estudiante de último semestre de Ingeniería de Sistemas en la Universidad Nacional de San Agustín. Experiencia construyendo aplicaciones web con React, Next.js y NestJS, y en procesos de aseguramiento de la calidad de software.',
      ctaPrimary: 'Ver experiencia',
      ctaSecondary: 'Contáctame',
      stat1Label: 'Puesto académico',
      stat2Label: 'Años de experiencia',
      stat3Label: 'Roles profesionales',
      photoTitle: 'Ingeniería de Sistemas',
      photoSubtitle: 'UNSA · Arequipa'
    },
    about: {
      eyebrow: 'Perfil',
      title: 'Sobre mí',
      statSemester: 'Último',
      statSemesterLabel: 'Semestre',
      statRank: '2.º',
      statRankLabel: 'Puesto',
      statYears: '2+',
      statYearsLabel: 'Años exp.',
      statProjects: '5',
      statProjectsLabel: 'Proyectos',
      paragraphs: [
        'Estudiante del último semestre de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa, donde ocupo el 2.º puesto académico de la carrera y soy becario PRONABEC (Beca Permanencia) por desempeño y continuidad de estudios.',
        'Cuento con experiencia profesional en desarrollo de software y aseguramiento de la calidad, participando en el análisis, desarrollo, integración, pruebas y mejora de soluciones tecnológicas junto a equipos multidisciplinarios, en proyectos de desarrollo web, APIs, bases de datos y servicios en la nube.',
        'Investigador acreditado por la UNSA mediante resolución institucional. Me caracterizo por mi capacidad de aprendizaje, pensamiento analítico, adaptación y orientación a la mejora continua, y busco seguir desarrollándome en organizaciones de alto desempeño.'
      ],
      highlights: {
        recommendation: {
          title: 'Carta de recomendación',
          description:
            'Reconocimiento de CEPRUNSA por desempeño como desarrollador frontend en su sistema de gestión de horarios.'
        },
        researcher: {
          title: 'Investigador acreditado UNSA',
          description: 'Acreditación institucional otorgada por la Universidad Nacional de San Agustín.'
        },
        tical: {
          title: 'Beca UNSA — TICAL 2025',
          description: 'Beca institucional para participar en la conferencia internacional de RedCLARA en Costa Rica.'
        },
        afide: {
          title: 'Beca UNSA — AFIDE 2026',
          description: 'Beca institucional para participar en el congreso internacional de innovación en Panamá.'
        }
      }
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia Profesional',
      intro:
        'Más de dos años combinando desarrollo de software, aseguramiento de calidad y roles de coordinación en entornos con procesos y responsabilidades claras.',
      currentBadge: 'Más reciente',
      roles: [
        {
          role: 'Desarrollador Full Stack & QA',
          company: 'American Statistics',
          period: 'Enero 2026 – Agosto 2026',
          highlights: [
            'Desarrollo frontend con React, Next.js, Vite y TypeScript, cuidando usabilidad y rendimiento.',
            'Construcción de servicios backend con NestJS y TypeScript, implementando APIs REST y lógica de negocio.',
            'Diseño y gestión de bases de datos PostgreSQL mediante Prisma ORM; despliegue de soluciones en AWS.',
            'Ejecución de pruebas funcionales (QA), identificación de incidencias y verificación de correcciones.'
          ]
        },
        {
          role: 'Desarrollador Frontend',
          company: 'CEPRUNSA',
          period: 'Enero 2025 – Abril 2025',
          highlights: [
            'Desarrollo de interfaces web interactivas con React y TypeScript.',
            'Integración y consumo de APIs RESTful para la comunicación frontend-backend.',
            'Optimización de componentes orientados a experiencia de usuario y rendimiento.'
          ]
        },
        {
          role: 'Monitor Supervisor',
          company: 'CEPRUNSA',
          period: 'Junio 2024 – Enero 2025',
          highlights: [
            'Supervisión y coordinación de monitores durante procesos de admisión virtual.',
            'Seguimiento del cumplimiento de procedimientos y atención de incidencias en evaluaciones.',
            'Apoyo en la resolución de incidencias y toma de decisiones operativas.'
          ]
        },
        {
          role: 'Entrevistador y Evaluador',
          company: 'CEPRUNSA',
          period: 'Agosto 2024 – Setiembre 2024',
          highlights: [
            'Participación en la convocatoria y selección de personal docente y monitores.',
            'Evaluación de postulantes según criterios establecidos, con registro y asignación de puntajes.'
          ]
        },
        {
          role: 'Monitor',
          company: 'CEPRUNSA',
          period: 'Junio 2023 – Febrero 2024',
          highlights: [
            'Apoyo a docentes para el correcto desarrollo de clases virtuales.',
            'Atención de consultas de postulantes y seguimiento de sesiones durante procesos de admisión.'
          ]
        }
      ]
    },
    skills: {
      eyebrow: 'Stack técnico',
      title: 'Habilidades',
      intro: 'Tecnologías con las que he construido soluciones en producción, desde el frontend hasta el despliegue en la nube.',
      categories: [
        { title: 'Frontend', skills: ['React', 'Next.js', 'Vite', 'TypeScript / JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
        { title: 'Backend & Datos', skills: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'APIs REST', 'Java · Python · Kotlin'] },
        { title: 'Cloud, QA & Herramientas', skills: ['AWS', 'Docker', 'Git / GitHub', 'Quality Assurance (QA)', 'Ciberseguridad y Redes', 'Spring Boot'] }
      ],
      languagesTitle: 'Idiomas',
      spanish: 'Español',
      spanishLevel: 'Nativo',
      english: 'Inglés',
      englishLevel: 'Intermedio (B2)'
    },
    certifications: {
      eyebrow: 'Formación complementaria',
      title: 'Certificaciones y Logros',
      intro: 'Reconocimientos y formación continua en ingeniería de software, ciberseguridad e inteligencia artificial.',
      featuredBadge: 'Destacado',
      items: [
        {
          institution: 'NASA International Space Apps Challenge',
          course: 'Galactic Problem Solver — Outstanding Participation',
          detail: '4–5 de octubre de 2025',
          year: '2025',
          featured: true
        },
        {
          institution: 'Cisco Networking Academy',
          course: 'Ciberseguridad y Redes',
          detail: 'Ruta de 7 módulos: introducción a ciberseguridad, redes, dispositivos, terminales, gestión de amenazas, defensa de redes y hacking ético',
          year: '2026',
          featured: true
        },
        {
          institution: 'Código Facilito',
          course: 'Ruta de LLMs e Inteligencia Artificial a Profundidad',
          detail: 'Formación de 9 semanas',
          year: '2025',
          featured: true
        },
        {
          institution: 'Centro Cultural Peruano Norteamericano',
          course: 'Advanced English Program (CEFR B2) — Con Honores',
          detail: '240 horas',
          year: '2021',
          featured: true
        },
        { institution: 'Código Facilito', course: 'Introducción a Machine Learning', year: '2025' },
        { institution: 'Código Facilito', course: 'MLOps: Machine Learning Operations', year: '2025' },
        { institution: 'Código Facilito', course: 'Introducción a DevOps: Bases y Conceptos', year: '2025' },
        { institution: 'Código Facilito', course: 'Fundamentos de SQL', year: '2025' },
        { institution: 'Platzi', course: 'Fundamentos de Ingeniería de Software', year: '2026' },
        { institution: 'Platzi', course: 'Git y GitHub', year: '2026' },
        { institution: 'Platzi', course: 'Introducción a Ciberseguridad: Prevención de Ataques Informáticos', year: '2026' },
        { institution: 'Platzi', course: 'Redes Informáticas de Internet', year: '2026' },
        { institution: 'INFOUNSA', course: 'Microsoft Excel Avanzado', year: '2023' },
        { institution: 'INFOUNSA', course: 'Ensamblaje y Mantenimiento de Computadoras', year: '2023' },
        { institution: 'Código Facilito', course: 'Curso de Kotlin', year: '2025' },
        { institution: 'Código Facilito', course: 'Curso de GitHub Copilot', year: '2025' },
        { institution: 'Código Facilito', course: 'Curso de Metodologías para Solución de Problemas', year: '2025' },
        { institution: 'Platzi', course: 'Curso Práctico de Frontend Developer', year: '2022' },
        { institution: 'Platzi', course: 'Curso de Frontend Developer', year: '2022' }
      ],
      congressesTitle: 'Congresos y eventos académicos',
      congresses: [
        { title: 'Convención Peruana de Ingeniería — PERUMEC 2026', organizer: 'ASME Perú Section / ENGIETEK · Cusco', year: '2026' },
        { title: 'Talent & Skills Volunteer Week', organizer: 'Charlas de ciberseguridad, productividad y marca personal', year: '2025' },
        { title: 'CI-EXPLORA II Edición — Proyectos y Transformación Digital para la Ingeniería Inteligente', organizer: 'UNSA', year: '2025' },
        { title: 'CI-EXPLORA II Edición — Liderazgo Humano y Competencias para la Ingeniería 5.0', organizer: 'UNSA', year: '2025' },
        { title: 'Perú Hub Digital Universitario: Lidera el Cambio', organizer: '18 horas académicas', year: '2025' },
        { title: 'VI Edición Hack4Edu — Hackatón Internacional', organizer: 'Fundación ProFuturo / Universidad Pontificia de Salamanca', year: '2025' },
        { title: 'Hack4Edu UNSA 2025', organizer: 'Soluciones tecnológicas para procesos educativos', year: '2025' },
        { title: 'V Congreso Internacional de Ingeniería de Sistemas — CIIS 2025', organizer: '30 horas académicas', year: '2025' },
        { title: 'TICAL 2025', organizer: 'RedCLARA · Costa Rica · Beca UNSA', year: '2025' },
        { title: 'IV Congreso Internacional de Ingeniería de Sistemas — CIIS 2024', organizer: '40 horas académicas', year: '2024' },
        { title: 'Primer Congreso Nacional de Semilleros de Investigación — CONASEIN', organizer: 'CONCYTEC', year: '2023' },
        { title: 'Semana Capitular de Ingeniería de Sistemas e Informática', organizer: 'Colegio de Ingenieros del Perú', year: '2022' }
      ]
    },
    projects: {
      eyebrow: 'Portafolio',
      title: 'Proyectos',
      intro: 'Desarrollos que combinan buenas prácticas de ingeniería con problemas reales.',
      featuredBadge: 'Destacado',
      demo: 'Demo',
      code: 'Código',
      frontend: 'Frontend',
      backend: 'Backend',
      items: [
        {
          title: 'SmartMine AI — Simulación y Optimización de Flotas Mineras con IA',
          description:
            'Plataforma colaborativa para simular y optimizar operaciones de flotas de camiones en minería a tajo abierto. El backend integra un modelo de Machine Learning que predice el tiempo de ciclo camión-pala; desarrollé la lógica de asignación y gestión de camiones y palas, WebSockets en tiempo real, y el canvas de simulación y módulo constructor en el frontend.'
        },
        {
          title: 'Apruebo PE — Plataforma de Gestión Académica Universitaria',
          description:
            'Aplicación web para el seguimiento académico de estudiantes de la UNSA, con usuarios reales activos. Carga automáticamente la malla curricular al seleccionar carrera y año de ingreso: dashboard, notas por curso, apuntes, gráficos de rendimiento, simulador de notas, referidos, reportes e importación de libreta.',
          note: 'Repositorio privado — disponible bajo solicitud'
        },
        {
          title: 'CEPRUNSA — Sistema de Gestión de Horarios',
          description:
            'Sistema web para optimizar la gestión de horarios del centro pre-universitario más importante de Arequipa. Mejoré la accesibilidad para docentes y monitores, recibiendo una carta de recomendación por mi contribución como desarrollador frontend.'
        },
        {
          title: 'Pacha Wayra — Planificador de Viajes Turísticos',
          description:
            'Aplicación web desarrollada para NASA Space Apps Challenge para planificar viajes por Perú: información por región, top 10 lugares turísticos por ciudad, recomendaciones según clima y exportación de itinerarios en PDF.'
        },
        {
          title: 'Rehabi — Rehabilitación con Kinect v2 y Avatares Generados con IA',
          description:
            'Videojuego de rehabilitación física (equilibrio monopodal) en Unity, con seguimiento de movimiento en tiempo real vía Kinect v2 y avatares personalizados generados con IA a partir de una foto del paciente. Diseñé el pipeline completo: app web de generación 3D (Meshy AI), importación automática a Unity vía Editor scripting en C#, y detección de postura desde los joints del Kinect.',
          note: 'Aplicación de escritorio (Unity + Kinect v2) — sin demo web por dependencia de hardware'
        },
        {
          title: 'Sistema de Gestión Académica de Maestrías — Centro de Postgrado UNSA',
          description:
            'Sistema de gestión académica para el Centro de Postgrado de la UNSA (Maestría en Informática): docentes, estudiantes, cursos, matrículas, notas, pensiones, pagos y vouchers. Me encargué de metodologías ágiles, pruebas automatizadas e integración continua y despliegue (CI/CD), incluyendo workflows de mirror a GitLab y control de flujo de ramas.'
        },
        {
          title: 'Sistema de Votación Distribuida',
          description:
            'Plataforma web para votaciones electrónicas con arquitectura de sistemas distribuidos, orientada a garantizar seguridad, transparencia y escalabilidad en procesos electorales.'
        },
        {
          title: 'Sistema de Compra de Entradas de Cine',
          description:
            'Simulación de compra de entradas de cine con backend que implementa transacciones con rollback, generación de tickets en PDF y manejo seguro de transacciones.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Conversemos',
      intro: '¿Tienes una oportunidad, proyecto o programa en mente? Estoy abierto a nuevos desafíos.',
      infoTitle: 'Información de contacto',
      info: {
        emailTitle: 'Email',
        phoneTitle: 'Teléfono',
        locationTitle: 'Ubicación'
      },
      followTitle: 'Sígueme en',
      formTitle: 'Envíame un mensaje',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: '¿En qué puedo ayudarte?',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame más...',
      submitBtn: 'Enviar mensaje',
      submitNote: 'Se abrirá tu cliente de correo con el mensaje ya redactado.'
    },
    footer: {
      tagline: 'Estudiante de Ingeniería de Sistemas · Desarrollador Full Stack & QA'
    }
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
      contactBtn: 'Contact me',
      openMenu: 'Open menu'
    },
    hero: {
      badge: 'PRONABEC Scholar · 2nd in class academic rank',
      greetingName: 'Jorge',
      greetingSurname: 'Condorios',
      role: 'Full Stack Developer & QA',
      description:
        'Final-semester Systems Engineering student at Universidad Nacional de San Agustín. Experienced building web applications with React, Next.js and NestJS, and in software quality assurance processes.',
      ctaPrimary: 'View experience',
      ctaSecondary: 'Contact me',
      stat1Label: 'Academic rank',
      stat2Label: 'Years of experience',
      stat3Label: 'Professional roles',
      photoTitle: 'Systems Engineering',
      photoSubtitle: 'UNSA · Arequipa'
    },
    about: {
      eyebrow: 'Profile',
      title: 'About Me',
      statSemester: 'Final',
      statSemesterLabel: 'Semester',
      statRank: '2nd',
      statRankLabel: 'Rank',
      statYears: '2+',
      statYearsLabel: 'Years exp.',
      statProjects: '5',
      statProjectsLabel: 'Projects',
      paragraphs: [
        'Final-semester Systems Engineering student at Universidad Nacional de San Agustín de Arequipa, where I rank 2nd academically in my class and hold a PRONABEC scholarship (Beca Permanencia) for academic performance and continuity.',
        'I have professional experience in software development and quality assurance, taking part in the analysis, development, integration, testing and improvement of technology solutions alongside multidisciplinary teams, on projects involving web development, APIs, databases and cloud services.',
        'Accredited researcher at UNSA through institutional resolution. I bring a fast learning curve, analytical thinking, adaptability and a continuous-improvement mindset, and I am looking to keep growing within high-performance organizations.'
      ],
      highlights: {
        recommendation: {
          title: 'Letter of recommendation',
          description: 'Recognition from CEPRUNSA for my performance as frontend developer on their scheduling management system.'
        },
        researcher: {
          title: 'Accredited researcher — UNSA',
          description: 'Institutional accreditation granted by Universidad Nacional de San Agustín.'
        },
        tical: {
          title: 'UNSA Scholarship — TICAL 2025',
          description: 'Institutional scholarship to attend RedCLARA’s international conference in Costa Rica.'
        },
        afide: {
          title: 'UNSA Scholarship — AFIDE 2026',
          description: 'Institutional scholarship to attend the international innovation congress in Panama.'
        }
      }
    },
    experience: {
      eyebrow: 'Track record',
      title: 'Professional Experience',
      intro:
        'Over two years combining software development, quality assurance and coordination roles in environments with clear processes and responsibilities.',
      currentBadge: 'Most recent',
      roles: [
        {
          role: 'Full Stack Developer & QA',
          company: 'American Statistics',
          period: 'January 2026 – August 2026',
          highlights: [
            'Built frontend features with React, Next.js, Vite and TypeScript, with a focus on usability and performance.',
            'Built backend services with NestJS and TypeScript, implementing REST APIs and business logic.',
            'Designed and managed PostgreSQL databases via Prisma ORM; deployed solutions using AWS services.',
            'Ran functional testing (QA), identifying issues and verifying fixes before release.'
          ]
        },
        {
          role: 'Frontend Developer',
          company: 'CEPRUNSA',
          period: 'January 2025 – April 2025',
          highlights: [
            'Built interactive web interfaces with React and TypeScript.',
            'Integrated and consumed RESTful APIs for frontend-backend communication.',
            'Optimized components for user experience and performance.'
          ]
        },
        {
          role: 'Supervising Monitor',
          company: 'CEPRUNSA',
          period: 'June 2024 – January 2025',
          highlights: [
            'Supervised and coordinated monitors during virtual admissions processes.',
            'Tracked adherence to established procedures and handled issues during evaluations.',
            'Supported issue resolution and operational decision-making.'
          ]
        },
        {
          role: 'Interviewer and Evaluator',
          company: 'CEPRUNSA',
          period: 'August 2024 – September 2024',
          highlights: [
            'Took part in the recruitment and selection process for teaching staff and monitors.',
            'Evaluated candidates against established criteria, recording and assigning scores.'
          ]
        },
        {
          role: 'Monitor',
          company: 'CEPRUNSA',
          period: 'June 2023 – February 2024',
          highlights: [
            'Supported instructors to ensure virtual classes ran smoothly.',
            'Handled applicant inquiries and followed up on sessions during admissions processes.'
          ]
        }
      ]
    },
    skills: {
      eyebrow: 'Technical stack',
      title: 'Skills',
      intro: 'Technologies I’ve used to build production solutions, from the frontend all the way to cloud deployment.',
      categories: [
        { title: 'Frontend', skills: ['React', 'Next.js', 'Vite', 'TypeScript / JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
        { title: 'Backend & Data', skills: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'Java · Python · Kotlin'] },
        { title: 'Cloud, QA & Tools', skills: ['AWS', 'Docker', 'Git / GitHub', 'Quality Assurance (QA)', 'Cybersecurity & Networking', 'Spring Boot'] }
      ],
      languagesTitle: 'Languages',
      spanish: 'Spanish',
      spanishLevel: 'Native',
      english: 'English',
      englishLevel: 'Intermediate (B2)'
    },
    certifications: {
      eyebrow: 'Continuing education',
      title: 'Certifications & Achievements',
      intro: 'Recognitions and continuing education in software engineering, cybersecurity and artificial intelligence.',
      featuredBadge: 'Featured',
      items: [
        {
          institution: 'NASA International Space Apps Challenge',
          course: 'Galactic Problem Solver — Outstanding Participation',
          detail: 'October 4–5, 2025',
          year: '2025',
          featured: true
        },
        {
          institution: 'Cisco Networking Academy',
          course: 'Cybersecurity and Networking',
          detail: '7-module track: cybersecurity intro, networking, devices, endpoints, threat management, network defense and ethical hacking',
          year: '2026',
          featured: true
        },
        {
          institution: 'Código Facilito',
          course: 'In-Depth LLMs and Artificial Intelligence Track',
          detail: '9-week program',
          year: '2025',
          featured: true
        },
        {
          institution: 'Centro Cultural Peruano Norteamericano',
          course: 'Advanced English Program (CEFR B2) — With Honors',
          detail: '240 hours',
          year: '2021',
          featured: true
        },
        { institution: 'Código Facilito', course: 'Introduction to Machine Learning', year: '2025' },
        { institution: 'Código Facilito', course: 'MLOps: Machine Learning Operations', year: '2025' },
        { institution: 'Código Facilito', course: 'Introduction to DevOps: Foundations and Concepts', year: '2025' },
        { institution: 'Código Facilito', course: 'SQL Fundamentals', year: '2025' },
        { institution: 'Platzi', course: 'Software Engineering Fundamentals', year: '2026' },
        { institution: 'Platzi', course: 'Git and GitHub', year: '2026' },
        { institution: 'Platzi', course: 'Introduction to Cybersecurity: Preventing Cyberattacks', year: '2026' },
        { institution: 'Platzi', course: 'Internet Computer Networks', year: '2026' },
        { institution: 'INFOUNSA', course: 'Advanced Microsoft Excel', year: '2023' },
        { institution: 'INFOUNSA', course: 'Computer Assembly and Maintenance', year: '2023' },
        { institution: 'Código Facilito', course: 'Kotlin Basics', year: '2025' },
        { institution: 'Código Facilito', course: 'GitHub Copilot Course', year: '2025' },
        { institution: 'Código Facilito', course: 'Problem-Solving Methodologies', year: '2025' },
        { institution: 'Platzi', course: 'Frontend Developer — Practical Course', year: '2022' },
        { institution: 'Platzi', course: 'Frontend Developer Course', year: '2022' }
      ],
      congressesTitle: 'Conferences & academic events',
      congresses: [
        { title: 'Peruvian Engineering Convention — PERUMEC 2026', organizer: 'ASME Peru Section / ENGIETEK · Cusco', year: '2026' },
        { title: 'Talent & Skills Volunteer Week', organizer: 'Talks on cybersecurity, productivity and personal branding', year: '2025' },
        { title: 'CI-EXPLORA 2nd Edition — Projects and Digital Transformation for Smart Engineering', organizer: 'UNSA', year: '2025' },
        { title: 'CI-EXPLORA 2nd Edition — Human Leadership and Competencies for Engineering 5.0', organizer: 'UNSA', year: '2025' },
        { title: 'Peru Hub Digital Universitario: Lead the Change', organizer: '18 academic hours', year: '2025' },
        { title: 'Hack4Edu 6th Edition — International Hackathon', organizer: 'Fundación ProFuturo / Universidad Pontificia de Salamanca', year: '2025' },
        { title: 'Hack4Edu UNSA 2025', organizer: 'Technology solutions for educational processes', year: '2025' },
        { title: '5th International Systems Engineering Congress — CIIS 2025', organizer: '30 academic hours', year: '2025' },
        { title: 'TICAL 2025', organizer: 'RedCLARA · Costa Rica · UNSA Scholarship', year: '2025' },
        { title: '4th International Systems Engineering Congress — CIIS 2024', organizer: '40 academic hours', year: '2024' },
        { title: 'First National Congress of Research Groups — CONASEIN', organizer: 'CONCYTEC', year: '2023' },
        { title: 'Systems and Computer Engineering Chapter Week', organizer: 'Peruvian College of Engineers', year: '2022' }
      ]
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      intro: 'Builds that combine solid engineering practices with real-world problems.',
      featuredBadge: 'Featured',
      demo: 'Demo',
      code: 'Code',
      frontend: 'Frontend',
      backend: 'Backend',
      items: [
        {
          title: 'SmartMine AI — Mining Fleet Simulation & Optimization with AI',
          description:
            'Collaborative platform to simulate and optimize truck fleet operations in open-pit mining. The backend integrates a Machine Learning model that predicts truck-shovel cycle time; I built the truck/shovel assignment and management logic, real-time WebSockets, and the simulation canvas and builder module on the frontend.'
        },
        {
          title: 'Apruebo PE — University Academic Management Platform',
          description:
            'Web app for academic tracking of UNSA students, with real active users. Automatically loads the curriculum plan once you select your major and entry year: dashboard, grades per course, notes, performance charts, grade simulator, referrals, reports and gradebook import.',
          note: 'Private repository — available on request'
        },
        {
          title: 'CEPRUNSA — Scheduling Management System',
          description:
            'Web system to streamline schedule management at the largest pre-university center in Arequipa. Improved accessibility for teachers and monitors, earning a letter of recommendation for my contribution as frontend developer.'
        },
        {
          title: 'Pacha Wayra — Tourism Trip Planner',
          description:
            'Web app built for the NASA Space Apps Challenge to plan trips across Peru: information by region, top 10 tourist spots per city, weather-based recommendations, and PDF itinerary export.'
        },
        {
          title: 'Rehabi — Kinect v2 Rehabilitation with AI-Generated Avatars',
          description:
            'Unity physical rehabilitation game (single-leg balance exercise), with real-time motion tracking via Kinect v2 and personalized avatars generated with AI from a patient photo. I designed the full pipeline: a 3D-generation web app (Meshy AI), automatic import into Unity via C# Editor scripting, and posture detection from the Kinect joints.',
          note: 'Desktop application (Unity + Kinect v2) — no web demo due to hardware dependency'
        },
        {
          title: 'Graduate Program Management System — UNSA Graduate School',
          description:
            'Academic management system for UNSA’s Graduate School (Master’s in Computer Science): faculty, students, courses, enrollments, grades, tuition, payments and vouchers. I was responsible for agile methodologies, automated testing, and continuous integration/deployment (CI/CD), including GitLab mirror workflows and branch-flow control.'
        },
        {
          title: 'Distributed Voting System',
          description:
            'Electronic voting web platform built on a distributed systems architecture, aimed at ensuring security, transparency and scalability in electoral processes.'
        },
        {
          title: 'Movie Ticket Booking System',
          description:
            'Movie ticket purchase simulation with a backend that implements rollback transactions, PDF ticket generation and secure transaction handling.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      intro: 'Have an opportunity, project or program in mind? I’m open to new challenges.',
      infoTitle: 'Contact information',
      info: {
        emailTitle: 'Email',
        phoneTitle: 'Phone',
        locationTitle: 'Location'
      },
      followTitle: 'Follow me',
      formTitle: 'Send me a message',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'How can I help?',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me more...',
      submitBtn: 'Send message',
      submitNote: 'This will open your email client with the message already drafted.'
    },
    footer: {
      tagline: 'Systems Engineering Student · Full Stack Developer & QA'
    }
  }
}
