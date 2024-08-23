import {Component} from "react"
import {Link} from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import "./Home.css"

class Home extends Component{

    render(){
        return(
            <div className="home-bg-container">
                <div className="home-icon-container">
                    <CiLocationOn className="home-icon" />
                    <p className="home-icon-text">Rosetone <br/>Travel & Tours</p>
                </div>

                <div>
                    <h1 className="home-heading">Time for your <span>next adventure</span></h1>
                    <p className="home-description">Lets us plan it for you</p>
                    <Link to="/view-page"><button className="home-button">View More</button></Link>
                </div>
            </div>
        )
    }
}

export default Home