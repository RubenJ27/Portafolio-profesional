import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import './index.css'
import ProfilePage from "./pages/ProfilePage";
import Services from "./pages/Services";

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
    <Navbar />
    <HomePage />
    <ProfilePage />
    <Services />
    <Footer />
    </>
  )
}

export default App
