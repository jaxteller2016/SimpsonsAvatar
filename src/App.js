import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar.component'
const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Avatar
              {...bart}
          />
          <Avatar
              // image = "https://cdn.pixabay.com/photo/2016/10/28/17/53/advertising-1778716_960_720.jpg"

              firstName = "Yordake"
              lastName = " Simsy"
              star=''
          />
        </div>
      </div>
  );
}

export default App; 