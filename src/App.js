import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSkillsBlock from './components/AboutSkillsBlock';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutSkillsBlock />
      </main>
    </>
  );
}
