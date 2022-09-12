import { useState } from 'react'
import { PortfolioNavigate } from './routes/PortfolioNavigate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PortfolioNavigate />
    </div>
  )
}

export default App
