import React from 'react';

import Header from './Header.js'

class Footer extends React.Component {
    render(){
        return(
            <footer>
               <div className="container">
                <ul id="socicons" className="justify-content-center m-auto d-flex">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-google-plus"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                    <li><i className="fab fa-pinterest"></i></li>
                    <li><i className="fab fa-dribbble"></i></li>
                </ul>
                <div className="site-info">
                    <p>All copyrights reserved © 2018 - Designed & Developed by Hope</p>
                </div>
                </div>
            </footer>
        )
    }
}
export default Footer