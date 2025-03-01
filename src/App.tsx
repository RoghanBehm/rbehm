import Home from './home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
