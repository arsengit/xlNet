import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/reset.css"
import "../styles/style.css"
import Header from "./header"
import Footer from "./Footer"

const Layout: React.FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer/>
           
       
      </>
    )}
  />
)


export default Layout
