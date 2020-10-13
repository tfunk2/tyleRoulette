import React, { useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout.js'
import BettingOptions from './components/BettingOptions.js'

function App() {
  const [chipCount, setChipCount] = useState(1000);
  const [pendingTotalBet, setPendingTotalBet] = useState(0);
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
  const [isSpinComplete, setIsSpinComplete] = useState(false);
  const [recentBet, setRecentBet] = useState([]);
  const [recentBetValue, setRecentBetValue] = useState(0);
  const [isWheelSpinning, setIsWheelSpinning] = useState(false)

  const wheelNumbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "12", "13", "14", "15", "16",
    "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32",
    "33", "34", "35", "36", "00"
  ];

  const spinTheWheel = () => {
    if(!isSpinComplete && pendingTotalBet > 0) {
      setIsWheelSpinning(true)
      setTimeout(() => {
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

        setIsSpinComplete(true)
      }, 3000)
    }
  };

  const resetLayout = () => {
    setCurrentBetValue(0);
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
    setDoubleStreets([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
    if(!isSpinComplete) {
      setChipCount(chipCount + pendingTotalBet);
    }
    setPendingTotalBet(0);
    if(isSpinComplete && totalAmountWon === 0 && chipCount === 0) {
      setIsSpinComplete(false)
      setChipCount(1000)
    }
    setRecentBet([])
    setRecentBetValue(0)
  }

  const wheelHistory = previousTwenty.map(winningNum => {
    return <p className="history-num">{winningNum}</p>
  })

  const undoRecentBet = () => {
    let betType = recentBet[0]
    let betIndex = recentBet[1]
    let newSplits = splits.flat()
    let newStraightUps = straightUps.flat()
    let newColumns = columns.flat()
    let newStreets = streets.flat()
    let newDoubleStreets = doubleStreets.flat()
    let newHighLow = highLow.flat()
    let newOddEven = oddEven.flat()
    let newRedBlack = redBlack.flat()
    let newDozens = dozens.flat()
    let newCorners = corners.flat()

    switch(betType) {
      case "straight":
        newStraightUps[betIndex] = straightUps[betIndex] - recentBetValue
        setStraightUps(newStraightUps)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "split":
        newSplits[betIndex] = splits[betIndex] - recentBetValue
        setSplits(newSplits)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "corner":
        newCorners[betIndex] = corners[betIndex] - recentBetValue
        setCorners(newCorners)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "street":
        newStreets[betIndex] = streets[betIndex] - recentBetValue
        setStreets(newStreets)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "double-street":
        newDoubleStreets[betIndex] = doubleStreets[betIndex] - recentBetValue
        setDoubleStreets(newDoubleStreets)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "column":
        newColumns[betIndex] = columns[betIndex] - recentBetValue
        setColumns(newColumns)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "dozen":
        newDozens[betIndex] = dozens[betIndex] - recentBetValue
        setDozens(newDozens)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "low":
        newHighLow[betIndex] = highLow[betIndex] - recentBetValue
        setHighLow(newHighLow)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "high":
        newHighLow[betIndex] = highLow[betIndex] - recentBetValue
        setHighLow(newHighLow)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "odd":
        newOddEven[betIndex] = oddEven[betIndex] - recentBetValue
        setOddEven(newOddEven)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "even":
        newOddEven[betIndex] = oddEven[betIndex] - recentBetValue
        setOddEven(newOddEven)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "red":
        newRedBlack[betIndex] = redBlack[betIndex] - recentBetValue
        setRedBlack(newRedBlack)
        setRecentBet([])
        setRecentBetValue([])
        break;
      case "basket":
        setBasket(basket - recentBetValue)
        setRecentBet([])
        setRecentBetValue([])
        break;
        default:
          console.log("No recent bet")
    }
    setChipCount(chipCount + recentBetValue)
    setPendingTotalBet(pendingTotalBet - recentBetValue)
  }

  const collectWinnings = () => {
    setIsSpinComplete(false)
    if(totalAmountWon > 0) {
      setChipCount(chipCount + totalAmountWon)
    }
    resetLayout()
  }

  const whichMessage = (messageType) => {
    const goodMessages = [
      `Nice one! Won ${totalAmountWon}`, 
      `Nailed it! Won ${totalAmountWon}`,
      `Chicken dinner! Won ${totalAmountWon}`
    ]
    const badMessages = [
      `Not this time. Lost ${pendingTotalBet}`, 
      `Boooo, lost ${pendingTotalBet}. Try again?`, 
      `It's only pretend luckily! Lost ${pendingTotalBet}`
    ]

    if(messageType === "won") {
      return goodMessages[Math.floor(Math.random() * goodMessages.length)]
    } else if(messageType === "lost") {
      return badMessages[Math.floor(Math.random() * badMessages.length)]
    }
  }

  useEffect(() => {
    if(previousTwenty[-1] === previousTwenty[-2]) {
      setIsWheelSpinning(false)
    }
  }, [previousTwenty])


  // PAYOUT SECTION BELOW
  let allPayouts = 0;

  useEffect(() => {
    if(winningNumber) {
      setIsWheelSpinning(false)
      switch(winningNumber) {
        case "0":
          allPayouts = 
            ((straightUps[0] * 35) + straightUps[0]) + 
            ((splits[0] * 17) + splits[0]) +
            ((splits[1] * 17) + splits[1]) +
            ((streets[1] * 11) + streets[1]) +
            ((streets[2] * 11) + streets[2]) +
            ((basket * 6) + basket)
          break;
        case "1":
          allPayouts =
            ((straightUps[1] * 35) + straightUps[1]) + 
            ((splits[1] * 17) + splits[1]) +
            ((splits[3] * 17) + splits[3]) +
            ((splits[5] * 17) + splits[5]) +
            ((streets[2] * 11) + streets[2]) +
            ((streets[3] * 11) + streets[3]) +
            ((corners[0] * 8) + corners[0]) +
            ((basket * 6) + basket) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            (columns[0] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "2":
          allPayouts =
            ((straightUps[2] * 35) + straightUps[2]) + 
            ((splits[3] * 17) + splits[3]) +
            ((splits[4] * 17) + splits[4]) +
            ((splits[6] * 17) + splits[6]) +
            ((streets[0] * 11) + streets[0]) +
            ((streets[1] * 11) + streets[1]) +
            ((streets[2] * 11) + streets[2]) +
            ((streets[3] * 11) + streets[3]) +
            ((corners[0] * 8) + corners[0]) +
            ((corners[1] * 8) + corners[1]) +
            ((basket * 6) + basket) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            (columns[1] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "3":
          allPayouts =
            ((straightUps[3] * 35) + straightUps[3]) + 
            ((splits[2] * 17) + splits[2]) +
            ((splits[4] * 17) + splits[4]) +
            ((splits[7] * 17) + splits[7]) +
            ((streets[0] * 11) + streets[0]) +
            ((streets[3] * 11) + streets[3]) +
            ((corners[1] * 8) + corners[1]) +
            ((basket * 6) + basket) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            (columns[2] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "4":
          allPayouts =
            ((straightUps[4] * 35) + straightUps[4]) + 
            ((splits[5] * 17) + splits[5]) +
            ((splits[8] * 17) + splits[8]) +
            ((splits[10] * 17) + splits[10]) +
            ((streets[4] * 11) + streets[4]) +
            ((corners[0] * 8) + corners[0]) +
            ((corners[2] * 8) + corners[2]) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            (columns[0] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "5":
          allPayouts =
            ((straightUps[5] * 35) + straightUps[5]) + 
            ((splits[6] * 17) + splits[6]) +
            ((splits[8] * 17) + splits[8]) +
            ((splits[9] * 17) + splits[9]) +
            ((splits[11] * 17) + splits[11]) +
            ((streets[4] * 11) + streets[4]) +
            ((corners[0] * 8) + corners[0]) +
            ((corners[1] * 8) + corners[1]) +
            ((corners[2] * 8) + corners[2]) +
            ((corners[3] * 8) + corners[3]) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            (columns[1] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "6":
          allPayouts =
            ((straightUps[6] * 35) + straightUps[6]) + 
            ((splits[7] * 17) + splits[7]) +
            ((splits[9] * 17) + splits[9]) +
            ((splits[12] * 17) + splits[12]) +
            ((streets[4] * 11) + streets[4]) +
            ((corners[1] * 8) + corners[1]) +
            ((corners[3] * 8) + corners[3]) +
            ((doubleStreets[0] * 5) + doubleStreets[0]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            (columns[2] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "7":
          allPayouts =
            ((straightUps[7] * 35) + straightUps[7]) + 
            ((splits[10] * 17) + splits[10]) +
            ((splits[13] * 17) + splits[13]) +
            ((splits[15] * 17) + splits[15]) +
            ((streets[5] * 11) + streets[5]) +
            ((corners[2] * 8) + corners[2]) +
            ((corners[4] * 8) + corners[4]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            (columns[0] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "8":
          allPayouts =
            ((straightUps[8] * 35) + straightUps[8]) + 
            ((splits[11] * 17) + splits[11]) +
            ((splits[13] * 17) + splits[13]) +
            ((splits[14] * 17) + splits[14]) +
            ((splits[16] * 17) + splits[16]) +
            ((streets[5] * 11) + streets[5]) +
            ((corners[2] * 8) + corners[2]) +
            ((corners[3] * 8) + corners[3]) +
            ((corners[4] * 8) + corners[4]) +
            ((corners[5] * 8) + corners[5]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            (columns[1] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "9":
          allPayouts =
            ((straightUps[9] * 35) + straightUps[9]) + 
            ((splits[12] * 17) + splits[12]) +
            ((splits[14] * 17) + splits[14]) +
            ((splits[17] * 17) + splits[17]) +
            ((streets[5] * 11) + streets[5]) +
            ((corners[3] * 8) + corners[3]) +
            ((corners[5] * 8) + corners[5]) +
            ((doubleStreets[1] * 5) + doubleStreets[1]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            (columns[2] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "10":
          allPayouts =
            ((straightUps[10] * 35) + straightUps[10]) + 
            ((splits[15] * 17) + splits[15]) +
            ((splits[18] * 17) + splits[18]) +
            ((splits[20] * 17) + splits[20]) +
            ((streets[6] * 11) + streets[6]) +
            ((corners[4] * 8) + corners[4]) +
            ((corners[6] * 8) + corners[6]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            (columns[0] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "11":
          allPayouts =
            ((straightUps[11] * 35) + straightUps[11]) + 
            ((splits[16] * 17) + splits[16]) +
            ((splits[18] * 17) + splits[18]) +
            ((splits[19] * 17) + splits[19]) +
            ((splits[21] * 17) + splits[21]) +
            ((streets[6] * 11) + streets[6]) +
            ((corners[4] * 8) + corners[4]) +
            ((corners[5] * 8) + corners[5]) +
            ((corners[6] * 8) + corners[6]) +
            ((corners[7] * 8) + corners[7]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            (columns[1] * 3) +
            (dozens[0] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "12":
          allPayouts =
            ((straightUps[12] * 35) + straightUps[12]) + 
            ((splits[17] * 17) + splits[17]) +
            ((splits[19] * 17) + splits[19]) +
            ((splits[22] * 17) + splits[22]) +
            ((streets[6] * 11) + streets[6]) +
            ((corners[5] * 8) + corners[5]) +
            ((corners[7] * 8) + corners[7]) +
            ((doubleStreets[2] * 5) + doubleStreets[2]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            (columns[2] * 3) +
            (dozens[0] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "13":
          allPayouts =
            ((straightUps[13] * 35) + straightUps[13]) + 
            ((splits[20] * 17) + splits[20]) +
            ((splits[23] * 17) + splits[23]) +
            ((splits[25] * 17) + splits[25]) +
            ((streets[7] * 11) + streets[7]) +
            ((corners[6] * 8) + corners[6]) +
            ((corners[8] * 8) + corners[8]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            (columns[0] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "14":
          allPayouts =
            ((straightUps[14] * 35) + straightUps[14]) + 
            ((splits[21] * 17) + splits[21]) +
            ((splits[23] * 17) + splits[23]) +
            ((splits[24] * 17) + splits[24]) +
            ((splits[26] * 17) + splits[26]) +
            ((streets[7] * 11) + streets[7]) +
            ((corners[6] * 8) + corners[6]) +
            ((corners[7] * 8) + corners[7]) +
            ((corners[8] * 8) + corners[8]) +
            ((corners[9] * 8) + corners[9]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            (columns[1] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "15":
          allPayouts =
            ((straightUps[15] * 35) + straightUps[15]) + 
            ((splits[22] * 17) + splits[22]) +
            ((splits[24] * 17) + splits[24]) +
            ((splits[27] * 17) + splits[27]) +
            ((streets[7] * 11) + streets[7]) +
            ((corners[7] * 8) + corners[7]) +
            ((corners[9] * 8) + corners[9]) +
            ((doubleStreets[3] * 5) + doubleStreets[3]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            (columns[2] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "16":
          allPayouts =
            ((straightUps[16] * 35) + straightUps[16]) + 
            ((splits[25] * 17) + splits[25]) +
            ((splits[28] * 17) + splits[28]) +
            ((splits[30] * 17) + splits[30]) +
            ((streets[8] * 11) + streets[8]) +
            ((corners[8] * 8) + corners[8]) +
            ((corners[10] * 8) + corners[10]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            (columns[0] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "17":
          allPayouts =
            ((straightUps[17] * 35) + straightUps[17]) + 
            ((splits[26] * 17) + splits[26]) +
            ((splits[28] * 17) + splits[28]) +
            ((splits[29] * 17) + splits[29]) +
            ((splits[32] * 17) + splits[32]) +
            ((streets[8] * 11) + streets[8]) +
            ((corners[8] * 8) + corners[8]) +
            ((corners[9] * 8) + corners[9]) +
            ((corners[10] * 8) + corners[10]) +
            ((corners[11] * 8) + corners[11]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            (columns[1] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[0] * 2) +
            (redBlack[1] * 2)
          break;
        case "18":
          allPayouts =
            ((straightUps[18] * 35) + straightUps[18]) + 
            ((splits[27] * 17) + splits[27]) +
            ((splits[29] * 17) + splits[29]) +
            ((splits[32] * 17) + splits[32]) +
            ((streets[8] * 11) + streets[8]) +
            ((corners[9] * 8) + corners[9]) +
            ((corners[11] * 8) + corners[11]) +
            ((doubleStreets[4] * 5) + doubleStreets[4]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            (columns[2] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[0] * 2) +
            (redBlack[0] * 2)
          break;
        case "19":
          allPayouts =
            ((straightUps[19] * 35) + straightUps[19]) + 
            ((splits[30] * 17) + splits[30]) +
            ((splits[33] * 17) + splits[33]) +
            ((splits[35] * 17) + splits[35]) +
            ((streets[9] * 11) + streets[9]) +
            ((corners[10] * 8) + corners[10]) +
            ((corners[12] * 8) + corners[12]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            (columns[0] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "20":
          allPayouts =
            ((straightUps[20] * 35) + straightUps[20]) + 
            ((splits[31] * 17) + splits[31]) +
            ((splits[33] * 17) + splits[33]) +
            ((splits[34] * 17) + splits[34]) +
            ((splits[36] * 17) + splits[36]) +
            ((streets[9] * 11) + streets[9]) +
            ((corners[10] * 8) + corners[10]) +
            ((corners[11] * 8) + corners[11]) +
            ((corners[12] * 8) + corners[12]) +
            ((corners[13] * 8) + corners[13]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            (columns[1] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "21":
          allPayouts =
            ((straightUps[21] * 35) + straightUps[21]) + 
            ((splits[32] * 17) + splits[32]) +
            ((splits[34] * 17) + splits[34]) +
            ((splits[37] * 17) + splits[37]) +
            ((streets[9] * 11) + streets[9]) +
            ((corners[11] * 8) + corners[11]) +
            ((corners[13] * 8) + corners[13]) +
            ((doubleStreets[5] * 5) + doubleStreets[5]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            (columns[2] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "22":
          allPayouts =
            ((straightUps[22] * 35) + straightUps[22]) + 
            ((splits[35] * 17) + splits[35]) +
            ((splits[38] * 17) + splits[38]) +
            ((splits[40] * 17) + splits[40]) +
            ((streets[10] * 11) + streets[10]) +
            ((corners[12] * 8) + corners[12]) +
            ((corners[14] * 8) + corners[14]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            (columns[0] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "23":
          allPayouts =
            ((straightUps[23] * 35) + straightUps[23]) + 
            ((splits[36] * 17) + splits[36]) +
            ((splits[38] * 17) + splits[38]) +
            ((splits[39] * 17) + splits[39]) +
            ((splits[41] * 17) + splits[41]) +
            ((streets[10] * 11) + streets[10]) +
            ((corners[12] * 8) + corners[12]) +
            ((corners[13] * 8) + corners[13]) +
            ((corners[14] * 8) + corners[14]) +
            ((corners[15] * 8) + corners[15]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            (columns[1] * 3) +
            (dozens[1] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "24":
          allPayouts =
            ((straightUps[24] * 35) + straightUps[24]) + 
            ((splits[37] * 17) + splits[37]) +
            ((splits[39] * 17) + splits[39]) +
            ((splits[42] * 17) + splits[42]) +
            ((streets[10] * 11) + streets[10]) +
            ((corners[13] * 8) + corners[13]) +
            ((corners[15] * 8) + corners[15]) +
            ((doubleStreets[6] * 5) + doubleStreets[6]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            (columns[2] * 3) +
            (dozens[1] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "25":
          allPayouts =
            ((straightUps[25] * 35) + straightUps[25]) + 
            ((splits[40] * 17) + splits[40]) +
            ((splits[43] * 17) + splits[43]) +
            ((splits[45] * 17) + splits[45]) +
            ((streets[11] * 11) + streets[11]) +
            ((corners[14] * 8) + corners[14]) +
            ((corners[16] * 8) + corners[16]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            (columns[0] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "26":
          allPayouts =
            ((straightUps[26] * 35) + straightUps[26]) + 
            ((splits[41] * 17) + splits[41]) +
            ((splits[43] * 17) + splits[43]) +
            ((splits[44] * 17) + splits[44]) +
            ((splits[46] * 17) + splits[46]) +
            ((streets[11] * 11) + streets[11]) +
            ((corners[14] * 8) + corners[14]) +
            ((corners[15] * 8) + corners[15]) +
            ((corners[16] * 8) + corners[16]) +
            ((corners[17] * 8) + corners[17]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            (columns[1] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "27":
          allPayouts =
            ((straightUps[27] * 35) + straightUps[27]) + 
            ((splits[42] * 17) + splits[42]) +
            ((splits[44] * 17) + splits[44]) +
            ((splits[47] * 17) + splits[47]) +
            ((streets[11] * 11) + streets[11]) +
            ((corners[15] * 8) + corners[15]) +
            ((corners[17] * 8) + corners[17]) +
            ((doubleStreets[7] * 5) + doubleStreets[7]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            (columns[2] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "28":
          allPayouts =
            ((straightUps[28] * 35) + straightUps[28]) + 
            ((splits[42] * 17) + splits[42]) +
            ((splits[44] * 17) + splits[44]) +
            ((splits[47] * 17) + splits[47]) +
            ((streets[12] * 11) + streets[12]) +
            ((corners[15] * 8) + corners[15]) +
            ((corners[17] * 8) + corners[17]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            (columns[0] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "29":
          allPayouts =
            ((straightUps[29] * 35) + straightUps[29]) + 
            ((splits[46] * 17) + splits[46]) +
            ((splits[48] * 17) + splits[48]) +
            ((splits[49] * 17) + splits[49]) +
            ((splits[51] * 17) + splits[51]) +
            ((streets[12] * 11) + streets[12]) +
            ((corners[15] * 8) + corners[15]) +
            ((corners[16] * 8) + corners[16]) +
            ((corners[17] * 8) + corners[17]) +
            ((corners[18] * 8) + corners[18]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            (columns[1] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "30":
          allPayouts =
            ((straightUps[30] * 35) + straightUps[30]) + 
            ((splits[47] * 17) + splits[47]) +
            ((splits[49] * 17) + splits[49]) +
            ((splits[52] * 17) + splits[52]) +
            ((streets[12] * 11) + streets[12]) +
            ((corners[16] * 8) + corners[16]) +
            ((corners[18] * 8) + corners[18]) +
            ((doubleStreets[8] * 5) + doubleStreets[8]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            (columns[2] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "31":
          allPayouts =
            ((straightUps[31] * 35) + straightUps[31]) + 
            ((splits[50] * 17) + splits[50]) +
            ((splits[53] * 17) + splits[53]) +
            ((splits[55] * 17) + splits[55]) +
            ((streets[13] * 11) + streets[13]) +
            ((corners[17] * 8) + corners[17]) +
            ((corners[19] * 8) + corners[19]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[0] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "32":
          allPayouts =
            ((straightUps[32] * 35) + straightUps[32]) + 
            ((splits[51] * 17) + splits[51]) +
            ((splits[53] * 17) + splits[53]) +
            ((splits[54] * 17) + splits[54]) +
            ((splits[55] * 17) + splits[55]) +
            ((streets[13] * 11) + streets[13]) +
            ((corners[17] * 8) + corners[17]) +
            ((corners[18] * 8) + corners[18]) +
            ((corners[19] * 8) + corners[19]) +
            ((corners[20] * 8) + corners[20]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[1] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "33":
          allPayouts =
            ((straightUps[33] * 35) + straightUps[33]) + 
            ((splits[52] * 17) + splits[52]) +
            ((splits[54] * 17) + splits[54]) +
            ((splits[57] * 17) + splits[57]) +
            ((streets[13] * 11) + streets[13]) +
            ((corners[18] * 8) + corners[18]) +
            ((corners[20] * 8) + corners[20]) +
            ((doubleStreets[9] * 5) + doubleStreets[9]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[2] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "34":
          allPayouts =
            ((straightUps[34] * 35) + straightUps[34]) + 
            ((splits[55] * 17) + splits[55]) +
            ((splits[58] * 17) + splits[58]) +
            ((streets[14] * 11) + streets[14]) +
            ((corners[19] * 8) + corners[19]) +
            ((corners[21] * 8) + corners[21]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[0] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "35":
          allPayouts =
            ((straightUps[35] * 35) + straightUps[35]) + 
            ((splits[56] * 17) + splits[56]) +
            ((splits[58] * 17) + splits[58]) +
            ((splits[59] * 17) + splits[59]) +
            ((streets[14] * 11) + streets[14]) +
            ((corners[20] * 8) + corners[20]) +
            ((corners[21] * 8) + corners[21]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[1] * 3) +
            (dozens[2] * 3) +
            (oddEven[0] * 2) +
            (highLow[1] * 2) +
            (redBlack[1] * 2)
          break;
        case "36":
          allPayouts =
            ((straightUps[36] * 35) + straightUps[36]) + 
            ((splits[57] * 17) + splits[57]) +
            ((splits[59] * 17) + splits[59]) +
            ((streets[14] * 11) + streets[14]) +
            ((corners[21] * 8) + corners[21]) +
            ((doubleStreets[10] * 5) + doubleStreets[10]) +
            (columns[2] * 3) +
            (dozens[2] * 3) +
            (oddEven[1] * 2) +
            (highLow[1] * 2) +
            (redBlack[0] * 2)
          break;
        case "00":
          allPayouts = 
            ((straightUps[37] * 35) + straightUps[37]) + 
            ((splits[0] * 17) + splits[0]) +
            ((splits[2] * 17) + splits[2]) +
            ((streets[0] * 11) + streets[0]) +
            ((streets[1] * 11) + streets[1]) +
            ((basket * 6) + basket)
          break;
      }
      setTotalAmountWon(totalAmountWon + allPayouts)
    }
  }, [previousTwenty])

  // useEffect(() => {
  //   if(chipCount < 1) {

  //   }
  // }, [chipCount])

  const wheelHistoryLine = wheelHistory.reverse().map(num => {
  return <div>{num}</div>
  })

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-div">
          <h3 className="header-h3">TyleRoulette</h3>
        </div>
        <div className="wheel-history">
          <h3 className="header-h3">Last 20 Spins: </h3> 
          <div>{wheelHistoryLine}</div>
        </div>
        <div className="header-div">
          <h3 className="header-h3">Chip Count: <span className="chip-count-text">{chipCount}</span></h3>
        </div>
      </header>
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
        setPendingTotalBet={setPendingTotalBet}
        pendingTotalBet={pendingTotalBet}
        basket={basket}
        setBasket={setBasket}
        recentBet={recentBet}
        setRecentBet={setRecentBet}
        recentBetValue={recentBetValue}
        setRecentBetValue={setRecentBetValue}
        isWheelSpinning={isWheelSpinning}
        setIsWheelSpinning={setIsWheelSpinning}
        winningNumber={winningNumber}
        resetLayout={resetLayout}
        undoRecentBet={undoRecentBet}
      />
      <div className="reset-button-div">
        { isSpinComplete ? 
          <div className="winnings-div">
            <h3>
              {totalAmountWon > 0 ? 
                whichMessage("won") :
                whichMessage("lost")
              }
            </h3>
            {chipCount < 1 && totalAmountWon === 0 ? 
              <button className="restart-button" 
                onClick={resetLayout}
              >+1000 Restart
              </button> : 
              <button className="collect-winnings-button" 
                onClick={collectWinnings}
              >{totalAmountWon > 0 ? "Collect Winnings" : "Clear Layout"}
            </button>
          }
          </div> : <></>
        }
      </div>
      <div className="wood-railing">
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
          setPendingTotalBet={setPendingTotalBet}
          pendingTotalBet={pendingTotalBet}
          basket={basket}
          setBasket={setBasket}
          recentBet={recentBet}
          setRecentBet={setRecentBet}
          recentBetValue={recentBetValue}
          setRecentBetValue={setRecentBetValue}
          isWheelSpinning={isWheelSpinning}
          setIsWheelSpinning={setIsWheelSpinning}
          winningNumber={winningNumber}
        />
      </div>
    </div>
  );
};

export default App;
