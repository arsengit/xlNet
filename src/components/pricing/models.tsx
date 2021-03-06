import * as React from "react"
import Img from "../image"
import GetStarted from "../getStarted";
export interface PricingModelsProps { }

export interface PricingModelsState { }

class PricingModels extends React.Component<
  PricingModelsProps,
  PricingModelsState
  > {
  state = {}
  render()
  {
    return (
      <section className="pricing-main container">
        <h2>Pricing Models</h2>
        <h3 className="section-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <div className="pricing-items">
          <div className="pricing-img">
            <Img image="productDesign" />
            <strong>Product Design</strong>
          </div>
          <div className="pricing-img">
            <Img image="webDev" />
            <strong>Web Development</strong>
          </div>
          <div className="pricing-img">
            <Img image="mobileDevelopment" />
            <strong>Mobile Development</strong>
          </div>
        </div>
        <div className="pricing-bottom">
          <div className="pricing-bottomImg">
            <Img image="mobileil" />
          </div>
          <div className="pricing-text">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </span>
            <GetStarted />
          </div>
        </div>
      </section>
    )
  }
}

export default PricingModels
