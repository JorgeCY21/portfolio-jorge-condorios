import type { ReactNode } from 'react'

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactInfo {
  icon: ReactNode;  // ← Cambiado de JSX.Element a ReactNode
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;  // ← Cambiado de JSX.Element a ReactNode
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  name: string;
  href: string;
}