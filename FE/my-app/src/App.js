import logo from './logo.svg';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/homepage/HomePage';
import Product from './pages/productpage/Product';
import Profile from './pages/profilepage/Profile'
import './App.css';

import { LoginContext } from './components/Context';

function App() {
  const [login, setLogin] = useState({isLoggedIn: false, userInfo: {}});

  console.log(login)
  return (
    <LoginContext.Provider value = {{login, setLogin}}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header />
        <Profile />
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
