import React,{Component} from 'react';
import Background from './asset/black.jpg';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url(${Background})'
  };
  class Section extends Component {
    render() {
      return (
        <section style={ sectionStyle }>
        </section>
      );
    }
  }
  