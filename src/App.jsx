import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cat from './components/Cat';
import Second from './components/sec-page'
import Feedback from './components/feedback';
import Fact from './components/facts';
import Last_pg from './components/last_page';

const App = () => {

  return (
    <>
    <Navbar/>
    <Cat/>
    <Hero/>
    <Second/>
    <Feedback/>
    <Fact/>
    <Last_pg/>
    </>
  );
}

export default App;
