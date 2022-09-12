import { Routes, Route } from "react-router-dom";
import { HomePage } from "../landing/pages/HomePage";

export const PortfolioNavigate = () => {
  return (
    <div className="App">
    <h1 >Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>
  )
}

