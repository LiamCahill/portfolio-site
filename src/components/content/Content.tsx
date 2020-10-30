import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import { IContent } from '../../types/ContentTypes'
import { About } from './About'
import { Experiences } from './Experiences'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Skills } from './Skills'

export const Content = ({ hero, about, skills, experiences, projects }: IContent) => {
  return (
    <Fragment>
      <Hero data={hero} />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </Fragment>
  )
}

export const query = graphql`
  fragment ContentFragment on Query {
    heroData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "hero" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            description  
          }
        }
      }
    }
  }
`;