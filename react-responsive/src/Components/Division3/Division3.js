import React, { Component } from 'react';
import './Division3.css';
import Details from '../Details/Details';
import  pic01 from '../assets/images/pic01.jpg'
import  pic02 from '../assets/images/pic02.jpg'
import  pic03 from '../assets/images/pic03.jpg'
import  pic04 from '../assets/images/pic04.jpg'
import  pic05 from '../assets/images/pic05.jpg'
import  pic06 from '../assets/images/pic06.jpg'

class Division3 extends Component {
  render() {
    return (
      <div className="Division3">
      <h3>Ipsum Dolor</h3>
     <Details image={pic01} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/>
     <Details image={pic02} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/>
     <Details image={pic03} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/>
     <Details image={pic04} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/>
     <Details image={pic05} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/>
     <Details image={pic06} head="Tempus Collamtomper" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"/><br/><br/>
      
      </div>
    );
  }
}

export default Division3;