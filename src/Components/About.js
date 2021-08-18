import React from 'react'  
import './Component.css'
import './About.css'


const About = () => {
    return(
        <div>
            <h1 className="title">About</h1>
            <div className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum accumsan lacus ligula. Duis facilisis, ante at aliquam dapibus, massa dolor laoreet sem, ut eleifend nisi ante tincidunt dolor.
                Mauris sapien augue, semper ut odio ut, cursus molestie elit. 
                Sed mollis, ante et tempus convallis, nibh massa viverra ante, in aliquam magna justo at massa. 
                Aenean nec nunc sapien. 
                Etiam vitae felis nec velit tristique blandit nec ac nibh. 
                Suspendisse arcu sem, ornare vel orci nec, ornare consequat arcu. 
                Nam in faucibus augue. 
            </div>
        </div>
    )
}

export default About