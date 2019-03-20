import React from "react"
import { Link } from "gatsby"
import GetIn from "../components/getInTouch"
import Layout from "../components/layout"
import SEO from "../components/seo"

export interface ContactPageProps {
    
}
 
const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
    return ( 
          <Layout>
        <SEO title="Page two" />
          <GetIn/>
      </Layout> );
}
 
export default ContactPage;

