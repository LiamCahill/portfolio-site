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
export interface INavbarData {
    logoImage: TLogoImage
    menuItems: Array<TMenuItem>
}