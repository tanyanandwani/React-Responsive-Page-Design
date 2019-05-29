import React, { Component } from 'react';
import './Body.css';
import Header from '../Header/Header';
import Division1 from '../Division1/Division1';
import Division2 from '../Division2/Division2';
import Division3 from '../Division3/Division3';


class Body extends Component {
  render() {
    return (
      <div className="Body">

     <div>
     
     <Header/>
     </div>
     <div>
     <Division1/>
     </div>
     <div >
     <Division2/>
     </div>
     <div>
     <Division3/>
     </div>

       
      </div>
    );
  }
}

export default Body;