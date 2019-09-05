import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './Aboutus';
import Footer from './Footer';
import Contact from './Contact';
import Support from './Support';


class App extends React.Component {
    render(){
        return(
            
        <Router>
            <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route  path="/about" component={About} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/support" component={Support} />
            <Footer />
            </div>
        </Router>
        )
    }
}
export default App