import React from "react";
import { FooterTemplate } from "../../components/footer/Footer";
import { PreviewTemplateComponentProps } from 'netlify-cms-core'

const FooterPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(["data"]).toJS();
  return <FooterTemplate data={data} />;
};

export default FooterPreview;
