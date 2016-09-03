import React, { Component } from "react";
import ReactDOM from "react-dom";

class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = "Not Sure If In Love or Just ... ?";
      var cite = " ";
    } else if (percent < 80 && percent > 40) {
      var message = "You Know Nothing, Jon Snow.";
      var cite = " ";
    } else {
      var message = "You Get Nothing! You Lose! Good Day, Sir! ";
      var cite = "Quote from Willy Wonka & The Chocolate Factory.";
    }
    return (
      <div className="well">
        <h4>You Got { this.props.score } out of {this.props.questions.length } Correct! </h4>
        <h1> { percent } % - { message } </h1> { cite }
      <hr />
        <a href=".">Take The Quiz Again!</a>
      </div>
    )
  }
}

export default Results
