import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'

interface TProps {
  title: string,
  heading: string,
  subheading: string,
  mainpitch: any,
  description: string
}

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
}: TProps) => (
    <div>
      {/* Start of Title */}
      <div
        className="full-width-image margin-top-0"

      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(10, 12, 55) 0.5rem 0px 0px, rgb(10, 12, 55) -0.5rem 0px 0px',
            backgroundColor: 'rgb(10, 12, 55)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(10, 12, 55) 0.5rem 0px 0px, rgb(10, 12, 55) -0.5rem 0px 0px',
            backgroundColor: 'rgb(10, 12, 55)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>

      </div>
      {/* End of Title */}

      {/* Start of Content Body */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Content Body */}

    </div>
  )


interface TIndexData {
  markdownRemark: { frontmatter: any }
  footerData: any,
  navbarData: any
}
const IndexPage = ({ data }: { data: TIndexData }) => {
  const { frontmatter } = data.markdownRemark
  const footerData = data.footerData
  const navbarData = data.navbarData

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
    ...LayoutFragment
  }
`
