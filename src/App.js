


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Match from "./pages/Match";

const App = () => {
  return (
    <Router>
   
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Match" element={<Match/>}/> 
        </Routes>
     
    </Router>
  );
}

export default App;