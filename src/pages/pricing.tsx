import * as React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"
import PricingModels from '../components/pricing/models';
import Process from '../components/pricing/process';
import "../styles/pricing/pricing.css";



export interface PricingIndexProps
{

}

const PricingIndex: React.FunctionComponent<PricingIndexProps> = () =>
{
    return (
        <Layout>
            <SEO title="pricing" keywords={[`xlNet`]} />
            <PricingModels />
            <Process />
        </Layout>
    );
}

export default PricingIndex;