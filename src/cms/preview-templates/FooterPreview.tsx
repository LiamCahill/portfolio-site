import React from "react";
import { PreviewTemplateComponentProps } from 'netlify-cms-core'
import { FooterTemplate } from "../../components/layout/Footer";

const FooterPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(["data"]).toJS();
  return <FooterTemplate data={data} />;
};

export default FooterPreview;
