import React from 'react';

import Header from './Header.js'

class About extends React.Component {
    render(){
        return(
            <section className="about">
               <div className="container">
                <div className="headings">
                    <h1 className="label">
                        Our <label>Services</label>
                    </h1>
                    <hr className="sline"/>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rerum vel voluptatem provident aut dolor, eaque, quae.
                    </p>
                </div>
                
                <div className="ourServices d-flex justify-content-around flex-wrap">
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="fas fa-pencil-alt"></i></div>
                    <h5 className="card-title">Content Writing</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="fas fa-cog"></i></div>
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="far fa-chart-bar"></i></div>
                    <h5 className="card-title">Graphic Design</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="fas fa-layer-group"></i></div>
                    <h5 className="card-title">UI/UX Design
</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="fas fa-tablet-alt"></i></div>
                    <h5 className="card-title">App Development
</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                  <div className="card-body">
                   <div className="boxes"><i className="fas fa-briefcase"></i></div>
                    <h5 className="card-title">Digital Marketing</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                      </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About