import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export interface ContactPageProps {
    
}
 
const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
    return ( 
          <Layout>
        <SEO title="Page two" />

      </Layout> );
}
 
export default ContactPage;

