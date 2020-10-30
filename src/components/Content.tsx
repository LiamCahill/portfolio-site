import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import { IContent } from '../types/ContentTypes'
import { About } from './content/About'
import { Experiences } from './content/Experiences'
import { Hero } from './content/Hero'
import { Projects } from './content/Projects'
import { Skills } from './content/Skills'

export const Content = ({ hero, about, skills, experiences, projects }: IContent) => {
  return (
    <Fragment>
      <Hero data={hero} />
      <About data={about} />
      <Skills data={skills} />
      <Experiences data={experiences} />
      <Projects data={projects} />
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
    aboutData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "about" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            description  
          }
        }
      }
    }
    skillsData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "skills" } } }) {
      edges {
        node {
          id
          frontmatter {
            skills{
              name
              icon{
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                extension
                publicURL
              }
            }  
          }
        }
      }
    }
    experiencesData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "experiences" } } }) {
      edges {
        node {
          id
          frontmatter {
            experiences{
              title
              company
              location
              companyWebsite
              startingDate
              endingDate
              duties{
                duty
              }
            }  
          }
        }
      }
    }
    projectsData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "projects" } } }) {
      edges {
        node {
          id
          frontmatter {
            projects{
              title
              image{
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                extension
                publicURL
              }
              githubLink
              externalLink
              description
              technologies{
                technology
                technologyIcon{
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                  extension
                  publicURL
                }
              }
            }  
          }
        }
      }
    }
  }
`;