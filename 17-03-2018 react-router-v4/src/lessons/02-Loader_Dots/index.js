import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

   class LoadingDot extends React.Component {
     state = {
        dots: ""
     };

     componentDidMount() {
      this.interval = setInterval(() => {
        const { dots } = this.state;
        this.setState({
          dots: dots.length >= 3 ? "" : `${dots}.`
        });
      }, 500);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
          <span style={{ textAlign: this.props.align }}>
              {this.state.dots}
          </span>
      );
    }
  }

export default LoadingDot;
