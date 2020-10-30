import React from 'react'
import { IndexPageTemplate } from '../../templates/IndexPage'
import { PreviewTemplateComponentProps } from 'netlify-cms-core'


export const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        hero={data.hero}
        about={data.about}
        skills={data.skills}
        experiences={data.experiences}
        projects={data.projects}

      />
    )
  } else {
    return <div>Loading...</div>
  }
}
