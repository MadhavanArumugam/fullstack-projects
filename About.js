import  React   from 'react'
import abt from "../../Images/about-us.jpg"
import "../../styles/About.css";

const About = () => {
    return(
        <>
        <div className="about">
            <img className="about-img" src={abt}/>
            <p>
            We are a dedicated team of travel enthusiasts, tech experts, and customer service professionals committed to revolutionizing the way you book bus tickets. Our journey began with a simple yet powerful vision: to connect travelers with seamless, reliable, and affordable transportation options at their fingertips.
            </p>

        </div>
        </>
    );

}
export default About;
