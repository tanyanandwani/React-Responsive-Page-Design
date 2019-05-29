import React, { Component } from 'react';
import './Division1.css';
import pic10 from '../assets/images/pic10.jpg';


class Division1 extends Component {
  render() {
    return (
      <div className="Division1">
      
      <div className="Rightside">

<img src={pic10}/>
</div>

      <div  className="Leftside">
      <h1>Hi, I'm John Doe.</h1>
      <h5>A FREELANCER WITH AWESOME WEBDEVELOPMENT SKILLS!</h5>
      <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button>Learn More</button>
      </div>
      <br/>
      
   
     
      </div>
    
     
      
    );
  }
}

export default Division1;