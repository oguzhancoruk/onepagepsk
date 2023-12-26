import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Index from './main/index';
import Switcher from './components/Switcher';
import IndexTwo from './main/index-two';
import IndexThree from './main/index-three';
import IndexDark from './main/index-dark';
import IndexRtl from './main/index-rtl';
import BlogInside from './components/blogInside';
import TestInside from './components/testInside';
import TestResults from "./components/testResults"


function App() {
 
  return (
    <BrowserRouter >
    <Routes>
      {/* <Route path="/" element={<Index />} /> */}
      <Route path="/" element={<IndexTwo/>} />
     {/*  <Route path="/index-three" element={<IndexThree/>} />
      <Route path="/index-dark" element={<IndexDark/>} />
      <Route path="/index-rtl" element={<IndexRtl/>} /> */}
      <Route path='/blogs/:text' element={<BlogInside/>}/>
      <Route path='/test/:text' element={<TestInside/>}/>
      <Route path='results' element ={<TestResults/>}/>
    </Routes>
  <Switcher/> 
  </BrowserRouter>
  );
}

export default App;
