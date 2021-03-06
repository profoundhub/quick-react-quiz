import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuestionList from "./quiz/QuestionList.jsx";
import Scores from "./quiz/Scores.jsx";
import Results from "./quiz/Results.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions :[
        {
          id: 1,
          text: 'What Is My Name?',
          choices: [
            {
              id: 'a',
              text: 'Adam'
            },
            {
              id: 'b',
              text: 'Bob'
            },
            {
              id: 'c',
              text: 'Cory'
            },
            {
              id: 'd',
              text: 'Daniel'
            },
          ],
          correct:  'd'
        },
        {
          id: 2,
          text: 'What Is Your Favorite Pizza Topping?',
          choices: [
            {
              id: 'a',
              text: 'Pepperoni'
            },
            {
              id: 'b',
              text: 'Mushrooms'
            },
            {
              id: 'c',
              text: 'Anchovies'
            },
            {
              id: 'd',
              text: 'Sausage'
            },
          ],
          correct:  'a'
        },
        {
          id: 3,
          text: 'Is The Cup ... ',
          choices: [
            {
              id: 'a',
              text: 'Half Full?'
            },
            {
              id: 'b',
              text: 'Half Empty?'
            },
            {
              id: 'c',
              text: 'Not Enough Ice.'
            },
            {
              id: 'd',
              text: 'There is no Cup!'
            },
          ],
          correct:  'd'
        },
        {
          id: 4,
          text: 'How Should You Solve Conflict?',
          choices: [
            {
              id: 'a',
              text: 'Hate conflict so avoid by distracting myself'
            },
            {
              id: 'b',
              text: 'Let them win, don\'t sweat the small stuff.'
            },
            {
              id: 'c',
              text: 'Listen and share to have a mutually acceptable, compromising solution.'
            },
            {
              id: 'd',
              text: 'Persist till they finally see my point of view.'
            },
          ],
          correct:  'b'
        },
        {
          id: 5,
          text: 'How Do You Feel About God?',
          choices: [
            {
              id: 'a',
              text: 'He is powerful and good.'
            },
            {
              id: 'b',
              text: 'He doesn\'t exist.'
            },
            {
              id: 'c',
              text: 'He is powerful but not good.'
            },
            {
              id: 'd',
              text: 'He is good but not powerful.'
            },
          ],
          correct:  'a'
        },
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scoreDiv = "";
      var results = <Results { ...this.state } />
    } else {
      var scoreDiv = <Scores { ...this.state } />
    }

    return (
      <div>
          { scoreDiv }
          <QuestionList { ...this.state } setCurrent = { this.setCurrent.bind(this) } setScore = { this.setScore.bind(this) } />
          { results }
      </div>
    )
  }
}

export default App
