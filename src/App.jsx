import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";
import ContactPage from "./features/contact/ContactPage";
import ExperiencePage from "./features/experience/ExperiencePage";
import HomePage from "./features/home/HomePage";
import { PortfolioPage } from "./features/portfolio/PortfolioPage";
import ProfilePage from "./features/profile/ProfilePage";
import ServicesPage from "./features/services/ServicesPage";
import "./index.css";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/NavBar";
library.add(fab);

function App() {
  return (
    <>
      <ScrollToTop
        smooth
        color="#ffffff"
        component={<FontAwesomeIcon icon={faArrowUp} className="text-white text-3xl" />}
        className="flex right-[20px] bottom-[15px] justify-center items-center w-[4rem] h-[4rem] rounded-full  bg-quinario-color-complement hover:bg-orange-700"
      />
      <Navbar />
      <HomePage />
      <ProfilePage />
      <ServicesPage />
      <ExperiencePage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
