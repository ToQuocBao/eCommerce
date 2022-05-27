import logo from './logo.svg';
import { useState } from 'react';
import { Routes, Route, Link, IndexRouteProps} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Profile from './pages/Profile';
import RegisterPage from './pages/RegistPage';
import PostingPage from './pages/PostingPage';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import './App.css';

import { LoginContext } from './components/Context';

function App() {
  const [login, setLogin] = useState({isLogged: false, userInfo: {}});

  console.log(login)
  return (
    <LoginContext.Provider value = {{login, setLogin}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/Product/:id' element = {<Product/>}/>
          <Route path='/Cart' element = {<Cart/>}/>
          <Route path='/Profile' element = {<Profile/>}/>
          <Route path='/Register' element = {<RegisterPage/>}/>
          <Route path='/Posting' element = {<PostingPage/>}/>
          <Route path='/Login' element = {<LoginPage/>}/>
          <Route path='/Contact' element = {<Contact/>}/>
          <Route path='/AboutUs' element = {<AboutUs/>}/>
        </Routes>

        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
