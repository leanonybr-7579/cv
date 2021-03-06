import React from 'react'

import background from '../images/background3.jpg'
import '../css/projects.css'

export default function Projects() {
    function handleImageClicks(){
        window.location.replace('https://github.com/leanonybr-7579')
    }
    return (
        <>
            <img onClick={handleImageClicks} src="https://avatars2.githubusercontent.com/u/58123754?s=400&v=4" alt=""/>

            <img id="background" src={background} alt=""/>
            <div id="block"></div>
            <div className="projects-banner">
                <hr/>
                <h1>My projects</h1><br/>
                <div>
                    <h3>JS-Hunt Products</h3>
                    <p>
                        This project is a project that simulates online products info, but all the <br/>
                        products are just frameworks
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/JSHunt-products/">JSHunt-products</a></p>
                </div>
                <br/>
            
                <div>
                    <h3>Calculator</h3>
                    <p>
                        This project is very easy to do, but when i created it, i was starting with HTML, CSS and JS.<br/>
                        So this project marked my starting phase on programming, and that's why im going to include it here
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/Calculator">Calculator</a></p>
                </div>
                <br/>
            
                <div>
                    <h3>DevRadar</h3>
                    <p>
                        I like this one. The objective of this application is to find devs who work with the frameworks and<br/>
                        languages that you provided, and more, it will search based on the current place you are.<br/>
                        In the frontend you can register your dev, in the mobile you can search for the dev.
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/semanaomnistack10">DevRadar</a></p>
                </div>
            </div>
        </>
    )
}
