import IMG3474 from '../../images/IMG_3474 2.jpg'
import IMG3480 from '../../images/IMG_3480 2.jpg'
import IMG3737 from '../../images/IMG_3737.jpg'
import IMG7922 from '../../images/magiscatwalk.jpg'
import lightModeIcon from "../../images/mode-light-icon.png";
import darkModeIcon from "../../images/mode-dark-icon.png";

import { useState } from 'react'

import Card from './Card'
import './Background.css'

function Background () {
    const text1 = "Welcome to my research! As a culturally invested high school student and proponent of AI real-world integration, I beleive there is so much opportunity with the things we do. That's why I want to use research to end dangerous gun violence. Feel free to check it out."
    const [isDark, setIsDark] = useState(true);
    const toggleBackground = () => {
        setIsDark(!isDark);
        document.body.className = isDark ? 'lightMode' : 'darkMode';
    }
    

    return (
        <div className='background'>
            <div className={`header ${isDark ? 'darkheader' : 'lightheader'}`}>
            <p className="headertext">Jonathan Hsueh's Website</p>
            </div>
        <div className="outerdesign">
        <div className="cardcontainer">
        <Card
        image1={IMG3474} 
        image2={IMG3480} 
        image3={IMG3737}
        image4={IMG7922}
        content={text1}
        ></Card>

        <Card
        image1={IMG3474} 
        image2={IMG3480} 
        image3={IMG3737}
        image4={IMG7922}
        content={text1}
        ></Card>
        </div>
        <div className="button-container">
        <button className="toggle-circle" onClick={toggleBackground}>
          <img
            src={isDark ? lightModeIcon : darkModeIcon}
            alt="Mode Toggle Icon"
            className="toggle-icon"
          />
        </button>
        </div>
        </div>
        </div>
    );
}

export default Background;