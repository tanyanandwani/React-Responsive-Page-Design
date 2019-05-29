import React, { Component } from 'react';
import './Division2.css';
import Content from '../Content/Content';
import diamond from '../assets/images/diamond.jpeg';
import msg from '../assets/images/msg.png';
import space from '../assets/images/space.svg';
import download from '../assets/images/download.png';



class Division2 extends Component {
    render() {
      return (
        <div className="Division2">
        <h3>Erat Lacinia</h3>
         <Content img={diamond} HEADER="Portitor ullamcorper" des ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
         <Content img={msg}  HEADER="Portitor ullamcorper" des ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
         <Content img={space}  HEADER="Portitor ullamcorper" des ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
         <Content img={download}  HEADER="Portitor ullamcorper" des ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/><br/>
        
      
     </div>
      );
    }
  }

export default Division2;