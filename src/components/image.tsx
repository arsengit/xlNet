import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props: any) => (
  <StaticQuery
    query={graphql`
      query {
    
        home_bg: file(relativePath: { eq: "home_bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        light: file(relativePath: { eq: "light.png" }) {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      

      workers: file(relativePath: { eq: "workers.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webDev: file(relativePath: { eq: "WebDevelopment.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productDesign: file(relativePath: { eq: "ProductDesign.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileDevelopment: file(relativePath: { eq: "MobileDevelopment.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileil: file(relativePath: { eq: "mobileil.png" }) {
        childImageSharp {
          fluid(maxWidth: 310) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pricing_bg: file(relativePath: { eq: "pricing_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discussion: file(relativePath: { eq: "discussion.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      structure: file(relativePath: { eq: "structure.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      design: file(relativePath: { eq: "design.png" }) {
        childImageSharp {
          fluid(maxWidth: 275) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      implementation: file(relativePath: { eq: "implementation.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <Img fluid={data[props.image].childImageSharp.fluid} />}
  />
)
export default Image
