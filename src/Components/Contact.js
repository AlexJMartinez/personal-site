import React from 'react'
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import {  } from "react-icons/fa"
import './Component.css'
import './Contact.css'

// later on move icon code to its own component and just import the component to clean up the look of this component.

const Contact = () => {

        const style = { size: '100px'}

        return (
            <div>
                <h1 className="title">Contact: 
                    <div>
                        <ul>
                            <li align="center">
                                    <a href="https://www.linkedin.com/in/alexanderjustinmartinez/" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '40px'}}>
                                                <FaLinkedin/>
                                            </IconContext.Provider>
                                    </a>
                                </li>
                            <li>
                                    <a href="https://github.com/AlexJMartinez" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '40px'}}>
                                                <FaGithubSquare/>
                                           </IconContext.Provider>

                                    </a>
                                </li>
                            <li>
                                    <a href="https://medium.com/@Alex__Martinez" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '40px'}}>
                                                <FaMedium/>
                                           </IconContext.Provider>

                                    </a>
                                </li>
                        </ul>
                    </div>
                </h1>
            </div>
        )

}

export default Contact;