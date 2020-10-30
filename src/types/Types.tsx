import { TFooterData, TNavbarData } from "./LayoutTypes";
import { TAboutData, TExperiencesData, THeroData, TProjectsData, TSkillsData } from "./ContentTypes";


export type TImage = {
    childImageSharp: any
    extension: any
    publicURL: any
}
export interface IIndexData {
    markdownRemark: { frontmatter: any }
    footerData: TFooterData
    navbarData: TNavbarData
    heroData: THeroData
    aboutData: TAboutData
    skillsData: TSkillsData
    experiencesData: TExperiencesData
    projectsData: TProjectsData
}