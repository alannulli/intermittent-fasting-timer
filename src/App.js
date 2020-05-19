import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      fasts: [
        {
          startDate: 1589836641396,
          endDate: 1589836650000,
          actualTime: 0,
          plannedTime: 0,
          passed: true
        }
      ],
      timerTime: 0,
      timerStart: 0,

    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>
        <Timer/><br/><br/>
        <History
          fasts = {this.state.fasts}
        />
      </div>
    );
  }
  
}

export default App;