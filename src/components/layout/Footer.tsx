import React from "react";
import { IFooter } from "../../types/LayoutTypes";
import { Email } from "./footer/Email";
import { Socials } from "./footer/Socials";


export const FooterTemplate = ({ data }: { data: IFooter }) => {
  const { email, socialLinks } = data;

  return (
    <nav className="footer">

      <div className="footer-right">
        <Socials socialLinks={socialLinks} />
      </div>

      <div className="footer-left">
        <Email email={email} />
      </div>

    </nav>
  );
};

export const Footer = ({ data }: { data: IFooter | null }) => {
  if (!data) {
    return null;
  }

  return <FooterTemplate data={data} />;
};


