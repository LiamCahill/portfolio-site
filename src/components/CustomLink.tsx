import React from "react";
import { Link } from "gatsby";

interface TProps {
    linkType: string,
    linkURL: string,
    children: any,
    className: string
}
export const CustomLink = ({ linkType, linkURL, children, className = "" }: TProps) => {
    if (linkType === "internal") {
        return (
            <Link className={className} to={linkURL}>
                {children}
            </Link>
        );
    } else {
        return (
            <a className={className} href={linkURL}>
                {children}
            </a>
        );
    }
};