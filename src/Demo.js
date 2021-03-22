import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name})=>{
    return <div className="maindiv_style">
    <h1>My Name is {name}</h1>
    <p>Frontend developer</p>
</div>
}


export default Demo