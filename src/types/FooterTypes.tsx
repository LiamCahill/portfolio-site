import { TImage } from "./Types"

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