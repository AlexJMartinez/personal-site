import React, { Component } from 'react'  
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom' 
import './Nav.css'

class Nav extends Component {

    render() {

        const linkStyle = {
            textDecoration: "none"
          };

        return (
            <nav className="NavbarItems">
                <ul>
                    {MenuItems.map((item, index) => {
                        
                        return (
                            <li key={index}><Link style={linkStyle}
                                                  to={item.url}>
                                                  {item.title}
                                                  </Link>
                            </li>
                        )
                    })}
                </ul> 
            </nav>
        )
    }
}

export default Nav