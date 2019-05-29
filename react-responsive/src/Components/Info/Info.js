import React, { Component } from 'react';
import './Info.css';



const Info = (props) =>
{
    return (
        <div className="information">
        
        <img src={props.photos}/>
       
       <p>{props.cont}</p>
       
        </div>
    );
}

export default Info;