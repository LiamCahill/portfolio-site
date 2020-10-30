import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import { graphql, withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'
import { ILayout } from '../types/LayoutTypes'
import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'


export const Layout = ({ navbar, footer, children }: ILayout) => {
  const { title, description } = useSiteMetadata()
  const content = children

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar data={navbar} />
      <Fragment>{content}</Fragment>
      <Footer data={footer} />
    </div>
  )
}

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            email {
              email
              emailAlt
            }
            socialLinks {
              image{
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                extension
                publicURL
              }
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image{
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                extension
                publicURL
              }
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;