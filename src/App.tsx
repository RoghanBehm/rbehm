
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App
