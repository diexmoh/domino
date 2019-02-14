import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    const fichas = {
      "1": [0, 0],
      "2": [1, 0], "3": [1, 1],
      "4": [2, 0], "5": [2, 1], "6": [2, 2],
      "7": [3, 0], "8": [3, 1], "9": [3, 2], "10": [3, 3],
      "11": [4, 0], "12": [4, 1], "13": [4, 2], "14": [4, 3], "15": [4, 4],
      "16": [5, 0], "17": [5, 1], "18": [5, 2], "19": [5, 3], "20": [5, 4], "21": [5, 5],
      "22": [6, 0], "23": [6, 1], "24": [6, 2], "25": [6, 3], "26": [6, 4], "27": [6, 5], "28": [6, 6]
    };

    //console.log(fichas[Object.keys(fichas)[Math.floor(Math.random()*Object.keys(fichas).length)]]);

    var player01 = {};

    for(var count = 0; count <= Object.keys(fichas).length; count ++){

      var temporal = fichas[Object.keys(fichas)[Math.floor(Math.random()*Object.keys(fichas).length)]];

      if(Object.keys(player01).length < 7){

        if (Object.is(player01) !== temporal){

          player01[count] = temporal;
  
        }

      } else {
        break;
      }
    }

    console.log(player01);

    return (
      <div className="App">
        <h1>Domino Dancing</h1>
        <p>{Object.values(player01)}</p>
      </div>
    );
  }
}

export default App;
