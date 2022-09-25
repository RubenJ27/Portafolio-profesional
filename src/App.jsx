import './index.css'
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import ExperiencePage from "./pages/ExperiencePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { projects } from "./database/projects";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <>
    <ScrollToTop smooth color='#ffffff' component={<FontAwesomeIcon
                        icon={faArrowUp}
                        className="text-white text-3xl"
                      />}
    className='flex right-[20px] bottom-[15px] justify-center items-center w-[4rem] h-[4rem] rounded-full  bg-quinario-color-complement' />
    <Navbar />
    <HomePage />
    <ProfilePage />
    <ServicesPage />
    <ExperiencePage />
    <PortfolioPage />
    <ContactPage />
    <Footer />
    </>
  )
}

export default App
