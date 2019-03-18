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
      }
    `}
    render={data => <Img fluid={data[props.image].childImageSharp.fluid} />}
  />
)
export default Image
