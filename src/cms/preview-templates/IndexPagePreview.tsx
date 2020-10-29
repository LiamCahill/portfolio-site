import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { PreviewTemplateComponentProps } from 'netlify-cms-core'


export const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}
