import { TImage } from "./Types";

export interface ILayout {
    footer: IFooter | null,
    navbar: INavbar | null,
    children: JSX.Element
}

// Navbar
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

// Footer
export type TEmail = {
    email: string,
    emailAlt: string
}
export type TSocialLink = {
    image: TImage,
    imageAlt: any,
    label: string,
    linkURL: string
}
export interface IFooter {
    email: TEmail,
    socialLinks: Array<TSocialLink>
}
export type TFooterData = {
    edges: Array<{
        node: {
            id: string,
            frontmatter: IFooter
        }
    }>
}