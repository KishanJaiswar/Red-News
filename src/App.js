import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  //a = "kishan"; creating variable
  const pageSize = 6;
  const country = "in"
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} height={3} transitionTime={1000} loaderSpeed={500} />
        <Routes>
          <Route exact path='/general' element={<News country={country} category='general' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='/business' element={<News country={country} category='business' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='/entertainment' element={<News country={country} category='entertainment' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='/health' element={<News country={country} category='health' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='/science' element={<News country={country} category='science' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='/sports' element={<News country={country} category='sports' setProgress={setProgress} pageSize={pageSize} />}></Route>
          <Route exact path='technology' element={<News country={country} category='technology' setProgress={setProgress} pageSize={pageSize} />}></Route>
        </Routes>
      </Router>
    </div >
  )
}
export default App
