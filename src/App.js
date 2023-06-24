// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('white');
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('white')
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#164b99'
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "Text Utility" About = "About Us" mode = {mode} toggleMode={toggleMode}/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<TextForm/>}/>
            <Route exact path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
