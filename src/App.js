import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Technologies from './Technologies.js';
// import Footer from './Footer.js';

const App = () => {
  return (
    <div className='app-wrapper' >
     <Header/>
     <Navbar/>
     <Profile/>

    </div>
  );
}

export default App;




{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hiEdit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >//cd projects--cd my-app--npm start
          Learn React
        </a>
      </header> */}

      
