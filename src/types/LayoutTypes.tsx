import { IFooter } from "./FooterTypes";
import { INavbar } from "./NavbarTypes";


export interface ILayout {
    footer: IFooter | null,
    navbar: INavbar | null,
    children: JSX.Element
}