import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { IContent } from '../types/ContentTypes'
import { Content } from '../components/Content'
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
  const about = data.aboutData.edges[0].node.frontmatter || null
  const skills = data.skillsData.edges[0].node.frontmatter.skills || null
  const experiences = data.experiencesData.edges[0].node.frontmatter.experiences || null
  const projects = data.projectsData.edges[0].node.frontmatter.projects || null

  return (
    <Layout footer={footer} navbar={navbar}>
      <IndexPageTemplate
        hero={hero}
        about={about}
        skills={skills}
        experiences={experiences}
        projects={projects}
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
