import React, { useState } from 'react';  
import './Component.css';
import './Home.css';
import { useSpring, animated } from 'react-spring';

// move animation code to another component and just import it to clean up this component.

const Home = () => {

  const [flip, set] = useState(false)

  const propSetOne = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
    reverse: flip,
    delay: 500,
    onRest: () => set(!flip),
  })

    return (
        <div>
            <h1 className="title">Alex Martinez</h1>
                <div className="circles-container">
                        <table className="grid">
                            <tr>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                            </tr>
                            <tr>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                            </tr>
                            <tr>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-two"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                            </tr>
                            <tr>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                                <td><animated.div style={propSetOne} id="circle-one"/></td>
                            </tr>
                        </table>               
                </div>
        </div>
    )
}

export default Home 