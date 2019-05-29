import React, { Component } from 'react';
import './Details.css';



const Details = (props) =>
{
    return (
        <div className="Details">
        
        <div><img src={props.image}/></div>
        <div><h5>{props.head}</h5></div>
        <div><p>{props.description}</p></div>
        <button>MORE</button>
        </div>
    );
}

export default Details;