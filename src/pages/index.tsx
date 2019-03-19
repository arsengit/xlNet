import React from "react"
import { Link } from "gatsby"
import WhoWeAre from "../components/home/whoWeAre"
import OurClients from "../components/home/OurClients"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projects from "../components/home/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`xlNet`, `application`, `mobile`]} />
     
      <div className="header-content-container">
        <div className="header-content">
        <h1>We Make it Perfect for you. We can help</h1>
        <p>We help digital product teams in fintech to create amazing experiences. By crafting top-level UI/UX and bringing lean design processes on board.</p>
        <button>Get started</button>
        </div>
        
        <Image image="home_bg"/>
        </div>
        <div>
      <WhoWeAre/>
      <OurClients/>
      <Projects/>
        </div>
  </Layout>
)

export default IndexPage
