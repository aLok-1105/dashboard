import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import './style/Style.css';
import Footer from './components/Footer';

import BG_VID from '../src/videos/bg.mp4';

export const UserContext= createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
    <>
    <UserContext.Provider value={{ state, dispatch}}>
    <video className='bg-video' autoPlay loop muted>
        <source src={BG_VID} type='video/mp4' />
    </video>
    <Navbar/>
      <Routes>
      <Route path='/' element={
        <Home />
        
      }>
      </Route>
      
      <Route path='/about' element={
        <About />
      }>
      </Route>

      <Route path='/contact' element={
        <Contact/>
      }>
      </Route>

      <Route path='/register' element={
        <Signup/>
      }>
      </Route>

      <Route path='/login' element={
        <Login/>
      }>
      </Route>
      <Route path='/logout' element={
        <Logout/>
      }>
      </Route>

      <Route path='*' element={
        <>This is 404 page</>
      }>
        
      </Route>
      
    </Routes>
    <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;
