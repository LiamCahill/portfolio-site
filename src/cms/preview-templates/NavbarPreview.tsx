import React from "react";
import { PreviewTemplateComponentProps } from 'netlify-cms-core'
import { NavbarTemplate } from "../../components/navbar/Navbar";

const NavbarPreview = ({ entry }: PreviewTemplateComponentProps) => {
    const data = entry.getIn(["data"]).toJS();
    return <NavbarTemplate data={data} />;
};

export default NavbarPreview;
