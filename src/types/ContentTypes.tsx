import { IHero } from "./HeroTypes";

export interface IContent {
    hero: IHero | null,
    about: any | null,
    skills: any | null,
    experiences: any | null,
    projects: any | null
}