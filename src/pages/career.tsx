import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/career/aboutUs";
import WhatWeDo from "../components/career/whatWeDo";
import "../styles/career/career.css"
import MarketSales from "../components/career/marketSales";

export interface CareerPageProps {
    
}
 
const CareerPage: React.FunctionComponent<CareerPageProps> = () => {
    return ( 
 <Layout>
        <SEO title="Page two" />
        <div className="careerPage">
          
    <AboutUs/>
    <WhatWeDo/>
    <MarketSales/>
        </div>
      </Layout> );
}
 
export default CareerPage;