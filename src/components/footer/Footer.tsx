import React from "react";
import { IFooterData } from "../../types/FooterTypes";
import { Email } from "./Email";
import { Socials } from "./Socials";


export const FooterTemplate = ({ data }: { data: IFooterData }) => {
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

interface TProps {
  data: {
    edges: Array<{
      node: {
        id: string,
        frontmatter: IFooterData
      }
    }>
  }

}
export const Footer = (props: TProps) => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};


