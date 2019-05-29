import React, { Component } from 'react';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';


class Header extends Component {
  render() {
    return (

      <div className="Header">
     
    
    
    
      <Sidebar/>
      
     
   
      <div className="images">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-snapchat-ghost"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-yahoo"></a>
      </div>
     
    
    
     
     
    
       <h4 className="heading">Tech Blog by John Doe</h4>
      
      </div>
     
     
    
    );
  }
}

export default Header;