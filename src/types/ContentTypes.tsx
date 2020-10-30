import { TImage } from "./Types"

export interface IContent {
    hero: IHero | null,
    about: any | null,
    skills: any | null,
    experiences: any | null,
    projects: any | null
}

// Hero
export interface IHero {
    title: string
    subtitle: string
    description: string
}
export type THeroData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: IHero
        }
    }>
}

// About
export interface IAbout {
    title: string
    description: string
}
export type TAboutData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: IAbout
        }
    }>
}

// Skills

export interface ISkill {
    name: string
    icon?: TImage
}
export type TSkillsData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: { skills: Array<ISkill> }
        }
    }>
}

// Experiences
export interface IExperience {
    title: string
    company: string
    location: string
    companyWebsite: string
    startingDate: string
    endingDate: string
    duties: Array<{ duty: string }>
}
export type TExperiencesData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: { experiences: Array<IExperience> }
        }
    }>
}

// Projects
export interface ITechnology {
    technology: string
    technologyIcon?: TImage
}
export interface IProject {
    title: string
    image: TImage
    githubLink?: string
    externalLink?: string
    description: string
    technologies: Array<ITechnology>
}
export type TProjectsData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: { projects: Array<IProject> }
        }
    }>
}