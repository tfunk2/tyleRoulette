import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout.js";
import BettingOptions from "./components/BettingOptions.js";

function App() {
  const [chipCount, setChipCount] = useState(1000);
  const [pendingTotalBet, setPendingTotalBet] = useState(0);
  const [currentBetValue, setCurrentBetValue] = useState(0);
  const [totalAmountWon, setTotalAmountWon] = useState(0);
  const [winningNumber, setWinningNumber] = useState(null);
  const [previousTwenty, setPreviousTwenty] = useState([]);
  const [straightUps, setStraightUps] = useState({
    "0":0, "00":0,
    "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
    "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
    "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
  });
  const [splits, setSplits] = useState({
    "0-00": 0, "0-1": 0, "00-3": 0, 
    "1-2": 0, "2-3": 0, "1-4": 0, "2-5": 0, "3-6": 0, 
    "4-5": 0, "5-6": 0, "4-7": 0, "5-8": 0, "6-9": 0, 
    "7-8": 0, "8-9": 0, "7-10": 0, "8-11": 0, "9-12": 0, 
    "10-11": 0, "11-12": 0, "10-13": 0, "11-14": 0, "12-15": 0, 
    "13-14": 0, "14-15": 0, "13-16": 0, "14-17": 0, "15-18": 0, 
    "16-17": 0, "17-18": 0, "16-19": 0, "17-20": 0, "18-21": 0, 
    "19-20": 0, "20-21": 0, "19-22": 0, "20-23": 0, "21-24": 0, 
    "22-23": 0, "23-24": 0, "22-25": 0, "23-26": 0, "24-27": 0, 
    "25-26": 0, "26-27": 0, "25-28": 0, "26-29": 0, "27-30": 0, 
    "28-29": 0, "29-30": 0,"28-31": 0, "29-32": 0, "30-33": 0, 
    "31-32": 0, "32-33": 0, "31-34": 0, "32-35": 0, "33-36": 0, 
    "34-35": 0, "35-36": 0
  });
  const [streets, setStreets] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [corners, setCorners] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [doubleStreets, setDoubleStreets] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [basket, setBasket] = useState(0);
  const [columns, setColumns] = useState([0, 0, 0]);
  const [dozens, setDozens] = useState([0, 0, 0]);
  const [redBlack, setRedBlack] = useState([0, 0]);
  const [oddEven, setOddEven] = useState([0, 0]);
  const [highLow, setHighLow] = useState([0, 0]);
  const [isSpinComplete, setIsSpinComplete] = useState(false);
  const [recentBet, setRecentBet] = useState([]);
  const [recentBetValue, setRecentBetValue] = useState(0);
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);

  const wheelNumbers = [
      "0",
      "1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34",
      "2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35",
      "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36",
      "00"
  ];

  const spinTheWheel = () => {
    if (!isSpinComplete && pendingTotalBet > 0 && !isWheelSpinning) {
      setIsWheelSpinning(true);
      setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * Math.floor(38));
        let randomWinner = wheelNumbers[randomIndex];
        setWinningNumber(randomWinner);

        let currentTwenty = [...previousTwenty];

        if (currentTwenty.length < 20) {
          setPreviousTwenty([randomWinner, ...previousTwenty]);
        } else {
          currentTwenty.unshift(randomWinner);
          currentTwenty.pop();
          setPreviousTwenty(currentTwenty);
        }

        setIsSpinComplete(true);
      }, 3000);
    }
  };

  const resetLayout = () => {
    setCurrentBetValue(0);
    setTotalAmountWon(0);
    setStraightUps({
      "0":0, "00":0,
      "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
      "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
      "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
    });
    setSplits({
      "0-00": 0, "0-1": 0, "00-3": 0, 
      "1-2": 0, "2-3": 0, "1-4": 0, "2-5": 0, "3-6": 0, 
      "4-5": 0, "5-6": 0, "4-7": 0, "5-8": 0, "6-9": 0, 
      "7-8": 0, "8-9": 0, "7-10": 0, "8-11": 0, "9-12": 0, 
      "10-11": 0, "11-12": 0, "10-13": 0, "11-14": 0, "12-15": 0, 
      "13-14": 0, "14-15": 0, "13-16": 0, "14-17": 0, "15-18": 0, 
      "16-17": 0, "17-18": 0, "16-19": 0, "17-20": 0, "18-21": 0, 
      "19-20": 0, "20-21": 0, "19-22": 0, "20-23": 0, "21-24": 0, 
      "22-23": 0, "23-24": 0, "22-25": 0, "23-26": 0, "24-27": 0, 
      "25-26": 0, "26-27": 0, "25-28": 0, "26-29": 0, "27-30": 0, 
      "28-29": 0, "29-30": 0,"28-31": 0, "29-32": 0, "30-33": 0, 
      "31-32": 0, "32-33": 0, "31-34": 0, "32-35": 0, "33-36": 0, 
      "34-35": 0, "35-36": 0
    });
    setStreets([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setDoubleStreets([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setCorners([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    setBasket(0);
    setColumns([0, 0, 0]);
    setDozens([0, 0, 0]);
    setRedBlack([0, 0]);
    setOddEven([0, 0]);
    setHighLow([0, 0]);
    if (!isSpinComplete) {
      setChipCount(chipCount + pendingTotalBet);
    }
    setPendingTotalBet(0);
    if (isSpinComplete && totalAmountWon === 0 && chipCount === 0) {
      setIsSpinComplete(false);
      setChipCount(1000);
    }
    setRecentBet([]);
    setRecentBetValue(0);
  };

  const whatColorNumber = (winningNum) => {
    switch (winningNum) {
      // Green Numbers
      case "0":
      case "00":
        return "green-previous-number";
      // Red Numbers
      case "1":
      case "3":
      case "5":
      case "7":
      case "9":
      case "12":
      case "14":
      case "16":
      case "18":
      case "19":
      case "21":
      case "23":
      case "25":
      case "27":
      case "30":
      case "32":
      case "34":
      case "36":
        return "red-previous-number";
      // Black Numbers
      case "2":
      case "4":
      case "6":
      case "8":
      case "10":
      case "11":
      case "13":
      case "15":
      case "17":
      case "20":
      case "22":
      case "24":
      case "26":
      case "28":
      case "29":
      case "31":
      case "33":
      case "35":
        return "black-previous-number";
      default:
        console.log("Something went wrong in App.js > WhatColorNumber()");
        break;
    }
  };

  // const wheelHistory = previousTwenty.reverse().map(winningNum => {
  //   return <p className="history-num">{winningNum}</p>
  // })

  const wheelHistoryLine = previousTwenty.map((winningNum) => {
    return (
      <div className={whatColorNumber(winningNum)}>
        <p className="history-num">{winningNum}</p>
      </div>
    );
  });


  // Rework this AFTER converting arrays to objects for legibility
  const undoRecentBet = () => {
    let betType = recentBet[0];
    let betIndex = recentBet[1];
    let newSplits = splits.flat();
    let newStraightUps = {...straightUps};
    let newColumns = columns.flat();
    let newStreets = streets.flat();
    let newDoubleStreets = doubleStreets.flat();
    let newHighLow = highLow.flat();
    let newOddEven = oddEven.flat();
    let newRedBlack = redBlack.flat();
    let newDozens = dozens.flat();
    let newCorners = corners.flat();

    switch (betType) {
      case "straight":
        newStraightUps[betIndex] = straightUps[betIndex] - recentBetValue;
        setStraightUps(newStraightUps);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "split":
        newSplits[betIndex] = splits[betIndex] - recentBetValue;
        setSplits(newSplits);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "corner":
        newCorners[betIndex] = corners[betIndex] - recentBetValue;
        setCorners(newCorners);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "street":
        newStreets[betIndex] = streets[betIndex] - recentBetValue;
        setStreets(newStreets);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "double-street":
        newDoubleStreets[betIndex] = doubleStreets[betIndex] - recentBetValue;
        setDoubleStreets(newDoubleStreets);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "column":
        newColumns[betIndex] = columns[betIndex] - recentBetValue;
        setColumns(newColumns);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "dozen":
        newDozens[betIndex] = dozens[betIndex] - recentBetValue;
        setDozens(newDozens);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "low":
        newHighLow[betIndex] = highLow[betIndex] - recentBetValue;
        setHighLow(newHighLow);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "high":
        newHighLow[betIndex] = highLow[betIndex] - recentBetValue;
        setHighLow(newHighLow);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "odd":
        newOddEven[betIndex] = oddEven[betIndex] - recentBetValue;
        setOddEven(newOddEven);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "even":
        newOddEven[betIndex] = oddEven[betIndex] - recentBetValue;
        setOddEven(newOddEven);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "red":
        newRedBlack[betIndex] = redBlack[betIndex] - recentBetValue;
        setRedBlack(newRedBlack);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      case "basket":
        setBasket(basket - recentBetValue);
        setRecentBet([]);
        setRecentBetValue([]);
        break;
      default:
        console.log("No recent bet");
    }
    setChipCount(chipCount + recentBetValue);
    setPendingTotalBet(pendingTotalBet - recentBetValue);
  };

  const collectWinnings = () => {
    setIsSpinComplete(false);
    if (totalAmountWon > 0) {
      setChipCount(chipCount + totalAmountWon);
    }
    resetLayout();
  };

  const whichMessage = (messageType) => {
    const goodMessages = [
      "Nice one! Won",
      "Nailed it! Won",
      "Chicken dinner! Won",
    ];
    const badMessages = [
      "Not this time. Lost",
      "Boooo, lost",
      "It's only pretend luckily! Lost",
    ];

    if (messageType === "won") {
      return goodMessages[Math.floor(Math.random() * goodMessages.length)];
    } else if (messageType === "lost") {
      return badMessages[Math.floor(Math.random() * badMessages.length)];
    }
  };

  useEffect(() => {
    if (previousTwenty[-1] === previousTwenty[-2]) {
      setIsWheelSpinning(false);
    }
  }, [previousTwenty]);

  // PAYOUT SECTION BELOW
  useEffect(() => {
    let allPayouts = 0;
    if (winningNumber) {
      setIsWheelSpinning(false);
      switch (winningNumber) {
        case "0":
          allPayouts =
            straightUps["0"] * 35 +
            straightUps["0"] +
            (splits["0-00"] * 17 + splits["0-00"]) +
            (splits["0-1"] * 17 + splits["0-1"]) +
            (streets[1] * 11 + streets[1]) +
            (streets[2] * 11 + streets[2]) +
            (basket * 6 + basket);
          break;
        case "1":
          allPayouts =
            straightUps["1"] * 35 +
            straightUps["1"] +
            (splits["0-1"] * 17 + splits["0-1"]) +
            (splits["1-2"] * 17 + splits["1-2"]) +
            (splits["1-4"] * 17 + splits["1-4"]) +
            (streets[2] * 11 + streets[2]) +
            (streets[3] * 11 + streets[3]) +
            (corners[0] * 8 + corners[0]) +
            (basket * 6 + basket) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            columns[0] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "2":
          allPayouts =
            straightUps["2"] * 35 +
            straightUps["2"] +
            (splits["1-2"] * 17 + splits["1-2"]) +
            (splits["2-3"] * 17 + splits["2-3"]) +
            (splits["2-5"] * 17 + splits["2-5"]) +
            (streets[0] * 11 + streets[0]) +
            (streets[1] * 11 + streets[1]) +
            (streets[2] * 11 + streets[2]) +
            (streets[3] * 11 + streets[3]) +
            (corners[0] * 8 + corners[0]) +
            (corners[1] * 8 + corners[1]) +
            (basket * 6 + basket) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            columns[1] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "3":
          allPayouts =
            straightUps["3"] * 35 +
            straightUps["3"] +
            (splits["00-3"] * 17 + splits["00-3"]) +
            (splits["2-3"] * 17 + splits["2-3"]) +
            (splits["3-6"] * 17 + splits["3-6"]) +
            (streets[0] * 11 + streets[0]) +
            (streets[3] * 11 + streets[3]) +
            (corners[1] * 8 + corners[1]) +
            (basket * 6 + basket) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            columns[2] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "4":
          allPayouts =
            straightUps["4"] * 35 +
            straightUps["4"] +
            (splits["1-4"] * 17 + splits["1-4"]) +
            (splits["4-5"] * 17 + splits["4-5"]) +
            (splits["4-7"] * 17 + splits["4-7"]) +
            (streets[4] * 11 + streets[4]) +
            (corners[0] * 8 + corners[0]) +
            (corners[2] * 8 + corners[2]) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            columns[0] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "5":
          allPayouts =
            straightUps["5"] * 35 +
            straightUps["5"] +
            (splits["2-5"] * 17 + splits["2-5"]) +
            (splits["4-5"] * 17 + splits["4-5"]) +
            (splits["5-6"] * 17 + splits["5-6"]) +
            (splits["5-8"] * 17 + splits["5-8"]) +
            (streets[4] * 11 + streets[4]) +
            (corners[0] * 8 + corners[0]) +
            (corners[1] * 8 + corners[1]) +
            (corners[2] * 8 + corners[2]) +
            (corners[3] * 8 + corners[3]) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            columns[1] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "6":
          allPayouts =
            straightUps["6"] * 35 +
            straightUps["6"] +
            (splits["3-6"] * 17 + splits["3-6"]) +
            (splits["5-6"] * 17 + splits["5-6"]) +
            (splits["6-9"] * 17 + splits["6-9"]) +
            (streets[4] * 11 + streets[4]) +
            (corners[1] * 8 + corners[1]) +
            (corners[3] * 8 + corners[3]) +
            (doubleStreets[0] * 5 + doubleStreets[0]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            columns[2] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "7":
          allPayouts =
            straightUps["7"] * 35 +
            straightUps["7"] +
            (splits["4-7"] * 17 + splits["4-7"]) +
            (splits["7-8"] * 17 + splits["7-8"]) +
            (splits["7-10"] * 17 + splits["7-10"]) +
            (streets[5] * 11 + streets[5]) +
            (corners[2] * 8 + corners[2]) +
            (corners[4] * 8 + corners[4]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            columns[0] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "8":
          allPayouts =
            straightUps["8"] * 35 +
            straightUps["8"] +
            (splits["5-8"] * 17 + splits["5-8"]) +
            (splits["7-8"] * 17 + splits["7-8"]) +
            (splits["8-9"] * 17 + splits["8-9"]) +
            (splits["8-11"] * 17 + splits["8-11"]) +
            (streets[5] * 11 + streets[5]) +
            (corners[2] * 8 + corners[2]) +
            (corners[3] * 8 + corners[3]) +
            (corners[4] * 8 + corners[4]) +
            (corners[5] * 8 + corners[5]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            columns[1] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "9":
          allPayouts =
            straightUps["9"] * 35 +
            straightUps["9"] +
            (splits["6-9"] * 17 + splits["6-9"]) +
            (splits["8-9"] * 17 + splits["8-9"]) +
            (splits["9-12"] * 17 + splits["9-12"]) +
            (streets[5] * 11 + streets[5]) +
            (corners[3] * 8 + corners[3]) +
            (corners[5] * 8 + corners[5]) +
            (doubleStreets[1] * 5 + doubleStreets[1]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            columns[2] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "10":
          allPayouts =
            straightUps["10"] * 35 +
            straightUps["10"] +
            (splits["7-10"] * 17 + splits["7-10"]) +
            (splits["10-11"] * 17 + splits["10-11"]) +
            (splits["10-13"] * 17 + splits["10-13"]) +
            (streets[6] * 11 + streets[6]) +
            (corners[4] * 8 + corners[4]) +
            (corners[6] * 8 + corners[6]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            columns[0] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "11":
          allPayouts =
            straightUps["11"] * 35 +
            straightUps["11"] +
            (splits["8-11"] * 17 + splits["8-11"]) +
            (splits["10-11"] * 17 + splits["10-11"]) +
            (splits["11-12"] * 17 + splits["11-12"]) +
            (splits["11-14"] * 17 + splits["11-14"]) +
            (streets[6] * 11 + streets[6]) +
            (corners[4] * 8 + corners[4]) +
            (corners[5] * 8 + corners[5]) +
            (corners[6] * 8 + corners[6]) +
            (corners[7] * 8 + corners[7]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            columns[1] * 3 +
            dozens[0] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "12":
          allPayouts =
            straightUps["12"] * 35 +
            straightUps["12"] +
            (splits["9-12"] * 17 + splits["9-12"]) +
            (splits["11-12"] * 17 + splits["11-12"]) +
            (splits["12-15"] * 17 + splits["12-15"]) +
            (streets[6] * 11 + streets[6]) +
            (corners[5] * 8 + corners[5]) +
            (corners[7] * 8 + corners[7]) +
            (doubleStreets[2] * 5 + doubleStreets[2]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            columns[2] * 3 +
            dozens[0] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "13":
          allPayouts =
            straightUps["13"] * 35 +
            straightUps["13"] +
            (splits["10-13"] * 17 + splits["10-13"]) +
            (splits["13-14"] * 17 + splits["13-14"]) +
            (splits["13-16"] * 17 + splits["13-16"]) +
            (streets[7] * 11 + streets[7]) +
            (corners[6] * 8 + corners[6]) +
            (corners[8] * 8 + corners[8]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            columns[0] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "14":
          allPayouts =
            straightUps["14"] * 35 +
            straightUps["14"] +
            (splits["11-14"] * 17 + splits["11-14"]) +
            (splits["13-14"] * 17 + splits["13-14"]) +
            (splits["14-15"] * 17 + splits["14-15"]) +
            (splits["14-17"] * 17 + splits["14-17"]) +
            (streets[7] * 11 + streets[7]) +
            (corners[6] * 8 + corners[6]) +
            (corners[7] * 8 + corners[7]) +
            (corners[8] * 8 + corners[8]) +
            (corners[9] * 8 + corners[9]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            columns[1] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "15":
          allPayouts =
            straightUps["15"] * 35 +
            straightUps["15"] +
            (splits["12-15"] * 17 + splits["12-15"]) +
            (splits["14-15"] * 17 + splits["14-15"]) +
            (splits["15-18"] * 17 + splits["15-18"]) +
            (streets[7] * 11 + streets[7]) +
            (corners[7] * 8 + corners[7]) +
            (corners[9] * 8 + corners[9]) +
            (doubleStreets[3] * 5 + doubleStreets[3]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            columns[2] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "16":
          allPayouts =
            straightUps["16"] * 35 +
            straightUps["16"] +
            (splits["13-16"] * 17 + splits["13-16"]) +
            (splits["16-17"] * 17 + splits["16-17"]) +
            (splits["16-19"] * 17 + splits["16-19"]) +
            (streets[8] * 11 + streets[8]) +
            (corners[8] * 8 + corners[8]) +
            (corners[10] * 8 + corners[10]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            columns[0] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "17":
          allPayouts =
            straightUps["17"] * 35 +
            straightUps["17"] +
            (splits["14-17"] * 17 + splits["14-17"]) +
            (splits["16-17"] * 17 + splits["16-17"]) +
            (splits["17-18"] * 17 + splits["17-18"]) +
            (splits["18-21"] * 17 + splits["18-21"]) +
            (streets[8] * 11 + streets[8]) +
            (corners[8] * 8 + corners[8]) +
            (corners[9] * 8 + corners[9]) +
            (corners[10] * 8 + corners[10]) +
            (corners[11] * 8 + corners[11]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            columns[1] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[0] * 2 +
            redBlack[1] * 2;
          break;
        case "18":
          allPayouts =
            straightUps["18"] * 35 +
            straightUps["18"] +
            (splits["15-18"] * 17 + splits["15-18"]) +
            (splits["17-18"] * 17 + splits["17-18"]) +
            (splits["18-21"] * 17 + splits["18-21"]) +
            (streets[8] * 11 + streets[8]) +
            (corners[9] * 8 + corners[9]) +
            (corners[11] * 8 + corners[11]) +
            (doubleStreets[4] * 5 + doubleStreets[4]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            columns[2] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[0] * 2 +
            redBlack[0] * 2;
          break;
        case "19":
          allPayouts =
            straightUps["19"] * 35 +
            straightUps["19"] +
            (splits["16-19"] * 17 + splits["16-19"]) +
            (splits["19-20"] * 17 + splits["19-20"]) +
            (splits["19-22"] * 17 + splits["19-22"]) +
            (streets[9] * 11 + streets[9]) +
            (corners[10] * 8 + corners[10]) +
            (corners[12] * 8 + corners[12]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            columns[0] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "20":
          allPayouts =
            straightUps["20"] * 35 +
            straightUps["20"] +
            (splits["17-20"] * 17 + splits["17-20"]) +
            (splits["19-20"] * 17 + splits["19-20"]) +
            (splits["20-21"] * 17 + splits["20-21"]) +
            (splits["20-23"] * 17 + splits["20-23"]) +
            (streets[9] * 11 + streets[9]) +
            (corners[10] * 8 + corners[10]) +
            (corners[11] * 8 + corners[11]) +
            (corners[12] * 8 + corners[12]) +
            (corners[13] * 8 + corners[13]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            columns[1] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "21":
          allPayouts =
            straightUps["21"] * 35 +
            straightUps["21"] +
            (splits["18-21"] * 17 + splits["18-21"]) +
            (splits["20-21"] * 17 + splits["20-21"]) +
            (splits["21-24"] * 17 + splits["21-24"]) +
            (streets[9] * 11 + streets[9]) +
            (corners[11] * 8 + corners[11]) +
            (corners[13] * 8 + corners[13]) +
            (doubleStreets[5] * 5 + doubleStreets[5]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            columns[2] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "22":
          allPayouts =
            straightUps["22"] * 35 +
            straightUps["22"] +
            (splits["19-22"] * 17 + splits["19-22"]) +
            (splits["22-23"] * 17 + splits["22-23"]) +
            (splits["22-25"] * 17 + splits["22-25"]) +
            (streets[10] * 11 + streets[10]) +
            (corners[12] * 8 + corners[12]) +
            (corners[14] * 8 + corners[14]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            columns[0] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "23":
          allPayouts =
            straightUps["23"] * 35 +
            straightUps["23"] +
            (splits["20-23"] * 17 + splits["20-23"]) +
            (splits["22-23"] * 17 + splits["22-23"]) +
            (splits["23-24"] * 17 + splits["23-24"]) +
            (splits["23-26"] * 17 + splits["23-26"]) +
            (streets[10] * 11 + streets[10]) +
            (corners[12] * 8 + corners[12]) +
            (corners[13] * 8 + corners[13]) +
            (corners[14] * 8 + corners[14]) +
            (corners[15] * 8 + corners[15]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            columns[1] * 3 +
            dozens[1] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "24":
          allPayouts =
            straightUps["24"] * 35 +
            straightUps["24"] +
            (splits["21-24"] * 17 + splits["21-24"]) +
            (splits["23-24"] * 17 + splits["23-24"]) +
            (splits["24-27"] * 17 + splits["24-27"]) +
            (streets[10] * 11 + streets[10]) +
            (corners[13] * 8 + corners[13]) +
            (corners[15] * 8 + corners[15]) +
            (doubleStreets[6] * 5 + doubleStreets[6]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            columns[2] * 3 +
            dozens[1] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "25":
          allPayouts =
            straightUps["25"] * 35 +
            straightUps["25"] +
            (splits["22-25"] * 17 + splits["22-25"]) +
            (splits["25-26"] * 17 + splits["25-26"]) +
            (splits["25-28"] * 17 + splits["25-28"]) +
            (streets[11] * 11 + streets[11]) +
            (corners[14] * 8 + corners[14]) +
            (corners[16] * 8 + corners[16]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            columns[0] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "26":
          allPayouts =
            straightUps["26"] * 35 +
            straightUps["26"] +
            (splits["23-26"] * 17 + splits["23-26"]) +
            (splits["25-26"] * 17 + splits["25-26"]) +
            (splits["26-27"] * 17 + splits["26-27"]) +
            (splits["26-29"] * 17 + splits["26-29"]) +
            (streets[11] * 11 + streets[11]) +
            (corners[14] * 8 + corners[14]) +
            (corners[15] * 8 + corners[15]) +
            (corners[16] * 8 + corners[16]) +
            (corners[17] * 8 + corners[17]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            columns[1] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "27":
          allPayouts =
            straightUps["27"] * 35 +
            straightUps["27"] +
            (splits["24-27"] * 17 + splits["24-27"]) +
            (splits["26-27"] * 17 + splits["26-27"]) +
            (splits["27-30"] * 17 + splits["27-30"]) +
            (streets[11] * 11 + streets[11]) +
            (corners[15] * 8 + corners[15]) +
            (corners[17] * 8 + corners[17]) +
            (doubleStreets[7] * 5 + doubleStreets[7]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            columns[2] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "28":
          allPayouts =
            straightUps["28"] * 35 +
            straightUps["28"] +
            (splits["24-27"] * 17 + splits["24-27"]) +
            (splits["26-27"] * 17 + splits["26-27"]) +
            (splits["27-30"] * 17 + splits["27-30"]) +
            (streets[12] * 11 + streets[12]) +
            (corners[15] * 8 + corners[15]) +
            (corners[17] * 8 + corners[17]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            columns[0] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "29":
          allPayouts =
            straightUps["29"] * 35 +
            straightUps["29"] +
            (splits["26-29"] * 17 + splits["26-29"]) +
            (splits["28-29"] * 17 + splits["28-29"]) +
            (splits["29-30"] * 17 + splits["29-30"]) +
            (splits["29-32"] * 17 + splits["29-32"]) +
            (streets[12] * 11 + streets[12]) +
            (corners[15] * 8 + corners[15]) +
            (corners[16] * 8 + corners[16]) +
            (corners[17] * 8 + corners[17]) +
            (corners[18] * 8 + corners[18]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            columns[1] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "30":
          allPayouts =
            straightUps["30"] * 35 +
            straightUps["30"] +
            (splits["27-30"] * 17 + splits["27-30"]) +
            (splits["29-30"] * 17 + splits["29-30"]) +
            (splits["30-33"] * 17 + splits["30-33"]) +
            (streets[12] * 11 + streets[12]) +
            (corners[16] * 8 + corners[16]) +
            (corners[18] * 8 + corners[18]) +
            (doubleStreets[8] * 5 + doubleStreets[8]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            columns[2] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "31":
          allPayouts =
            straightUps["31"] * 35 +
            straightUps["31"] +
            (splits["28-31"] * 17 + splits["28-31"]) +
            (splits["31-32"] * 17 + splits["31-32"]) +
            (splits["31-34"] * 17 + splits["31-34"]) +
            (streets[13] * 11 + streets[13]) +
            (corners[17] * 8 + corners[17]) +
            (corners[19] * 8 + corners[19]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[0] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "32":
          allPayouts =
            straightUps["32"] * 35 +
            straightUps["32"] +
            (splits["29-32"] * 17 + splits["29-32"]) +
            (splits["31-32"] * 17 + splits["31-32"]) +
            (splits["32-33"] * 17 + splits["32-33"]) +
            (splits["31-34"] * 17 + splits["31-34"]) +
            (streets[13] * 11 + streets[13]) +
            (corners[17] * 8 + corners[17]) +
            (corners[18] * 8 + corners[18]) +
            (corners[19] * 8 + corners[19]) +
            (corners[20] * 8 + corners[20]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[1] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "33":
          allPayouts =
            straightUps["33"] * 35 +
            straightUps["33"] +
            (splits["30-33"] * 17 + splits["30-33"]) +
            (splits["32-33"] * 17 + splits["32-33"]) +
            (splits["33-36"] * 17 + splits["33-36"]) +
            (streets[13] * 11 + streets[13]) +
            (corners[18] * 8 + corners[18]) +
            (corners[20] * 8 + corners[20]) +
            (doubleStreets[9] * 5 + doubleStreets[9]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[2] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "34":
          allPayouts =
            straightUps["34"] * 35 +
            straightUps["34"] +
            (splits["31-34"] * 17 + splits["31-34"]) +
            (splits["34-35"] * 17 + splits["34-35"]) +
            (streets[14] * 11 + streets[14]) +
            (corners[19] * 8 + corners[19]) +
            (corners[21] * 8 + corners[21]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[0] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "35":
          allPayouts =
            straightUps["35"] * 35 +
            straightUps["35"] +
            (splits["32-35"] * 17 + splits["32-35"]) +
            (splits["34-35"] * 17 + splits["34-35"]) +
            (splits["35-36"] * 17 + splits["35-36"]) +
            (streets[14] * 11 + streets[14]) +
            (corners[20] * 8 + corners[20]) +
            (corners[21] * 8 + corners[21]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[1] * 3 +
            dozens[2] * 3 +
            oddEven[0] * 2 +
            highLow[1] * 2 +
            redBlack[1] * 2;
          break;
        case "36":
          allPayouts =
            straightUps["36"] * 35 +
            straightUps["36"] +
            (splits["33-36"] * 17 + splits["33-36"]) +
            (splits["35-36"] * 17 + splits["35-36"]) +
            (streets[14] * 11 + streets[14]) +
            (corners[21] * 8 + corners[21]) +
            (doubleStreets[10] * 5 + doubleStreets[10]) +
            columns[2] * 3 +
            dozens[2] * 3 +
            oddEven[1] * 2 +
            highLow[1] * 2 +
            redBlack[0] * 2;
          break;
        case "00":
          allPayouts =
            straightUps["00"] * 35 +
            straightUps["00"] +
            (splits["0-00"] * 17 + splits["0-00"]) +
            (splits["00-3"] * 17 + splits["00-3"]) +
            (streets[0] * 11 + streets[0]) +
            (streets[1] * 11 + streets[1]) +
            (basket * 6 + basket);
          break;
        default:
          console.log(
            "Something went wrong in App.js > // Payout Section > UseEffect()"
          );
          break;
      }
      setTotalAmountWon(totalAmountWon + allPayouts);
    }
  }, [previousTwenty]);

  // useEffect(() => {
  //   if(chipCount < 1) {

  //   }
  // }, [chipCount])

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-div">
          <h3 className="header-h3">TyleRoulette</h3>
        </div>
        <div className="wheel-history">
          <h3 className="header-h3">Last 20: </h3>
          <div className="previous-numbers-div">{wheelHistoryLine}</div>
        </div>
        <div className="header-div right-header">
          <h3 className="header-h3">
            Chips: <span className="chip-count-text">{chipCount}</span>
          </h3>
          {/* <div className="chip-count-pending-bet">
            <span className="chip-count-text">{chipCount}</span>
          </div> */}
          {
            pendingTotalBet > 0 ? (
              <span className="pending-bet-span">
                Pending Bet: -{pendingTotalBet}
              </span>
            ) : (
              <></>
            )
            // <span className="empty-pending-bet-span"> </span>
          }
        </div>
      </header>
      <BettingOptions
        chipCount={chipCount}
        currentBetValue={currentBetValue}
        setCurrentBetValue={setCurrentBetValue}
        spinTheWheel={spinTheWheel}
        isSpinComplete={isSpinComplete}
        pendingTotalBet={pendingTotalBet}
        recentBet={recentBet}
        isWheelSpinning={isWheelSpinning}
        winningNumber={winningNumber}
        resetLayout={resetLayout}
        undoRecentBet={undoRecentBet}
        whichMessage={whichMessage}
        resetLayout={resetLayout}
        collectWinnings={collectWinnings}
        totalAmountWon={totalAmountWon}
      />
      <div className="wood-railing">
        <Layout
          chipCount={chipCount}
          setChipCount={setChipCount}
          currentBetValue={currentBetValue}
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
          setPendingTotalBet={setPendingTotalBet}
          pendingTotalBet={pendingTotalBet}
          basket={basket}
          setBasket={setBasket}
          setRecentBet={setRecentBet}
          setRecentBetValue={setRecentBetValue}
          winningNumber={winningNumber}
        />
      </div>
    </div>
  );
}

export default App;
