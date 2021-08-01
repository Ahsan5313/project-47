import React, {Component} from 'react'

// importing react form here
import {BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";




class Header extends Component {


     render(){

      return(

        <div>
       
     


        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            
              <Link to='/features' class="nav-link" href="#">Features</Link>
          </li>
          <li class="nav-item">
            <Link to='/pricing' class="nav-link" href="#">Pricing</Link>
          </li>               
        </ul>
        </div>
        </div>
        </nav>

  


        </div>
      )
     }
}
export default Header