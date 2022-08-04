import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Game from "./Game";
import Splash from "./Splash";

export default function App() {
  return <div>
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  </div>;
}
