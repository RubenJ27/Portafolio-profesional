import './index.css'
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import ExperiencePage from "./pages/ExperiencePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { projects } from "./database/projects";

function App() {
/*   const [count, setCount] = useState(0) */
  return (
    <>
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
