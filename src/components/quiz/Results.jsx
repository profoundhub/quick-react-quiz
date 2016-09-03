import React, { Component } from "react";
import ReactDOM from "react-dom";

class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
        var message = "You are Awesome!";
    } else if (percent < 80 && percent > 60) {
      var message = "Not Sure If In Love or Just ... ?";        
    } else {
      var message = "You Know Nothing, Jon Snow";
    }
    return (
      <div className="well">
        <h4>You Got { this.props.score } out of {this.props.questions.length } Correct! </h4>
        <h1> { percent } % - { message } </h1>

      <hr />
        <a href=".">Take the Quiz Again!</a>
      </div>
    )
  }
}

export default Results
