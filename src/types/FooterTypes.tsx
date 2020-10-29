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
export interface IFooterData {
    email: TEmail,
    socialLinks: Array<TSocialLink>
}