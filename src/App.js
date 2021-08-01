import React from 'react'
// import './App.css'
import './Components/Common/common.css'
import './Components/Home/home.css'
import './Components/Feature/Feature.css'
import './Components/Pricing/Pricing.css'

//importing others react js child component


import Header from './Components/Common/Header.jsx'

import Home from './Components/Home/Home.jsx'

import Features from './Components/Feature/Feature.jsx'

import Pricing from './Components/Pricing/Pricing.jsx'

import {BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";


import Footer from'./Components/Common/Footer.jsx'

export default function App() {
  return (
    <div className ='App'>
       

       <Router>


      <Header/>
      {/* <Home/>
      <Features/>
      <Pricing/> */}

  


         <Switch>
          <Route path="/home">
            
          <Link to='/home' />
             <Home/>

          </Route>
          <Route path="/features">
             <Link to='/features'  />
             <Features/>

          </Route>
          <Route path="/pricing">
            <Link to='/pricing'  />
            <Pricing/>
          </Route>
        </Switch>
       


        <Footer/>


        </Router>

    </div>
  )
}
