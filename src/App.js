import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourthPage from './components/FourthPage'

function App() {
  return (
    <div id='overall'>
      <LandingPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
    </div>
  );
}

export default App;