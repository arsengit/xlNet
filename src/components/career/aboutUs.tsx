import * as React from "react"

export interface AboutUsProps {}

const AboutUs: React.SFC<AboutUsProps> = () => {
  return (
    <section className="container career-main">
      <h2>Who we are</h2>
      <h3 className="section-info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum is simply dummy text 
      </h3>
    </section>
  )
}

export default AboutUs
