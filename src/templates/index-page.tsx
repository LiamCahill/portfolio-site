import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { IContent } from '../types/ContentTypes'
import { Content } from '../components/content/Content'
import { IIndexData } from '../types/Types'


export const IndexPageTemplate = ({ hero, about, skills, experiences, projects }: IContent) => (
  <div>

    <Content
      hero={hero}
      about={about}
      skills={skills}
      experiences={experiences}
      projects={projects}
    />

  </div>
)


const IndexPage = ({ data }: { data: IIndexData }) => {
  const footer = data.footerData.edges[0].node.frontmatter || null
  const navbar = data.navbarData.edges[0].node.frontmatter || null
  const hero = data.heroData.edges[0].node.frontmatter || null

  return (
    <Layout footer={footer} navbar={navbar}>
      <IndexPageTemplate
        hero={hero}
        about={null}
        skills={null}
        experiences={null}
        projects={null}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    ...LayoutFragment
    ...ContentFragment
  }
`
