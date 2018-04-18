import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';

 const Button = ({
      style,
      theme = 'orange',
      size,
      className = '',
      ...rest
    }) => {
      const sizeClassName = size ? `button--${size}` : '';
      return (
        <button
          className={`button ${className} ${sizeClassName} theme-${theme}`}
          style={{ paddingLeft: 20, ...style}}
          {...rest}
        />
      )
    };

class ButtonMaker extends React.Component{
  constructor() {
    super();
  }
 
  render(){
    return ( 
        <div>
          <Button size="small" theme='orange'>
            small
          </Button>
          <p></p>
          <Button size="medium" theme='blue'>
            medium
          </Button>
          <p></p>
          <Button size="large" theme='green'>
            large
          </Button>
        </div>
    )
  }
}

export default ButtonMaker;

