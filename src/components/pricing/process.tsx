import * as React from 'react';
import Img from "../image"
import "../../styles/pricing/process.css"

export interface ProcessProps {
    
}
 
const Process: React.SFC<ProcessProps> = () => {
    return ( 
        <section className="process-main">
        <div className="container">
        <h2>Our Process</h2>
            <h3 className="section-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>
          
            <div className="process-items">
            
                   <div className="container">

                    <div className="process-item process-item1">
                    <div className="process-text">
                    <strong>Discussion with Client</strong >
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                    </div>
                      <div className="process-img">
                          <Img image="discussion"/>
                      </div>
                    </div>

                    <div className="process-item process-item2">
                      <div className="process-img structure-img">
                          <Img image="structure"/>
                      </div>
                    <div className="process-text">
                    <strong>Structure of product</strong >
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                    </div>
                    </div>

                    <div className="process-item process-item3">
                    <div className="process-text">
                    <strong>Design</strong >
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                    </div>
                      <div className="process-img design-img">
                          <Img image="design"/>
                      </div>
                    </div>

                    <div className="process-item process-item4">
                      <div className="process-img implementation-img">
                          <Img image="implementation"/>
                      </div>
                    <div className="process-text">
                    <strong>Implementation</strong >
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                    </div>
                    </div>

 
                </div>
 
            </div>
        </section>
     );
}
 
export default Process;