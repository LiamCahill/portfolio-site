import { TImage } from "./Types"

export type TLogoImage = {
    image: TImage
    imageAlt: string
}
export type TMenuItem = {
    label: string
    linkType: string
    linkURL: string
}
export interface INavbar {
    logoImage: TLogoImage
    menuItems: Array<TMenuItem>
}
export type TNavbarData = {

    edges: Array<{
        node: {
            id: string,
            frontmatter: INavbar
        }
    }>


}