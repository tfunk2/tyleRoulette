import React, { useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout.js'

function App() {
  const [chipCount, useChipCount] = useState(1000);
  const [currentBetValue, setCurrentBetValue] = useState(null);
  const [totalAmountWon, setTotalAmountWon] = useState(0);
  const [winningNumber, setWinningNumber] = useState(null);
  const [previousTwenty, setPreviousTwenty] = useState([]);
  const [straightUps, setStraightUps] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [splits, setSplits] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [streets, setStreets] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [corners, setCorners] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [basket, setBasket] = useState(0);
  const [columns, setColumns] = useState(0, 0, 0);
  const [dozens, setDozens] = useState(0, 0, 0);
  const [redBlack, setRedBlack] = useState(null);
  const [oddEven, setOddEven] = useState(null);
  const [highLow, setHighLow] = useState(null);

  const wheelNumbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "12", "13", "14", "15", "16",
    "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32",
    "33", "34", "35", "36", "00"
  ];

  const spinTheWheel = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(38));
    let randomWinner = wheelNumbers[randomIndex];
    setWinningNumber(randomWinner);

    let currentTwenty = [...previousTwenty];

    if(currentTwenty.length < 20) {
      setPreviousTwenty([...previousTwenty, randomWinner]);
    } else {
      currentTwenty.unshift(randomWinner);
      currentTwenty.pop();
      setPreviousTwenty(currentTwenty);
    };
  };

  const wheelHistory = previousTwenty.map(winningNum => {
    return <p className="history-num">{winningNum}</p>
  })

  return (
    <div className="app">
      <header className="app-header" onClick={spinTheWheel}>
        <h3 className="header-h3">TyleRoulette</h3>
        <h3 className="header-h3">WinningNumber{winningNumber}</h3>
        <h3 className="header-h3">{chipCount}</h3>
      </header>
      <div className="wheel-history">
        {wheelHistory}
      </div>
      <Layout />
    </div>
  );
};

export default App;
