import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/reset.css"
import "../styles/style.css"
import Header from "./header"
import Footer from "./Footer"
import CustomScroll from 'react-custom-scroll';


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
      <CustomScroll>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer/>
      </CustomScroll>
      </>
    )}
  />
)


export default Layout
