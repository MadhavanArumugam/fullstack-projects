import  React   from 'react'
import pic from "../../Images/help-care.png"
import "../../styles/Help.css";

const Help = () => {
    return(
        <>
        <div className="card">
            <img className="card-img" src = {pic}  alt="picture" />
            <p>
                Welcome to our Bus Ticket Booking Help Center! We are dedicated to ensuring your journey with us is seamless and stress-free. Whether you're a first-time traveler or a seasoned commuter, our goal is to assist you every step of the way. In this section, you'll find answers to commonly asked questions, providing clarity on ticket purchases, reservation modifications, boarding procedures, and more. Can't find what you need? Our support team is just a message away. Feel free to reach out via the contact form below. Your comfort and satisfaction are our priorities, and we're here to make your travel experience enjoyable
                . For more details and quaries contact 
        </p>
        <h6>admin123@gmail.com</h6>
        </div>
        
        </>
    );
}
 export default Help;