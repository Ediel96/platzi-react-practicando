import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../images/logo.svg'
import '../components/styles/Navbar.css'

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand_logo" src={logo} alt="logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                    </div>
            </div>
        );
    }
}
 
export default Navbar;