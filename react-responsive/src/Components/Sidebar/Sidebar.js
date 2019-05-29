import React, { Component } from 'react';
import './Sidebar.css';
import Info from '../Info/Info';
import  pic07 from '../assets/images/pic07.jpg'
import  pic08 from '../assets/images/pic08.jpg'
import  pic09 from '../assets/images/pic09.jpg'



import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (


      <Menu className="sidebar">
        <div className="topnav"><input type="text" placeholder="Search.."></input></div>
        <div className="menubar">
        
            <ul className="nav sidebar-nav">
                <li className="sidebar-brand">
                    <h4>MENU</h4>
                </li>
                <li>
                    <a href="#">HOMEPAGE</a>
                </li>
                <li>
                    <a href="#">GENERIC</a>
                </li>
                <li>
                    <a href="#">ELEMENTS</a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">SUB MENU <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">Dropdown heading</li>
                    <li><a href="#">Lorem Dolor</a></li>
                    <li><a href="#">Ipsum Adipisicing</a></li>
                    <li><a href="#">Tampus Magna</a></li>
                    <li><a href="#">Feugiat Veroeros</a></li>
                   
                  </ul>
                </li>
                <li>
                    <a href="#">MAXIMUS ERAT</a>
                </li>
                <li>
                    <a href="#">SAPIEN MAURIS</a>
                </li>
                <li>
                    <a href="#">AMIT LACINIA </a>
                </li>
            </ul>
       
        
        </div><hr/>
        <div className="sidebarDiv">
          <h4>Ante Interdum</h4>
          
          <Info photos={pic07} cont="It is a long established fact that a reader will be distracted by the readable"/><hr/>
          <Info photos={pic08} cont="It is a long established fact that a reader will be distracted by the readable"/><hr/>
          <Info photos={pic09} cont="It is a long established fact that a reader will be distracted by the readable"/><hr/>
          <button>MORE</button><hr/>
        </div><br/>
        <div className="contactus">
        <h4>Get In Touch</h4>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
        <div className="icon">
        <i className="fa fa-envelope" aria-hidden="true">&nbsp;&nbsp;information@untitled.tid</i><hr/>
        <i className="fa fa-phone" aria-hidden="true">&nbsp;&nbsp;(000)000-0000</i><hr/>
        <i className="fa fa-home" aria-hidden="true">&nbsp;&nbsp;1234 SomeWhere Road #8254 Nashville,TN 00000-0000</i><hr/>
        </div>
       <p>@Untitled.All rights reserved.</p>
         </div>

      </Menu>


    );
  }
}

export default Sidebar;