import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export interface CareerPageProps {
    
}
 
const CareerPage: React.FunctionComponent<CareerPageProps> = () => {
    return ( 
 <Layout>
        <SEO title="Page two" />
    
      </Layout> );
}
 
export default CareerPage;