import React , { Component}  from 'react';
import './App.css';

function App() {
  //here is an example how to use localStorage, see https://www.w3schools.com/jsref/prop_win_localstorage.asp

  //function reads data from localStorage, before the read you need to write something
  function read(){
    const myValueInLocalStorage = localStorage.getItem("myValue");
    document.getElementById("example").value = myValueInLocalStorage;  
  }

  //function writes data to localStorage
  function write(){
    localStorage.setItem("myValue", document.getElementById("example").value);
  }

  return (
    <div className="App">
      {/* this is just example implement according to the given task */}
      <input type="text" id="example"></input>
      <button onClick={read}>Read</button>
      <button onClick={write}>Write</button>
    </div>
  );
}

export default App;
