import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props: any) => (
  <StaticQuery
    query={graphql`
      query {
    
        home_bg: file(relativePath: { eq: "home_bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        light: file(relativePath: { eq: "light.png" }) {
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      

      workers: file(relativePath: { eq: "workers.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webDev: file(relativePath: { eq: "WebDevelopment.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productDesign: file(relativePath: { eq: "ProductDesign.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileDevelopment: file(relativePath: { eq: "MobileDevelopment.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileil: file(relativePath: { eq: "mobileil.png" }) {
        childImageSharp {
          fluid(maxWidth: 310, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pricing_bg: file(relativePath: { eq: "pricing_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discussion: file(relativePath: { eq: "discussion.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      structure: file(relativePath: { eq: "structure.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      design: file(relativePath: { eq: "design.png" }) {
        childImageSharp {
          fluid(maxWidth: 275, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      implementation: file(relativePath: { eq: "implementation.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      slide1: file(relativePath: { eq: "slide1.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide2: file(relativePath: { eq: "slide2.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide3: file(relativePath: { eq: "slide3.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide4: file(relativePath: { eq: "slide4.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide5: file(relativePath: { eq: "slide5.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100) {
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
