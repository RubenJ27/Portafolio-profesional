import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import './index.css'
import ProfilePage from "./pages/ProfilePage";

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
    <Navbar />
    <HomePage />
    <ProfilePage />
    <Footer />
    </>
  )
}

export default App
