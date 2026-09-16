import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface ProjectData {
  image: string
  technologies: string[]
  demoLink: string
  codeLink: string
  backendLink?: string
  gallery?: string[]
  featured?: boolean
}

const projectsData: ProjectData[] = [
  {
    image: '/smartmine-project.jpg',
    technologies: ['React', 'Vite', 'Python', 'FastAPI', 'Machine Learning', 'WebSockets'],
    demoLink: 'https://smartmine-frontend.vercel.app/',
    codeLink: 'https://github.com/JorgeCY21/smartmine-frontend',
    backendLink: 'https://github.com/JorgeCY21/smartmine-backend',
    featured: true
  },
  {
    image: '/apruebo-pe-project.jpg',
    technologies: ['React', 'TypeScript'],
    demoLink: 'https://apruebo-pe.vercel.app/',
    codeLink: 'https://github.com/JorgeCY21/AprueboPe',
    featured: true
  },
  {
    image: '/ceprunsa-project.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'Spring Boot'],
    demoLink: 'https://cepre-frontend.vercel.app/',
    codeLink: 'https://github.com/CeprHorario/cepre-frontend',
    featured: false
  },
  {
    image: '/pacha-wayra-project.jpg',
    technologies: ['React', 'JavaScript', 'CSS', 'PDF Export', 'NASA API'],
    demoLink: 'https://pacha-wayra-official.vercel.app/',
    codeLink: 'https://github.com/JorgeCY21/pacha-wayra',
    featured: false
  },
  {
    image: '/rehabi-project.jpg',
    technologies: ['Unity', 'C#', 'Kinect v2', 'React', 'Vite', 'Meshy AI'],
    demoLink: '#',
    codeLink: 'https://github.com/JorgeCY21/Rehabi',
    gallery: [
      '/rehabi-1.jpg',
      '/rehabi-2.jpg',
      '/rehabi-3.jpg',
      '/rehabi-4.jpg',
      '/rehabi-5.jpg',
      '/rehabi-6.jpg',
      '/rehabi-7.jpg'
    ],
    featured: false
  },
  {
    image: '/gestion-maestrias-project.jpg',
    technologies: ['React', 'Java 25', 'Spring Boot', 'PostgreSQL', 'CI/CD'],
    demoLink: 'https://gestion-maestrias-front.vercel.app/login',
    codeLink: 'https://github.com/YeyderJHJL/gestion-maestrias-front',
    featured: false
  },
  {
    image: '/votacion-project.jpg',
    technologies: ['React', 'Distributed Systems', 'Tailwind CSS', 'Security'],
    demoLink: 'https://front-sistema-votacion-xan1.vercel.app/',
    codeLink: 'https://github.com/JorgeCY21/front-sistema-votacion',
    featured: false
  },
  {
    image: '/cine-project.jpg',
    technologies: ['React', 'Backend', 'PDF Generation', 'Transactions'],
    demoLink: 'https://front-cine-gilt.vercel.app/',
    codeLink: 'https://github.com/JorgeCY21/front-cine',
    featured: false
  }
]

const initials = (title: string) =>
  title
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

const hasLivePreview = (url: string) => !!url && url !== '#'

const ImageGallery: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — ${i + 1}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIndex(i)
            }}
            aria-label={`${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

interface MergedProject extends ProjectData {
  id: number
  title: string
  description: string
  note?: string
}

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const { projects } = t

  const merged: MergedProject[] = projectsData.map((data, i) => ({
    ...data,
    id: i,
    title: projects.items[i].title,
    description: projects.items[i].description,
    note: projects.items[i].note
  }))

  const featuredProjects = merged.filter((p) => p.featured)
  const otherProjects = merged.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">{projects.eyebrow}</span>
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-intro">{projects.intro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured labels={projects} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} labels={projects} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: MergedProject
  featured: boolean
  labels: { featuredBadge: string; demo: string; code: string; frontend: string; backend: string }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured, labels }) => {
  const showPreview = hasLivePreview(project.demoLink)
  const [imageFailed, setImageFailed] = React.useState(false)

  return (
    <div className="card overflow-hidden flex flex-col">
      {/* Preview */}
      <div className="relative h-40 bg-slate-50 border-b border-slate-100 overflow-hidden">
        {showPreview ? (
          <iframe
            src={project.demoLink}
            title={project.title}
            loading="lazy"
            tabIndex={-1}
            className="pointer-events-none absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] border-0"
          />
        ) : project.gallery && project.gallery.length > 0 ? (
          <ImageGallery images={project.gallery} alt={project.title} />
        ) : project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
        )}

        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center font-bold text-xs font-display text-indigo-600 shadow-sm">
          {initials(project.title)}
        </div>

        {featured && (
          <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-copper-500 px-2 py-0.5 rounded-full shadow-sm">
            {labels.featuredBadge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {project.note && (
          <p className="text-xs text-slate-400 italic mb-4">{project.note}</p>
        )}

        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[100px] bg-indigo-600 hover:bg-indigo-500 text-white text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {labels.demo}
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[100px] border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            {project.backendLink ? labels.frontend : labels.code}
          </a>
          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              {labels.backend}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
