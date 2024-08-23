import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import Navbar from "../NavBar"
import "./Contact.css"

const Contact = () => {
    return(
        <div className="contact-container">
            <Navbar />
            <h1>Contact</h1>
            <p className="contact-description">Pixel perfect design with awesome contents</p>
            <div className="contact-form-content">
                <h2 className="contact-title">Get In Touch</h2>
                <form>
                    <input type="text" placeholder="Name" className="contact-input" />
                    <input type="text" placeholder="Email" className="contact-input" />
                    <textarea placeholder="Message" cols={"85"} rows={"15"}  />
                    <button className="contact-button">Send</button>
                </form>
            </div>

            <div className="icon-card-container">
                <div className="icon-card">
                    <IoHomeOutline className="contact-icon" />
                    <div>
                        <p className="icon-text">Hyderabad</p>
                        <p className="icon-text2">India....</p>
                    </div>
                </div>

                <div className="icon-card">
                    <MdOutlinePhoneIphone className="contact-icon" />
                    <div>
                        <p  className="icon-text">+91 987654321</p>
                        <p className="icon-text2">Mon to Fri 9am to 6pm</p>
                    </div>
                </div>

                <div className="icon-card">
                    <IoMailOutline className="contact-icon" />
                    <div>
                        <p  className="icon-text">travel@gmail.com</p>
                        <p className="icon-text2">Send us your Message anytime!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact