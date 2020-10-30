import { TFooterData } from "./FooterTypes";
import { THeroData } from "./HeroTypes";
import { TNavbarData } from "./NavbarTypes";


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

}