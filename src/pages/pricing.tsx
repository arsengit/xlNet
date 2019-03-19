import * as React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"
import PricingModels from '../components/pricing/models';


export interface PricingIndexProps {
    
}
 
const PricingIndex: React.FunctionComponent<PricingIndexProps> = () => {
    return ( 
        <Layout>
            <SEO title="pricing" keywords={[`xlNet`]}/>
            <PricingModels/>
        </Layout>
     );
}
 
export default PricingIndex;