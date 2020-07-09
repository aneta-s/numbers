import React, { Component } from "react";

import Fact from "./Fact";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      number: "",
      fact: "",
    };
  }
  getTrivia = () => {
    let triviaNumber = document.getElementById("triviaInput").value;
    console.log(triviaNumber);
    this.setState({ topic: "trivia fact" });
    this.setState({ number: document.getElementById("triviaInput").value });
    fetch(`http://numbersapi.com/${triviaNumber}/trivia?json`)
      .then((resp) => resp.json())
      .then((data) => {
        return (
          this.setState({ fact: data.text }),
          console.log(this.state.topic, this.state.number, this.state.fact)
        );
      });
  };

  getMath = () => {
    let mathNumber = document.getElementById("mathInput").value;
    console.log(mathNumber);
    this.setState({ topic: "math fact" });
    this.setState({ number: document.getElementById("mathInput").value });
    fetch(`http://numbersapi.com/${mathNumber}/math?json`)
      .then((resp) => resp.json())
      .then((data) => {
        return (
          this.setState({ fact: data.text }),
          console.log(this.state.topic, this.state.number, this.state.fact)
        );
      });
  };

  getDate = () => {
    let dateValue = document.getElementById("dateInput").value;
    console.log(dateValue);
    this.setState({ topic: "date fact" });
    this.setState({ number: document.getElementById("dateInput").value });
    fetch(`http://numbersapi.com/${dateValue}/date?json`)
      .then(resp => resp.json())
      .then(data => {return (
          this.setState({ fact: data.text }),
          console.log(this.state.topic, this.state.number, this.state.fact)
        );
      });
    };
    getYear =()=>{
      let yearValue = document.getElementById('yearInput').value;
      console.log(yearValue);
    this.setState({topic: 'year fact'});
    this.setState({number: document.getElementById('yearInput')});
    fetch(`http://numbersapi.com/${yearValue}/year?json`)
    .then(resp=>resp.json())
    .then(data=>{ return (
      this.setState({fact: data.text}),
      console.log(this.state.topic, this.state.number, this.state.fact)
    );
  }
    );
    };

  render() {
    return (
<article>
<header className='bg-gold sans-serif'>
      <div className='mw9 center pa4 pt5-ns ph7-l'>
        <h3 className='f2 f1-m f-headline-l measure-narrow lh-title mv0'>
        <span className='bg-black-90 lh-copy white pa1 tracked-tight'>Bring tales, facts and stories to life based on your numbers.</span></h3>
        <h4 className='f3 fw1 georgia i'>Just type trivia, math number, date or year, and see metrics.</h4>
        <h5 className='f6 ttu tracked black-80'>By Aneta Stojanowska</h5>
        </div>
 </header>
 <div className='pa4 ph7-l georgia mw9-l center'>
        <Fact
          topicToDisplay={this.state.topic}
          numberToDisplay={this.state.number}
          factToDisplay={this.state.fact}
        />
        <h3  className="f3 br2 b--black-20">
          Trivia
          <input
           
            type="number" className='w5 mh4'
            placeholder="enter number"
            id="triviaInput"
          />
          <p onClick={this.getTrivia}>Go</p>
        </h3>
        <h3 >
          Math
          <input className="f3 br2 b--black-20" type="number" placeholder="enter number" id="mathInput" />
          <p className='f5 f4-ns lh-copy measure' onClick={this.getMath}>Go</p>
        </h3>
        <h3>
          Date
          <input   className="f3 br2 b--black-20" type="text" placeholder="Format MM/DD" id="dateInput" />
          <p onClick={this.getDate}>Go</p>
        </h3>
        <h3>
          Year
          <input className="f3 br2 b--black-20" type='year' placeholder='enter year' id='yearInput' />
          <p onClick={this.getYear}>Go</p>
        </h3>
        <p className='f5 f4-ns lh-copy measure'>
        Metrics are measures of quantitative assessment commonly used for comparing, and tracking performance or production.
        </p>
        </div>
      </article>

    );
  }
}

export default App;
