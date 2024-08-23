import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeViewPage from "./components/HomeViewPage"
import Home from "./components/Home"
import ToursList from "./components/ToursList"
import Contact from "./components/Contact"

const App = () => {
  return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-page" element={<HomeViewPage />} />
                <Route path="/tours" element={<ToursList />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
  )
}
export default App