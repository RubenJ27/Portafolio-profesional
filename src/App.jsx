import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import './index.css'
import ProfilePage from "./pages/ProfilePage";
import Services from "./pages/Services";
import ExperiencePage from "./pages/ExperiencePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab,)
/* import { projects } from "./database/projects"; */

function App() {
/*   const [count, setCount] = useState(0) */
  return (
    <>
    <Navbar />
    <HomePage />
    <ProfilePage />
    <Services />
    <ExperiencePage />
    {/* <>
    {projects.map((project) => (
      <PortfolioPage
      key={project.id}
      url={project.url}
      title={project.title} 
      description={project.description}
      />
    ))}
    </> */}
    <PortfolioPage />
    <Footer />
    </>
  )
}

export default App
