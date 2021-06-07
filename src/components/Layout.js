import React from "react";
import "../stylesheets/Layout.css";
import RedDiamond from "../images/red-diamond.png";
import BlackDiamond from "../images/black-diamond.png";
import Ribbon from "../images/ribbon.png";
import BlankChip from "../images/blank-chip.png";

export default function Layout({
  basket, 
  chipCount, 
  columns, 
  corners, 
  currentBetValue, 
  doubleStreets, 
  dozens, 
  highLow, 
  isSpinComplete, 
  oddEven, 
  pendingTotalBet, 
  recentBets,
  redBlack, 
  setBasket, 
  setChipCount, 
  setColumns, 
  setCorners, 
  setDoubleStreets, 
  setDozens, 
  setHighLow, 
  setOddEven, 
  setPendingTotalBet, 
  setRecentBets, 
  setRedBlack, 
  setSplits, 
  setStraightUps, 
  setStreets, 
  splits, 
  straightUps, 
  streets, 
  winningNumber
}) {
  const increaseBet = (betToIncrease) => {
    if (
      !isSpinComplete &&
      currentBetValue <= chipCount &&
      currentBetValue > 0
    ) {
      // let splitRegex = /split$/;
      let newSplits = {...splits};
      let newStraightUps = {...straightUps};
      let newColumns = {...columns};
      let newStreets = {...streets};
      let newDoubleStreets = {...doubleStreets};
      let newHighLow = {...highLow};
      let newOddEven = {...oddEven};
      let newRedBlack = {...redBlack};
      let newDozens = {...dozens};
      let newCorners = {...corners};
      let betTypeRegex = /[a-z]+-?[a-z]+?$|low|high/;
      let betType = betToIncrease.match(betTypeRegex)[0];

      // Create a helper function which returns [...recentBets, [betType, x, currentBetValue]] 
      // in order to remove repeated code below
      switch (betToIncrease) {
        case "0-00 split":
          newSplits["0-00"] = splits["0-00"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "0-00", currentBetValue]]);
          break;
        case "00 straight":
          newStraightUps["00"] = straightUps["00"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "00", currentBetValue]]);
          break;
        case "0 straight":
          newStraightUps["0"] = straightUps["0"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "0", currentBetValue]]);
          break;
        case "00-3 split":
          newSplits["00-3"] = splits["00-3"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "00-3", currentBetValue]]);
          break;
        case "3 straight":
          newStraightUps["3"] = straightUps["3"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "3", currentBetValue]]);
          break;
        case "3-6 split":
          newSplits["3-6"] = splits["3-6"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "3-6", currentBetValue]]);
          break;
        case "6 straight":
          newStraightUps["6"] = straightUps["6"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "6", currentBetValue]]);
          break;
        case "6-9 split":
          newSplits["6-9"] = splits["6-9"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "6-9", currentBetValue]]);
          break;
        case "9 straight":
          newStraightUps["9"] = straightUps["9"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "9", currentBetValue]]);
          break;
        case "9-12 split":
          newSplits["9-12"] = splits["9-12"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "9-12", currentBetValue]]);
          break;
        case "12 straight":
          newStraightUps["12"] = straightUps["12"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "12", currentBetValue]]);
          break;
        case "12-15 split":
          newSplits["12-15"] = splits["12-15"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "12-15", currentBetValue]]);
          break;
        case "15 straight":
          newStraightUps["15"] = straightUps["15"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "15", currentBetValue]]);
          break;
        case "15-18 split":
          newSplits["15-18"] = splits["15-18"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "15-18", currentBetValue]]);
          break;
        case "18 straight":
          newStraightUps["18"] = straightUps["18"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "18", currentBetValue]]);
          break;
        case "18-21 split":
          newSplits["18-21"] = splits["18-21"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "18-21", currentBetValue]]);
          break;
        case "21 straight":
          newStraightUps["21"] = straightUps["21"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "21", currentBetValue]]);
          break;
        case "21-24 split":
          newSplits["21-24"] = splits["21-24"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "21-24", currentBetValue]]);
          break;
        case "24 straight":
          newStraightUps["24"] = straightUps["24"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "24", currentBetValue]]);
          break;
        case "24-27 split":
          newSplits["24-27"] = splits["24-27"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "24-27", currentBetValue]]);
          break;
        case "27 straight":
          newStraightUps["27"] = straightUps["27"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "27", currentBetValue]]);
          break;
        case "27-30 split":
          newSplits["27-30"] = splits["27-30"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "27-30", currentBetValue]]);
          break;
        case "30 straight":
          newStraightUps["30"] = straightUps["30"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "30", currentBetValue]]);
          break;
        case "30-33 split":
          newSplits["30-33"] = splits["30-33"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "30-33", currentBetValue]]);
          break;
        case "33 straight":
          newStraightUps["33"] = straightUps["33"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "33", currentBetValue]]);
          break;
        case "33-36 split":
          newSplits["33-36"] = splits["33-36"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "33-36", currentBetValue]]);
          break;
        case "36 straight":
          newStraightUps["36"] = straightUps["36"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "36", currentBetValue]]);
          break;
        case "3rd column":
          newColumns["3rd column"] = columns["3rd column"] + currentBetValue;
          setColumns({...newColumns});
          setRecentBets([...recentBets, [betType, "3rd column", currentBetValue]]);
          break;
        case "00-2-3 street":
          newStreets["00-2-3"] = streets["00-2-3"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "00-2-3", currentBetValue]]);
          break;
        case "2-3 split":
          newSplits["2-3"] = splits["2-3"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "2-3", currentBetValue]]);
          break;
        case "2-3-5-6 corner":
          newCorners["2-3-5-6"] = corners["2-3-5-6"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "2-3-5-6", currentBetValue]]);
          break;
        case "5-6 split":
          newSplits["5-6"] = splits["5-6"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "5-6", currentBetValue]]);
          break;
        case "5-6-8-9 corner":
          newCorners["5-6-8-9"] = corners["5-6-8-9"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "5-6-8-9", currentBetValue]]);
          break;
        case "8-9 split":
          newSplits["8-9"] = splits["8-9"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "8-9", currentBetValue]]);
          break;
        case "8-9-11-12 corner":
          newCorners["8-9-11-12"] = corners["8-9-11-12"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "8-9-11-12", currentBetValue]]);
          break;
        case "11-12 split":
          newSplits["11-12"] = splits["11-12"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "11-12", currentBetValue]]);
          break;
        case "11-12-14-15 corner":
          newCorners["11-12-14-15"] = corners["11-12-14-15"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "11-12-14-15", currentBetValue]]);
          break;
        case "14-15 split":
          newSplits["14-15"] = splits["14-15"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "14-15", currentBetValue]]);
          break;
        case "14-15-17-18 corner":
          newCorners["14-15-17-18"] = corners["14-15-17-18"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "14-15-17-18", currentBetValue]]);
          break;
        case "17-18 split":
          newSplits["17-18"] = splits["17-18"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "17-18", currentBetValue]]);
          break;
        case "17-18-20-21 corner":
          newCorners["17-18-20-21"] = corners["17-18-20-21"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "17-18-20-21", currentBetValue]]);
          break;
        case "20-21 split":
          newSplits["20-21"] = splits["20-21"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "20-21", currentBetValue]]);
          break;
        case "20-21-23-24 corner":
          newCorners["20-21-23-24"] = corners["20-21-23-24"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "20-21-23-24", currentBetValue]]);
          break;
        case "23-24 split":
          newSplits["23-24"] = splits["23-24"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "23-24", currentBetValue]]);
          break;
        case "23-24-26-27 corner":
          newCorners["23-24-26-27"] = corners["23-24-26-27"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "23-24-26-27", currentBetValue]]);
          break;
        case "26-27 split":
          newSplits["26-27"] = splits["26-27"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "26-27", currentBetValue]]);
          break;
        case "26-27-29-30 corner":
          newCorners["26-27-29-30"] = corners["26-27-29-30"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "26-27-29-30", currentBetValue]]);
          break;
        case "29-30 split":
          newSplits["29-30"] = splits["29-30"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "29-30", currentBetValue]]);
          break;
        case "29-30-32-33 corner":
          newCorners["29-30-32-33"] = corners["29-30-32-33"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "29-30-32-33", currentBetValue]]);
          break;
        case "32-33 split":
          newSplits["32-33"] = splits["32-33"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "32-33", currentBetValue]]);
          break;
        case "32-33-35-36 corner":
          newCorners["32-33-35-36"] = corners["32-33-35-36"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "32-33-35-36", currentBetValue]]);
          break;
        case "35-36 split":
          newSplits["35-36"] = splits["35-36"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "35-36", currentBetValue]]);
          break;
        case "0-00-2 street":
          newStreets["0-00-2"] = streets["0-00-2"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "0-00-2", currentBetValue]]);
          break;
        case "2 straight":
          newStraightUps["2"] = straightUps["2"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "2", currentBetValue]]);
          break;
        case "2-5 split":
          newSplits["2-5"] = splits["2-5"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "2-5", currentBetValue]]);
          break;
        case "5 straight":
          newStraightUps["5"] = straightUps["5"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "5", currentBetValue]]);
          break;
        case "5-8 split":
          newSplits["5-8"] = splits["5-8"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "5-8", currentBetValue]]);
          break;
        case "8 straight":
          newStraightUps["8"] = straightUps["8"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "8", currentBetValue]]);
          break;
        case "8-11 split":
          newSplits["8-11"] = splits["8-11"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "8-11", currentBetValue]]);
          break;
        case "11 straight":
          newStraightUps["11"] = straightUps["11"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "11", currentBetValue]]);
          break;
        case "11-14 split":
          newSplits["11-14"] = splits["11-14"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "11-14", currentBetValue]]);
          break;
        case "14 straight":
          newStraightUps["14"] = straightUps["14"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "14", currentBetValue]]);
          break;
        case "14-17 split":
          newSplits["14-17"] = splits["14-17"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "14-17", currentBetValue]]);
          break;
        case "17 straight":
          newStraightUps["17"] = straightUps["17"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "17", currentBetValue]]);
          break;
        case "17-20 split":
          newSplits["17-20"] = splits["17-20"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "17-20", currentBetValue]]);
          break;
        case "20 straight":
          newStraightUps["20"] = straightUps["20"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "20", currentBetValue]]);
          break;
        case "20-23 split":
          newSplits["20-23"] = splits["20-23"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "20-23", currentBetValue]]);
          break;
        case "23 straight":
          newStraightUps["23"] = straightUps["23"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "23", currentBetValue]]);
          break;
        case "23-26 split":
          newSplits["23-26"] = splits["23-26"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "23-26", currentBetValue]]);
          break;
        case "26 straight":
          newStraightUps["26"] = straightUps["26"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "26", currentBetValue]]);
          break;
        case "26-29 split":
          newSplits["26-29"] = splits["26-29"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "26-29", currentBetValue]]);
          break;
        case "29 straight":
          newStraightUps["29"] = straightUps["29"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "29", currentBetValue]]);
          break;
        case "29-32 split":
          newSplits["29-32"] = splits["29-32"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "29-32", currentBetValue]]);
          break;
        case "32 straight":
          newStraightUps["32"] = straightUps["32"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "32", currentBetValue]]);
          break;
        case "32-35 split":
          newSplits["32-35"] = splits["32-35"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "32-35", currentBetValue]]);
          break;
        case "35 straight":
          newStraightUps["35"] = straightUps["35"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "35", currentBetValue]]);
          break;
        case "2nd column":
          newColumns["2nd column"] = columns["2nd column"] + currentBetValue;
          setColumns({...newColumns});
          setRecentBets([...recentBets, [betType, "2nd column", currentBetValue]]);
          break;
        case "basket":
          setBasket(basket + currentBetValue);
          setRecentBets([...recentBets, ["basket", null, currentBetValue]]);
          break;
        case "0-1-2 street":
          newStreets["0-1-2"] = streets["0-1-2"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "0-1-2", currentBetValue]]);
          break;
        case "1-2 split":
          newSplits["1-2"] = splits["1-2"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "1-2", currentBetValue]]);
          break;
        case "1-2-4-5 corner":
          newCorners["1-2-4-5"] = corners["1-2-4-5"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "1-2-4-5", currentBetValue]]);
          break;
        case "4-5 split":
          newSplits["4-5"] = splits["4-5"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "4-5", currentBetValue]]);
          break;
        case "4-5-7-8 corner":
          newCorners["4-5-7-8"] = corners["4-5-7-8"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "4-5-7-8", currentBetValue]]);
          break;
        case "7-8 split":
          newSplits["7-8"] = splits["7-8"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "7-8", currentBetValue]]);
          break;
        case "7-8-10-11 corner":
          newCorners["7-8-10-11"] = corners["7-8-10-11"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "7-8-10-11", currentBetValue]]);
          break;
        case "10-11 split":
          newSplits["10-11"] = splits["10-11"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "10-11", currentBetValue]]);
          break;
        case "10-11-13-14 corner":
          newCorners["10-11-13-14"] = corners["10-11-13-14"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "10-11-13-14", currentBetValue]]);
          break;
        case "13-14 split":
          newSplits["13-14"] = splits["13-14"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "13-14", currentBetValue]]);
          break;
        case "13-14-16-17 corner":
          newCorners["13-14-16-17"] = corners["13-14-16-17"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "13-14-16-17", currentBetValue]]);
          break;
        case "16-17 split":
          newSplits["16-17"] = splits["16-17"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "16-17", currentBetValue]]);
          break;
        case "16-17-19-20 corner":
          newCorners["16-17-19-20"] = corners["16-17-19-20"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "16-17-19-20", currentBetValue]]);
          break;
        case "19-20 split":
          newSplits["19-20"] = splits["19-20"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "19-20", currentBetValue]]);
          break;
        case "19-20-22-23 corner":
          newCorners["19-20-22-23"] = corners["19-20-22-23"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "19-20-22-23", currentBetValue]]);
          break;
        case "22-23 split":
          newSplits["22-23"] = splits["22-23"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "22-23", currentBetValue]]);
          break;
        case "22-23-25-26 corner":
          newCorners["22-23-25-26"] = corners["22-23-25-26"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "22-23-25-26", currentBetValue]]);
          break;
        case "25-26 split":
          newSplits["25-26"] = splits["25-26"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "25-26", currentBetValue]]);
          break;
        case "25-26-28-29 corner":
          newCorners["25-26-28-29"] = corners["25-26-28-29"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "25-26-28-29", currentBetValue]]);
          break;
        case "28-29 split":
          newSplits["28-29"] = splits["28-29"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "28-29", currentBetValue]]);
          break;
        case "28-29-31-32 corner":
          newCorners["28-29-31-32"] = corners["28-29-31-32"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "28-29-31-32", currentBetValue]]);
          break;
        case "31-32 split":
          newSplits["31-32"] = splits["31-32"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "31-32", currentBetValue]]);
          break;
        case "31-32-34-35 corner":
          newCorners["31-32-34-35"] = corners["31-32-34-35"] + currentBetValue;
          setCorners({...newCorners});
          setRecentBets([...recentBets, [betType, "31-32-34-35", currentBetValue]]);
          break;
        case "34-35 split":
          newSplits["34-35"] = splits["34-35"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "34-35", currentBetValue]]);
          break;
        case "0-1 split":
          newSplits["0-1"] = splits["0-1"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "0-1", currentBetValue]]);
          break;
        case "1 straight":
          newStraightUps["1"] = straightUps["1"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "1", currentBetValue]]);
          break;
        case "1-4 split":
          newSplits["1-4"] = splits["1-4"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "1-4", currentBetValue]]);
          break;
        case "4 straight":
          newStraightUps["4"] = straightUps["4"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "4", currentBetValue]]);
          break;
        case "4-7 split":
          newSplits["4-7"] = splits["4-7"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "4-7", currentBetValue]]);
          break;
        case "7 straight":
          newStraightUps["7"] = straightUps["7"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "7", currentBetValue]]);
          break;
        case "7-10 split":
          newSplits["7-10"] = splits["7-10"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "7-10", currentBetValue]]);
          break;
        case "10 straight":
          newStraightUps["10"] = straightUps["10"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "10", currentBetValue]]);
          break;
        case "10-13 split":
          newSplits["10-13"] = splits["10-13"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "10-13", currentBetValue]]);
          break;
        case "13 straight":
          newStraightUps["13"] = straightUps["13"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "13", currentBetValue]]);
          break;
        case "13-16 split":
          newSplits["13-16"] = splits["13-16"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "13-16", currentBetValue]]);
          break;
        case "16 straight":
          newStraightUps["16"] = straightUps["16"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "16", currentBetValue]]);
          break;
        case "16-19 split":
          newSplits["16-19"] = splits["16-19"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "16-19", currentBetValue]]);
          break;
        case "19 straight":
          newStraightUps["19"] = straightUps["19"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "19", currentBetValue]]);
          break;
        case "19-22 split":
          newSplits["19-22"] = splits["19-22"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "19-22", currentBetValue]]);
          break;
        case "22 straight":
          newStraightUps["22"] = straightUps["22"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "22", currentBetValue]]);
          break;
        case "22-25 split":
          newSplits["22-25"] = splits["22-25"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "22-25", currentBetValue]]);
          break;
        case "25 straight":
          newStraightUps["25"] = straightUps["25"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "25", currentBetValue]]);
          break;
        case "25-28 split":
          newSplits["25-28"] = splits["25-28"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "25-28", currentBetValue]]);
          break;
        case "28 straight":
          newStraightUps["28"] = straightUps["28"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "28", currentBetValue]]);
          break;
        case "28-31 split":
          newSplits["28-31"] = splits["28-31"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "28-31", currentBetValue]]);
          break;
        case "31 straight":
          newStraightUps["31"] = straightUps["31"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "31", currentBetValue]]);
          break;
        case "31-34 split":
          newSplits["31-34"] = splits["31-34"] + currentBetValue;
          setSplits({...newSplits});
          setRecentBets([...recentBets, [betType, "31-34", currentBetValue]]);
          break;
        case "34 straight":
          newStraightUps["34"] = straightUps["34"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setRecentBets([...recentBets, [betType, "34", currentBetValue]]);
          break;
        case "1st column":
          newColumns["1st column"] = columns["1st column"] + currentBetValue;
          setColumns({...newColumns});
          setRecentBets([...recentBets, [betType, "1st column", currentBetValue]]);
          break;
        case "1-2-3 street":
          newStreets["1-2-3"] = streets["1-2-3"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "1-2-3", currentBetValue]]);
          break;
        case "1 to 6 double-street":
          newDoubleStreets["1 to 6"] = doubleStreets["1 to 6"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "1 to 6", currentBetValue]]);
          break;
        case "4-5-6 street":
          newStreets["4-5-6"] = streets["4-5-6"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "4-5-6", currentBetValue]]);
          break;
        case "4 to 9 double-street":
          newDoubleStreets["4 to 9"] = doubleStreets["4 to 9"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "4 to 9", currentBetValue]]);
          break;
        case "7-8-9 street":
          newStreets["7-8-9"] = streets["7-8-9"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "7-8-9", currentBetValue]]);
          break;
        case "7 to 12 double-street":
          newDoubleStreets["7 to 12"] = doubleStreets["7 to 12"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "7 to 12", currentBetValue]]);
          break;
        case "10-11-12 street":
          newStreets["10-11-12"] = streets["10-11-12"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "10-11-12", currentBetValue]]);
          break;
        case "10 to 15 double-street":
          newDoubleStreets["10 to 15"] = doubleStreets["10 to 15"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "10 to 15", currentBetValue]]);
          break;
        case "13-14-15 street":
          newStreets["13-14-15"] = streets["13-14-15"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "13-14-15", currentBetValue]]);
          break;
        case "13 to 18 double-street":
          newDoubleStreets["13 to 18"] = doubleStreets["13 to 18"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "13 to 18", currentBetValue]]);
          break;
        case "16-17-18 street":
          newStreets["16-17-18"] = streets["16-17-18"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "16-17-18", currentBetValue]]);
          break;
        case "16 to 21 double-street":
          newDoubleStreets["16 to 21"] = doubleStreets["16 to 21"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "16 to 21", currentBetValue]]);
          break;
        case "19-20-21 street":
          newStreets["19-20-21"] = streets["19-20-21"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "19-20-21", currentBetValue]]);
          break;
        case "19 to 24 double-street":
          newDoubleStreets["19 to 24"] = doubleStreets["19 to 24"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "19 to 24", currentBetValue]]);
          break;
        case "22-23-24 street":
          newStreets["22-23-24"] = streets["22-23-24"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "22-23-24", currentBetValue]]);
          break;
        case "22 to 27 double-street":
          newDoubleStreets["22 to 27"] = doubleStreets["22 to 27"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "22 to 27", currentBetValue]]);
          break;
        case "25-26-27 street":
          newStreets["25-26-27"] = streets["25-26-27"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "25-26-27", currentBetValue]]);
          break;
        case "25 to 30 double-street":
          newDoubleStreets["25 to 30"] = doubleStreets["25 to 30"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "25 to 30", currentBetValue]]);
          break;
        case "28-29-30 street":
          newStreets["28-29-30"] = streets["28-29-30"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "28-29-30", currentBetValue]]);
          break;
        case "28 to 33 double-street":
          newDoubleStreets["28 to 33"] = doubleStreets["28 to 33"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "28 to 33", currentBetValue]]);
          break;
        case "31-32-33 street":
          newStreets["31-32-33"] = streets["31-32-33"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "31-32-33", currentBetValue]]);
          break;
        case "31-36 double-street":
          newDoubleStreets["31 to 36"] = doubleStreets["31 to 36"] + currentBetValue;
          setDoubleStreets({...newDoubleStreets});
          setRecentBets([...recentBets, [betType, "31 to 36", currentBetValue]]);
          break;
        case "34-35-36 street":
          newStreets["34-35-36"] = streets["34-35-36"] + currentBetValue;
          setStreets({...newStreets});
          setRecentBets([...recentBets, [betType, "34-35-36", currentBetValue]]);
          break;
        case "1st dozen":
          newDozens["1st dozen"] = dozens["1st dozen"] + currentBetValue;
          setDozens({...newDozens});
          setRecentBets([...recentBets, [betType, "1st dozen", currentBetValue]]);
          break;
        case "2nd dozen":
          newDozens["2nd dozen"] = dozens["2nd dozen"] + currentBetValue;
          setDozens({...newDozens});
          setRecentBets([...recentBets, [betType, "2nd dozen", currentBetValue]]);
          break;
        case "3rd dozen":
          newDozens["3rd dozen"] = dozens["3rd dozen"] + currentBetValue;
          setDozens({...newDozens});
          setRecentBets([...recentBets, [betType, "3rd dozen", currentBetValue]]);
          break;
        case "low":
          newHighLow["low"] = newHighLow["low"] + currentBetValue;
          setHighLow({...newHighLow});
          setRecentBets([...recentBets, [betType, "low", currentBetValue]]);
          break;
        case "odd":
          newOddEven["odd"] = newOddEven["odd"] + currentBetValue;
          setOddEven({...newOddEven});
          setRecentBets([...recentBets, [betType, "odd", currentBetValue]]);
          break;
        case "red":
          newRedBlack["red"] = redBlack["red"] + currentBetValue;
          setRedBlack({...newRedBlack});
          setRecentBets([...recentBets, [betType, "red", currentBetValue]]);
          break;
        case "black":
          newRedBlack["black"] = newRedBlack["black"] + currentBetValue;
          setRedBlack({...newRedBlack});
          setRecentBets([...recentBets, [betType, "black", currentBetValue]]);
          break;
        case "even":
          newOddEven["even"] = newOddEven["even"] + currentBetValue;
          setOddEven({...newOddEven});
          setRecentBets([...recentBets, [betType, "even", currentBetValue]]);
          break;
        case "high":
          newHighLow["high"] = newHighLow["high"] + currentBetValue;
          setHighLow({...newHighLow});
          setRecentBets([...recentBets, [betType, "high", currentBetValue]]);
          break;
        default: 
          console.log("Something went wrong in Betting Options > increaseBet() > switch statement")
          break;
      }
      setChipCount(chipCount - currentBetValue);
      setPendingTotalBet(pendingTotalBet + currentBetValue);
    }
  };

  return (
    <div
      className="layout-div"
      id={
        currentBetValue === 1
          ? "one-chip-cursor"
          : currentBetValue === 5
          ? "five-chip-cursor"
          : currentBetValue === 25
          ? "twenty-five-chip-cursor"
          : currentBetValue === 100
          ? "one-hundred-chip-cursor"
          : currentBetValue === 500
          ? "five-hundred-chip-cursor"
          : currentBetValue === 1000
          ? "one-thousand-chip-cursor"
          : currentBetValue === 10000
          ? "ten-thousand-chip-cursor"
          : currentBetValue === 50000
          ? "fifty-thousand-chip-cursor"
          : currentBetValue === 100000
          ? "hundred-thousand-chip-cursor"
          : currentBetValue === 500000
          ? "five-hundred-thousand-chip-cursor"
          : currentBetValue === 1000000
          ? "one-million-chip-cursor"
          : "default"
      }
    >
      <div className="zeroes-inside-columns">
        <section className="zeroes">
          <div
            className={
              winningNumber === "00" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("00 straight")}
          >
            <div className="number green">
              {straightUps["00"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["00"]}</p>
                </div>
              ) : (
                <></>
              )}
              00
            </div>
          </div>
          <div
            className="bet-box split"
            id="split"
            onClick={() => increaseBet("0-00 split")}
          >
            {splits["0-00"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["0-00"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "0" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("0 straight")}
          >
            <div className="number green">
              {straightUps["0"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["0"]}</p>
                </div>
              ) : (
                <></>
              )}
              0
            </div>
          </div>
        </section>
        <section className="inside-and-columns">
          <div
            className="bet-box split"
            onClick={() => increaseBet("00-3 split")}
          >
            {splits["00-3"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["00-3"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "3" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("3 straight")}
          >
            <div className="number red">
              {straightUps["3"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["3"]}</p>
                </div>
              ) : (
                <></>
              )}
              3
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("3-6 split")}
          >
            {splits["3-6"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["3-6"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "6" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("6 straight")}
          >
            <div className="number black">
              {straightUps["6"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["6"]}</p>
                </div>
              ) : (
                <></>
              )}
              6
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("6-9 split")}
          >
            {splits["6-9"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["6-9"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "9" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("9 straight")}
          >
            <div className="number red">
              {straightUps["9"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["9"]}</p>
                </div>
              ) : (
                <></>
              )}
              9
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("9-12 split")}
          >
            {splits["9-12"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["9-12"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "12" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("12 straight")}
          >
            <div className="number red">
              {straightUps["12"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["12"]}</p>
                </div>
              ) : (
                <></>
              )}
              12
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("12-15 split")}
          >
            {splits["12-15"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["12-15"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "15" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("15 straight")}
          >
            <div className="number black">
              {straightUps["15"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["15"]}</p>
                </div>
              ) : (
                <></>
              )}
              15
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("15-18 split")}
          >
            {splits["15-18"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["15-18"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "18" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("18 straight")}
          >
            <div className="number red">
              {straightUps["18"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["18"]}</p>
                </div>
              ) : (
                <></>
              )}
              18
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("18-21 split")}
          >
            {splits["18-21"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["18-21"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "21" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("21 straight")}
          >
            <div className="number red">
              {straightUps["21"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["21"]}</p>
                </div>
              ) : (
                <></>
              )}
              21
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("21-24 split")}
          >
            {splits["21-24"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["21-24"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "24" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("24 straight")}
          >
            <div className="number black">
              {straightUps["24"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["24"]}</p>
                </div>
              ) : (
                <></>
              )}
              24
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("24-27 split")}
          >
            {splits["24-27"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["24-27"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "27" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("27 straight")}
          >
            <div className="number red">
              {straightUps["27"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["27"]}</p>
                </div>
              ) : (
                <></>
              )}
              27
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("27-30 split")}
          >
            {splits["27-30"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["27-30"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "30" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("30 straight")}
          >
            <div className="number red">
              {straightUps["30"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["30"]}</p>
                </div>
              ) : (
                <></>
              )}
              30
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("30-33 split")}
          >
            {splits["30-33"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["30-33"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "33" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("33 straight")}
          >
            <div className="number black">
              {straightUps["33"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["33"]}</p>
                </div>
              ) : (
                <></>
              )}
              33
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("33-36 split")}
          >
            {splits["33-36"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["33-36"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "36" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("36 straight")}
          >
            <div className="number red">
              {straightUps["36"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["36"]}</p>
                </div>
              ) : (
                <></>
              )}
              36
            </div>
          </div>
          <div
            className="bet-box column"
            onClick={() => increaseBet("3rd column")}
          >
            {columns["3rd column"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns["3rd column"]}</p>
              </div>
            ) : (
              <></>
            )}
            2 to 1
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("00-2-3 street")}
          >
            {streets["00-2-3"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["00-2-3"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("2-3 split")}
          >
            {splits["2-3"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["2-3"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("2-3-5-6 corner")}
          >
            {corners["2-3-5-6"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["2-3-5-6"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("5-6 split")}
          >
            {splits["5-6"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["5-6"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("5-6-8-9 corner")}
          >
            {corners["5-6-8-9"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["5-6-8-9"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("8-9 split")}
          >
            {splits["8-9"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["8-9"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("8-9-11-12 corner")}
          >
            {corners["8-9-11-12"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["8-9-11-12"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("11-12 split")}
          >
            {splits["11-12"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["11-12"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("11-12-14-15 corner")}
          >
            {corners["11-12-14-15"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["11-12-14-15"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("14-15 split")}
          >
            {splits["14-15"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["14-15"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("14-15-17-18 corner")}
          >
            {corners["14-15-17-18"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["14-15-17-18"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("17-18 split")}
          >
            {splits["17-18"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["17-18"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("17-18-20-21 corner")}
          >
            {corners["17-18-20-21"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["17-18-20-21"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("20-21 split")}
          >
            {splits["20-21"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["20-21"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("20-21-23-24 corner")}
          >
            {corners["20-21-23-24"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["20-21-23-24"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("23-24 split")}
          >
            {splits["23-24"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["23-24"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("23-24-26-27 corner")}
          >
            {corners["23-24-26-27"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["23-24-26-27"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("26-27 split")}
          >
            {splits["26-27"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["26-27"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("26-27-29-30 corner")}
          >
            {corners["26-27-29-30"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["26-27-29-30"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("29-30 split")}
          >
            {splits["29-30"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["29-30"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("29-30-32-33 corner")}
          >
            {corners["29-30-32-33"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["29-30-32-33"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("32-33 split")}
          >
            {splits["32-33"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["32-33"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("32-33-35-36 corner")}
          >
            {corners["32-33-35-36"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["32-33-35-36"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("35-36 split")}
          >
            {splits["35-36"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["35-36"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="empty fill"></div>

          <div
            className="bet-box street"
            onClick={() => increaseBet("0-00-2 street")}
          >
            {streets["0-00-2"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["0-00-2"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "2" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("2 straight")}
          >
            <div className="number black">
              {straightUps["2"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["2"]}</p>
                </div>
              ) : (
                <></>
              )}
              2
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("2-5 split")}
          >
            {splits["2-5"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["2-5"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "5" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("5 straight")}
          >
            <div className="number red">
              {straightUps["5"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["5"]}</p>
                </div>
              ) : (
                <></>
              )}
              5
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("5-8 split")}
          >
            {splits["5-8"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["5-8"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "8" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("8 straight")}
          >
            <div className="number black">
              {straightUps["8"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["8"]}</p>
                </div>
              ) : (
                <></>
              )}
              8
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("8-11 split")}
          >
            {splits["8-11"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["8-11"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "11" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("11 straight")}
          >
            <div className="number black">
              {straightUps["11"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["11"]}</p>
                </div>
              ) : (
                <></>
              )}
              11
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("11-14 split")}
          >
            {splits["11-14"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["11-14"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "14" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("14 straight")}
          >
            <div className="number red">
              {straightUps["14"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["14"]}</p>
                </div>
              ) : (
                <></>
              )}
              14
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("14-17 split")}
          >
            {splits["14-17"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["14-17"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "17" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("17 straight")}
          >
            <div className="number black">
              {straightUps["17"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["17"]}</p>
                </div>
              ) : (
                <></>
              )}
              17
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("17-20 split")}
          >
            {splits["17-20"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["17-20"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "20" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("20 straight")}
          >
            <div className="number black">
              {straightUps["20"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["20"]}</p>
                </div>
              ) : (
                <></>
              )}
              20
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("20-23 split")}
          >
            {splits["20-23"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["20-23"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "23" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("23 straight")}
          >
            <div className="number red">
              {straightUps["23"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["23"]}</p>
                </div>
              ) : (
                <></>
              )}
              23
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("23-26 split")}
          >
            {splits["23-26"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["23-26"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "26" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("26 straight")}
          >
            <div className="number black">
              {straightUps["26"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["26"]}</p>
                </div>
              ) : (
                <></>
              )}
              26
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("26-29 split")}
          >
            {splits["26-29"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["26-29"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "29" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("29 straight")}
          >
            <div className="number black">
              {straightUps["29"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["29"]}</p>
                </div>
              ) : (
                <></>
              )}
              29
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("29-32 split")}
          >
            {splits["29-32"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["29-32"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "32" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("32 straight")}
          >
            <div className="number red">
              {straightUps["32"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["32"]}</p>
                </div>
              ) : (
                <></>
              )}
              32
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("32-35 split")}
          >
            {splits["32-35"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["32-35"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "35" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("35 straight")}
          >
            <div className="number black">
              {straightUps["35"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["35"]}</p>
                </div>
              ) : (
                <></>
              )}
              35
            </div>
          </div>
          <div
            className="bet-box column"
            onClick={() => increaseBet("2nd column")}
          >
            {columns["2nd column"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns["2nd column"]}</p>
              </div>
            ) : (
              <></>
            )}
            2 to 1
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("0-1-2 street")}
          >
            {streets["0-1-2"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["0-1-2"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("1-2 split")}
          >
            {splits["1-2"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["1-2"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("1-2-4-5 corner")}
          >
            {corners["1-2-4-5"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["1-2-4-5"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("4-5 split")}
          >
            {splits["4-5"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["4-5"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("4-5-7-8 corner")}
          >
            {corners["4-5-7-8"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["4-5-7-8"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("7-8 split")}
          >
            {splits["7-8"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["7-8"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("7-8-10-11 corner")}
          >
            {corners["7-8-10-11"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["7-8-10-11"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("10-11 split")}
          >
            {splits["10-11"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["10-11"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("10-11-13-14 corner")}
          >
            {corners["10-11-13-14"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["10-11-13-14"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("13-14 split")}
          >
            {splits["13-14"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["13-14"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("13-14-16-17 corner")}
          >
            {corners["13-14-16-17"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["13-14-16-17"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("16-17 split")}
          >
            {splits["16-17"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["16-17"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("16-17-19-20 corner")}
          >
            {corners["16-17-19-20"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["16-17-19-20"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("19-20 split")}
          >
            {splits["19-20"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["19-20"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("19-20-22-23 corner")}
          >
            {corners["19-20-22-23"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["19-20-22-23"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("22-23 split")}
          >
            {splits["22-23"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["22-23"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("22-23-25-26 corner")}
          >
            {corners["22-23-25-26"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["22-23-25-26"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("25-26 split")}
          >
            {splits["25-26"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["25-26"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("25-26-28-29 corner")}
          >
            {corners["25-26-28-29"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["25-26-28-29"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("28-29 split")}
          >
            {splits["28-29"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["28-29"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("28-29-31-32 corner")}
          >
            {corners["28-29-31-32"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["28-29-31-32"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("31-32 split")}
          >
            {splits["31-32"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["31-32"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("31-32-34-35 corner")}
          >
            {corners["31-32-34-35"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners["31-32-34-35"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("34-35 split")}
          >
            {splits["34-35"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["34-35"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="empty fill"></div>

          <div
            className="bet-box split"
            onClick={() => increaseBet("0-1 split")}
          >
            {splits["0-1"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["0-1"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "1" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("1 straight")}
          >
            <div className="number red">
              {straightUps["1"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["1"]}</p>
                </div>
              ) : (
                <></>
              )}
              1
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("1-4 split")}
          >
            {splits["1-4"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["1-4"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "4" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("4 straight")}
          >
            <div className="number black">
              {straightUps["4"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["4"]}</p>
                </div>
              ) : (
                <></>
              )}
              4
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("4-7 split")}
          >
            {splits["4-7"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["4-7"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "7" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("7 straight")}
          >
            <div className="number red">
              {straightUps["7"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["7"]}</p>
                </div>
              ) : (
                <></>
              )}
              7
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("7-10 split")}
          >
            {splits["7-10"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["7-10"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "10" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("10 straight")}
          >
            <div className="number black">
              {straightUps["10"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["10"]}</p>
                </div>
              ) : (
                <></>
              )}
              10
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("10-13 split")}
          >
            {splits["10-13"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["10-13"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "13" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("13 straight")}
          >
            <div className="number black">
              {straightUps["13"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["13"]}</p>
                </div>
              ) : (
                <></>
              )}
              13
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("13-16 split")}
          >
            {splits["13-16"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["13-16"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "16" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("16 straight")}
          >
            <div className="number red">
              {straightUps["16"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["16"]}</p>
                </div>
              ) : (
                <></>
              )}
              16
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("16-19 split")}
          >
            {splits["16-19"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["16-19"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "19" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("19 straight")}
          >
            <div className="number red">
              {straightUps["19"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["19"]}</p>
                </div>
              ) : (
                <></>
              )}
              19
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("19-22 split")}
          >
            {splits["19-22"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["19-22"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "22" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("22 straight")}
          >
            <div className="number black">
              {straightUps["22"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["22"]}</p>
                </div>
              ) : (
                <></>
              )}
              22
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("22-25 split")}
          >
            {splits["22-25"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["22-25"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "25" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("25 straight")}
          >
            <div className="number red">
              {straightUps["25"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["25"]}</p>
                </div>
              ) : (
                <></>
              )}
              25
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("25-28 split")}
          >
            {splits["25-28"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["25-28"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "28" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("28 straight")}
          >
            <div className="number black">
              {straightUps["28"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["28"]}</p>
                </div>
              ) : (
                <></>
              )}
              28
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("28-31 split")}
          >
            {splits["28-31"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["28-31"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "31" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("31 straight")}
          >
            <div className="number black">
              {straightUps["31"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["31"]}</p>
                </div>
              ) : (
                <></>
              )}
              31
            </div>
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("31-34 split")}
          >
            {splits["31-34"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits["31-34"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              winningNumber === "34" && isSpinComplete
                ? "bet-box winning-num"
                : "bet-box"
            }
            id="straight-up-number"
            onClick={() => increaseBet("34 straight")}
          >
            <div className="number red">
              {straightUps["34"] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps["34"]}</p>
                </div>
              ) : (
                <></>
              )}
              34
            </div>
          </div>
          <div
            className="bet-box column"
            onClick={() => increaseBet("1st column")}
          >
            {columns["1st column"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns["1st column"]}</p>
              </div>
            ) : (
              <></>
            )}
            2 to 1
          </div>
          <div className="bet-box basket" onClick={() => increaseBet("basket")}>
            {basket > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{basket}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("1-2-3 street")}
          >
            {streets["1-2-3"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["1-2-3"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("1 to 6 double-street")}
          >
            {doubleStreets["1 to 6"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["1 to 6"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("4-5-6 street")}
          >
            {streets["4-5-6"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["4-5-6"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("4 to 9 double-street")}
          >
            {doubleStreets["4 to 9"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["4 to 9"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("7-8-9 street")}
          >
            {streets["7-8-9"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["7-8-9"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("7 to 12 double-street")}
          >
            {doubleStreets["7 to 12"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["7 to 12"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("10-11-12 street")}
          >
            {streets["10-11-12"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["10-11-12"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("10 to 15 double-street")}
          >
            {doubleStreets["10 to 15"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["10 to 15"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("13-14-15 street")}
          >
            {streets["13-14-15"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["13-14-15"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("13 to 18 double-street")}
          >
            {doubleStreets["13 to 18"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["13 to 18"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("16-17-18 street")}
          >
            {streets["16-17-18"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["16-17-18"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("16 to 21 double-street")}
          >
            {doubleStreets["16 to 21"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["16 to 21"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("19-20-21 street")}
          >
            {streets["19-20-21"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["19-20-21"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("19 to 24 double-street")}
          >
            {doubleStreets["19 to 24"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["19 to 24"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("22-23-24 street")}
          >
            {streets["22-23-24"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["22-23-24"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("22 to 27 double-street")}
          >
            {doubleStreets["22 to 27"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["22 to 27"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("25-26-27 street")}
          >
            {streets["25-26-27"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["25-26-27"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("25 to 30 double-street")}
          >
            {doubleStreets["25 to 30"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["25 to 30"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("28-29-30 street")}
          >
            {streets["28-29-30"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["28-29-30"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("28 to 33 double-street")}
          >
            {doubleStreets["28 to 33"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["28 to 33"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("31-32-33 street")}
          >
            {streets["31-32-33"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["31-32-33"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("31 to 36 double-street")}
          >
            {doubleStreets["31 to 36"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets["31 to 36"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("34-35-36 street")}
          >
            {streets["34-35-36"] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets["34-35-36"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="empty fill empty-column"></div>
        </section>
      </div>
      <section className="dozens">
        <div className="empty" id="empty-remove-border"></div>
        <div className="bet-box dozen" onClick={() => increaseBet("1st dozen")}>
          <div className="ribbon-div">
            <img alt="ribbon for dozens bet-box" src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">1 - 12</h1>
            {dozens["1st dozen"] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens["1st dozen"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          className="bet-box dozen"
          onClick={() => increaseBet("2nd dozen")}
        >
          <div className="ribbon-div">
            <img alt="ribbon for dozens bet-box" src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">13-24</h1>
            {dozens["2nd dozen"] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens["2nd dozen"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          className="bet-box right-dozen"
          onClick={() => increaseBet("3rd dozen")}
        >
          <div className="ribbon-div">
            <img alt="ribbon for dozens bet-box" src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">25-36</h1>
            {dozens["3rd dozen"] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens["3rd dozen"]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <section className="even-money-bets">
        <div className="empty" id="empty-remove-border"></div>
        <div
          className="bet-box even-money left-even-money"
          onClick={() => increaseBet("low")}
        >
          {highLow["low"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{highLow["low"]}</p>
            </div>
          ) : (
            <></>
          )}
          1 - 18
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("odd")}>
          {oddEven["odd"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{oddEven["odd"]}</p>
            </div>
          ) : (
            <></>
          )}
          Odd
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("red")}>
          {redBlack["red"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{redBlack["red"]}</p>
            </div>
          ) : (
            <></>
          )}
          <img className="diamond" alt="red diamond" src={RedDiamond}></img>
        </div>
        <div
          className="bet-box even-money"
          onClick={() => increaseBet("black")}
        >
          {redBlack["black"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{redBlack["black"]}</p>
            </div>
          ) : (
            <></>
          )}
          <img className="diamond" alt="black diamond" src={BlackDiamond}></img>
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("even")}>
          {oddEven["even"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{oddEven["even"]}</p>
            </div>
          ) : (
            <></>
          )}
          Even
        </div>
        <div
          className="bet-box right-even-money"
          onClick={() => increaseBet("high")}
        >
          {highLow["high"] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{highLow["high"]}</p>
            </div>
          ) : (
            <></>
          )}
          19 - 36
        </div>
      </section>
    </div>
  );
}
