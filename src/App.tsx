import Home from './home';
import Header from './components/Header';
import Projects from './github-projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/rbehm" element={<Home />} />
          <Route path="/github" element={< Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
