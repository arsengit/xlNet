import React from "react"
import WhoWeAre from "../components/home/whoWeAre"
import OurClients from "../components/home/OurClients"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetStarted from "../components/getStarted"
import Projects from "../components/home/projects";
import "../styles/home/ourClients.css"
import "../styles/home/whoWe.css"
import "../styles/media.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`xlNet`, `application`, `mobile`]} />

    <div className="header-content-container">
      <div className="header-content container">
        <h1>We Make it Perfect for you. We can help</h1>
        <p>We help digital product teams in fintech to create amazing experiences. By crafting top-level UI/UX and bringing lean design processes on board.
        </p>
        <GetStarted />
      </div>


    </div>
    <div>
      <WhoWeAre />
      <OurClients />
      <Projects />
    </div>
  </Layout>
)

export default IndexPage
