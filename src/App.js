import React, { useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout.js'
import BettingOptions from './components/BettingOptions.js'

function App() {
  const [chipCount, setChipCount] = useState(1000);
  const [currentBetValue, setCurrentBetValue] = useState(0);
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
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [corners, setCorners] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [doubleStreets, setDoubleStreets] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [basket, setBasket] = useState(0);
  const [columns, setColumns] = useState([0, 0, 0]);
  const [dozens, setDozens] = useState([0, 0, 0]);
  const [redBlack, setRedBlack] = useState([0, 0]);
  const [oddEven, setOddEven] = useState([0, 0]);
  const [highLow, setHighLow] = useState([0, 0]);
  const [isSpinComplete, setIsSpinComplete] = useState(true);

  const wheelNumbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "12", "13", "14", "15", "16",
    "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32",
    "33", "34", "35", "36", "00"
  ];

  const spinTheWheel = () => {
    if(isSpinComplete || !isSpinComplete) {
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

      setIsSpinComplete(false)
    }
  };

  const resetLayout = () => {
    setCurrentBetValue(null);
    setTotalAmountWon(0);
    setStraightUps([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0
    ]);
    setSplits([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    setStreets([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    setCorners([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    setBasket(0);
    setColumns([0, 0, 0]);
    setDozens([0, 0, 0]);
    setRedBlack([0, 0]);
    setOddEven([0, 0]);
    setHighLow([0, 0]);
    setIsSpinComplete(true)
  }

  const wheelHistory = previousTwenty.map(winningNum => {
    return <p className="history-num">{winningNum}</p>
  })

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-div">
          <h3 className="header-h3">TyleRoulette</h3>
        </div>
        <div className="header-div">
          <h3 className="header-h3">Winning Number: {winningNumber}</h3>
        </div>
        <div className="header-div">
          <h3 className="header-h3">Chip Count: {chipCount}</h3>
        </div>
      </header>
      <div className="wheel-history">
        Previous 20 Spins: {wheelHistory}
      </div>
      <Layout 
        chipCount={chipCount}
        setChipCount={setChipCount}
        currentBetValue={currentBetValue}
        setCurrentBetValue={setCurrentBetValue}
        spinTheWheel={spinTheWheel}
        isSpinComplete={isSpinComplete}
        setSplits={setSplits}
        splits={splits}
        straightUps={straightUps}
        setStraightUps={setStraightUps}
        columns={columns}
        setColumns={setColumns}
        setCorners={setCorners}
        corners={corners}
        setStreets={setStreets}
        streets={streets}
        setDoubleStreets={setDoubleStreets}
        doubleStreets={doubleStreets}
        setHighLow={setHighLow}
        highLow={highLow}
        setOddEven={setOddEven}
        oddEven={oddEven}
        setRedBlack={setRedBlack}
        redBlack={redBlack}
        setDozens={setDozens}
        dozens={dozens}
      />
      <BettingOptions chipCount={chipCount}
        currentBetValue={currentBetValue}
        setCurrentBetValue={setCurrentBetValue}
        spinTheWheel={spinTheWheel}
        isSpinComplete={isSpinComplete}
        setSplits={setSplits}
        splits={splits}
        straightUps={straightUps}
        setStraightUps={setStraightUps}
        columns={columns}
        setColumns={setColumns}
        setCorners={setCorners}
        corners={corners}
        setStreets={setStreets}
        streets={streets}
        setDoubleStreets={setDoubleStreets}
        doubleStreets={doubleStreets}
        setHighLow={setHighLow}
        highLow={highLow}
        setOddEven={setOddEven}
        oddEven={oddEven}
        setRedBlack={setRedBlack}
        redBlack={redBlack}
        setDozens={setDozens}
        dozens={dozens}
      />
      <button onClick={resetLayout} className="reset-button">Reset Bets</button>
    </div>
  );
};

export default App;
