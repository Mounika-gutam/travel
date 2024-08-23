import { CiLocationOn } from "react-icons/ci";
import NavBar from "../NavBar"
import "./HomeViewPage.css"

const HomeViewPage = () => {
    return(
        <div className="view-page-container">
            {/* travel made easy */}
            <NavBar />
            <div className="view-page-content1">
            <div>
                <CiLocationOn className="view-page-icon" />
                <h1 className="view-page-title">Travel made easy</h1>
                <p className="view-page-description">Write a paragraph that talk about your company here.You can talk about your company's background,
                    history,mission,vision, or philosophy.Anything that will introduce your brand persona to your clients.
                    This will help build a connection between you and them, that hopefully leads into a working relationship.
                </p>
                <button className="view-page-button">LATEST PROMOS</button>
                <button className="view-page-button">OUR OFFERINGS</button>
            </div>
            <img src="https://i.pinimg.com/564x/3d/7b/ce/3d7bce527da7f042fa1fae9bb720b9de.jpg" alt="travel" className="view-page-image" />
        </div>


        { /*summer deals for you */}


        <div className="view-page-content2">
            <h1 className="view-page-title2">Summer deals promo</h1>
            <ul className="view-page-content-card-list">
                <li className="view-page-content-card">
                    <img src="https://i.pinimg.com/236x/f1/26/c9/f126c91705a67ac95e91cd89443a6ad9.jpg" alt="summer deal" className="view-page-image2" />
                    <ul className="view-page-content">
                    <h1 className="view-page-content-card-title">Nature Esape <br /><span>Starts at $999</span></h1>
                        <li>Round trip airface</li>
                        <li>4D/3N twin share room</li>
                        <li>Half board meals</li>
                        <li>Guided nature tour</li>
                        <li>Welcome drink</li>
                        <button className="view-page-content-card-button">Book Now</button>
                    </ul>

                </li>

                <li className="view-page-content-card">
                    <img src="https://i.pinimg.com/236x/f1/26/c9/f126c91705a67ac95e91cd89443a6ad9.jpg" alt="summer deal" className="view-page-image2" />
                    <ul className="view-page-content">
                    <h1 className="view-page-content-card-title">Nature Esape <br /><span>Starts at $999</span></h1>
                        <li>Round trip airface</li>
                        <li>4D/3N twin share room</li>
                        <li>Half board meals</li>
                        <li>Spa & massage session</li>
                        <li>Couples meditation</li>
                        <button className="view-page-content-card-button">Book Now</button>
                    </ul>
                </li>

                <li className="view-page-content-card">
                    <img src="https://i.pinimg.com/236x/f1/26/c9/f126c91705a67ac95e91cd89443a6ad9.jpg" alt="summer deal" className="view-page-image2" />
                    <ul className="view-page-content">
                    <h1 className="view-page-content-card-title">Nature Esape <br /><span>Starts at $999</span></h1>
                        <li>Round trip airface</li>
                        <li>4D/3N twin share room</li>
                        <li>Half board meals</li>
                        <li>Guided nature tour</li>
                        <li>Choice group activity</li>
                        <button className="view-page-content-card-button">Book Now</button>
                    </ul>
                </li>
            </ul>
        </div>

        {/*we'll handle your trip for you */}

        <div>
            <h1 className="view-page-title3">we'll handle your trip for you</h1>
            <ul className="handle-trip-list">
                <li className="handle-trip-item">
                    <img src="https://i.pinimg.com/236x/05/63/45/056345307771dee34e8fc6e6bf62fe62.jpg" alt="img" className="handle-trip-item-image" />
                    <div>
                    <h2 className="handle-trip-item-title">Flight Booking</h2>
                    <p className="handle-trip-item-description">Share your service and offering here. Give your prospective clients an overview of why they should use it.</p>
                    </div>
                </li>

                <li className="handle-trip-item">
                    <img src="https://i.pinimg.com/236x/f9/4c/58/f94c5898fcc5227a6b969b303bf8a1b6.jpg" alt="img" className="handle-trip-item-image" />
                    <div>
                    <h2 className="handle-trip-item-title">Tours & Activities</h2>
                    <p className="handle-trip-item-description">Share your service and offering here. Give your prospective clients an overview of why they should use it.</p>
                    </div>
                </li>

                <li className="handle-trip-item">
                    <img src="https://i.pinimg.com/236x/a2/7c/ff/a27cff5de80f9f502e2001ba76cf223d.jpg" alt="img" className="handle-trip-item-image" />
                    <div>
                    <h2 className="handle-trip-item-title">Airport Transfers</h2>
                    <p className="handle-trip-item-description">Share your service and offering here. Give your prospective clients an overview of why they should use it.</p>
                    </div>
                </li>

                <li className="handle-trip-item">
                    <img src="https://i.pinimg.com/236x/dc/87/a8/dc87a8f8ebb246fcc5a7e811e7629de9.jpg" alt="img" className="handle-trip-item-image" />
                    <div>
                    <h2 className="handle-trip-item-title">Hotel Booking</h2>
                    <p className="handle-trip-item-description">Share your service and offering here. Give your prospective clients an overview of why they should use it.</p>
                    </div>
                </li>
            </ul>
        </div>

        {/*Our fovourite travellers */}

        <div>
            <h1 className="view-page-title4">Our fovourite travellers</h1>

            <ul className="traveller-list">
                <li className="traveller-item">
                    <p className="traveller-description">Boost your product and service's credibility by adding testimonils from your clients.
                        People love recommandations so feedback from others who've tried it invaluable.
                    </p>
                    <div>
                        <h1 className="traveller-initial">N</h1>
                        <p className="traveller-name">Noah Chumancher</p>
                    </div>
                </li>

                <li  className="traveller-item">
                    <p className="traveller-description">Boost your product and service's credibility by adding testimonils from your clients.
                        People love recommandations so feedback from others who've tried it invaluable.
                    </p>
                    <div>
                        <h1 className="traveller-initial">J</h1>
                        <p className="traveller-name">Julia Patel</p>
                    </div>
                </li>

                <li className="traveller-item">
                    <p className="traveller-description">Boost your product and service's credibility by adding testimonils from your clients.
                        People love recommandations so feedback from others who've tried it invaluable.
                    </p>
                    <div>
                        <h1 className="traveller-initial">N</h1>
                        <p className="traveller-name">Natalia Lowe</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    )
}

export default HomeViewPage