import React,{useState} from 'react';
import Cards from './components/Cards';
import "./App.css"

import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/LoginPage"
import Detail from "./pages/Detail"
import Footer from "./pages/Footer"
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,Switch,
  Route,
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import RegPage from './components/RegPage';
import{DistrictProvider} from './components/DistrictContext'
import Qrnew from './components/Qrnew'
import Analytics from './organization/Analytics'
import Approval from './organization/Approval'
import Register from './organization/Register'
import Services from './organization/Services'
import OtpPage from './components/OtpPage'
function App() {
  return (
 
    <DistrictProvider>
       <div className="App">
        

        <Router>
        
        <NavBar/>
      <Route path='/' exact component={Home} />
        {/* <Route path='/'  component={MidPage} exact/>
        */}

        <Route path='/login'component={LoginPage} />
        
        <Route path='/detail/'  component={Detail} />
        <Route path='/approval'  component={Approval} />
        <Route path='/services'  component={Services} />
        <Route path='/analytics'  component={Analytics} />
        <Route path='/register'  component={Register} />
        <Route path="/qrpage/:id/:orgId" component={Qrnew}/>
        <Switch>
        <Route path="/regPage/:id" component={RegPage}  />
        <Route path='/otppage'  component={OtpPage} />
        </Switch>
        <Footer/>
        </Router>
    </div>
    </DistrictProvider>
   
     
  );
}

export default App;
/* eslint-disable-line */
