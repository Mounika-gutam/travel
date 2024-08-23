import React, { Component } from 'react';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ToursList.css'; // Import the CSS file
import NavBar from "../NavBar"

// Sample data
const tours = [
  {
    id: 1,
    title: "The Great Wall of China Tour",
    description: "Explore one of the most iconic structures in the world with a guided tour of the Great Wall of China.",
    location: "Beijing, China",
    price: 150,
    duration: "5 hours",
    imageUrl: "https://i.pinimg.com/236x/1d/52/86/1d5286d64a9e1cd20426eca6bc0fecdb.jpg"
  },
  {
    id: 2,
    title: "Safari Adventure in Serengeti",
    description: "Experience the thrill of a lifetime with a safari adventure in the Serengeti National Park.",
    location: "Tanzania, Africa",
    price: 1200,
    duration: "7 days",
    imageUrl: "https://i.pinimg.com/236x/66/94/25/6694258fb157b67e728cc8a8f8173816.jpg"
  },
  {
    id: 3,
    title: "Eiffel Tower Day Tour",
    description: "Visit the Eiffel Tower and enjoy a day exploring Paris' most famous landmarks.",
    location: "Paris, France",
    price: 100,
    duration: "1 day",
    imageUrl: "https://i.pinimg.com/236x/dd/b1/26/ddb126b4ff0471a09f3d188d8081dc95.jpg"
  },
  {
    id: 4,
    title: "Machu Picchu Hiking Tour",
    description: "Hike through the Andes and discover the ancient Inca city of Machu Picchu.",
    location: "Cusco, Peru",
    price: 850,
    duration: "4 days",
    imageUrl: "https://i.pinimg.com/236x/5a/0e/c4/5a0ec46ac6c4334603014138d2697acf.jpg"
  },
  {
    id: 5,
    title: "New York City Highlights",
    description: "See the best of New York City with this comprehensive tour of its most famous attractions.",
    location: "New York, USA",
    price: 200,
    duration: "2 days",
    imageUrl: "https://i.pinimg.com/236x/42/bb/31/42bb312fa0f1988810b97bbd6e303d01.jpg"
  },
  {
    id: 6,
    title: "Grand Canyon Helicopter Tour",
    description: "Take an exhilarating helicopter tour over the majestic Grand Canyon.",
    location: "Arizona, USA",
    price: 350,
    duration: "3 hours",
    imageUrl: "https://i.pinimg.com/236x/87/d7/8f/87d78fb2da4eaf8e3b152daa96b1841f.jpg"
  },
  {
    id: 7,
    title: "Santorini Sunset Cruise",
    description: "Sail around the stunning island of Santorini and enjoy a breathtaking sunset.",
    location: "Santorini, Greece",
    price: 220,
    duration: "4 hours",
    imageUrl: "https://i.pinimg.com/474x/6f/40/68/6f4068366ceaf6ea808ef4cc13603d3b.jpg"
  },
  {
    id: 8,
    title: "Safari in Kruger National Park",
    description: "Embark on a thrilling safari adventure in South Africa's famous Kruger National Park.",
    location: "South Africa",
    price: 900,
    duration: "5 days",
    imageUrl: "https://i.pinimg.com/236x/ae/5d/7c/ae5d7cd99a3be2ce1a587c54189bc6ba.jpg"
  },
  {
    id: 9,
    title: "Tokyo Food Tour",
    description: "Discover the flavors of Tokyo on a guided food tour through the city's best eateries.",
    location: "Tokyo, Japan",
    price: 180,
    duration: "6 hours",
    imageUrl: "https://i.pinimg.com/236x/78/2f/bd/782fbdc674817468d9529fdf4a3efa8f.jpg"
  },
  {
    id: 10,
    title: "Northern Lights Tour",
    description: "Experience the magic of the Northern Lights on this unforgettable tour.",
    location: "Reykjavik, Iceland",
    price: 300,
    duration: "8 hours",
    imageUrl: "https://i.pinimg.com/236x/a8/ba/b0/a8bab0edc2a308ecf758039e9b442ff3.jpg"
  },
  {
    id: 11,
    title: "Sydney Opera House Tour",
    description: "Take a guided tour of the iconic Sydney Opera House and learn about its fascinating history.",
    location: "Sydney, Australia",
    price: 75,
    duration: "2 hours",
    imageUrl: "https://i.pinimg.com/236x/4d/58/10/4d58101d11bb216dfbaddfeebe543e9f.jpg"
  },
  {
    id: 12,
    title: "Petra and Wadi Rum Tour",
    description: "Explore the ancient city of Petra and the stunning desert landscapes of Wadi Rum.",
    location: "Jordan",
    price: 600,
    duration: "3 days",
    imageUrl: "https://i.pinimg.com/236x/8c/08/77/8c0877fd5510a6385334888fb0dcd036.jpg"
  },
  {
    id: 13,
    title: "Amazon Rainforest Expedition",
    description: "Immerse yourself in the natural beauty of the Amazon Rainforest on this thrilling expedition.",
    location: "Amazon Basin, Brazil",
    price: 1100,
    duration: "7 days",
    imageUrl: "https://i.pinimg.com/236x/4f/f5/92/4ff5925ea080053bb3a4939d76adb252.jpg"
  },
  {
    id: 14,
    title: "Venice Gondola Ride",
    description: "Enjoy a romantic gondola ride through the enchanting canals of Venice.",
    location: "Venice, Italy",
    price: 150,
    duration: "1 hour",
    imageUrl: "https://i.pinimg.com/236x/49/56/92/495692f5897eb9f4780dce2db46a2a2d.jpg"
  },
];

class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      minPrice: '',
      maxPrice: ''
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleMinPriceChange = (e) => {
    this.setState({ minPrice: e.target.value });
  };

  handleMaxPriceChange = (e) => {
    this.setState({ maxPrice: e.target.value });
  };

  render() {
    const { searchTerm, minPrice, maxPrice } = this.state;

    // Filter tours based on search term and price range
    const filteredTours = tours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMinPrice = minPrice ? tour.price >= parseFloat(minPrice) : true;
      const matchesMaxPrice = maxPrice ? tour.price <= parseFloat(maxPrice) : true;
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="tour-list">
        <NavBar />

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://image.slidesdocs.com/responsive-images/background/autumn-tourism-landscape-mountain-early-morning-map-peak-village-powerpoint-background_84b114fc95__960_540.jpg" alt="travel" className='slider-image' />
            </div>
            <div>
            <img src="https://image.slidesdocs.com/responsive-images/background/red-summer-mountain-tourism-mountains-and-rivers-peak-village-powerpoint-background_807b45efef__960_540.jpg" alt="travel" className='slider-image' />
            </div>
            <div>
            <img src="https://image.slidesdocs.com/responsive-images/background/summer-flow-travel-vacation-landscape-mobile-early-morning-map-mountain-peak-mountains-powerpoint-background_f046822459__960_540.jpg" alt="travel" className='slider-image' />
            </div>
          </Slider>
        </div>
        <h1>Tour List</h1>

        {/* Search and filter inputs */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={this.handleSearchChange}
            className="search-input"
          />
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={this.handleMinPriceChange}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={this.handleMaxPriceChange}
            className="price-input"
          />
        </div>

        {/* Display filtered tours */}
        <div className="tours">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <h2>{tour.title}</h2>
              <img src={tour.imageUrl} alt={tour.title} className="tour-image" />
              <p>{tour.description}</p>
              <p><strong>Location:</strong> {tour.location}</p>
              <p style={{color: "#f40b0b"}}><strong>Price:</strong> ${tour.price}</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
              <button className='button'>Book Now</button>
            </div>
          ))}
        </div>

          {/* Newsletter and Subscription Section */}
        <div className='newsletter-section'>
          <div>
            <h3 className='newsletter-heading'>Subscribe Our NewsLetter</h3>
            <p className='newsletter-description'>Subscribe newsletter to get offers and about new places to discover.</p>
          </div>

          <div>
            <input type="email" placeholder='Enter Email...' className='newsletter-input' />
            <button className='newsletter-button'>Subscribe</button>
          </div>
        </div>
          {/* Newsletter and Subscription Section */}


          {/* Recent Trips Section */}

          <div>
            <h1>Recent Trips</h1>

            <div className='trip-list'>
              <img src="https://preview.colorlib.com/theme/travelo/img/trip/1.png" alt="trip1" className='trip-image' />
              <img src="https://preview.colorlib.com/theme/travelo/img/trip/2.png" alt="trip2" className='trip-image' />
              <img src="https://preview.colorlib.com/theme/travelo/img/trip/3.png" alt="trip3" className='trip-image' />
            </div>
          </div>

          {/* Recent Trips Section */}

      </div>
    );
  }
}

export default TourList;
