import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Banner from './components/Banner';
import Shop from './components/Shop';
import Contact from './components/Contact';
import "./total.css";
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
   <>
     <Header/>
     <Home/>
     <About/>
    <Banner/>
    <Shop/>
    <Contact/>

  
   </>
  );
}

export default App;
