import React, { Component } from 'react';
import './Content.css';


const Content = (props) => {
    return (

        <div className="Content">
            <div className="logo">
                <img src={props.img} />
            </div>
            <div className="info">
                <h5>{props.HEADER}</h5>
                <p>{props.des}</p>
            </div>
        </div>
    );
}

export default Content;