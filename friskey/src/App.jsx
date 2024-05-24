import React from 'react';
import './App.css';
import Navbar from '../../src/components/Navbar';
import Hero from '../../src/components/hero';
import Cat from '../../src/components/Cat';
import Second from '../../src/components/sec-page'
import Feedback from '../../src/components/feedback';
import Fact from '../../src/components/facts';
import Last_pg from '../../src/components/last_page';

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
