import React from "react";
import "../stylesheets/Layout.css";
import RedDiamond from "../images/red-diamond.png";
import BlackDiamond from "../images/black-diamond.png";
import Ribbon from "../images/ribbon.png";
import BlankChip from "../images/blank-chip.png";

export default function Layout({
  chipCount,
  setChipCount,
  currentBetValue,
  isSpinComplete,
  setSplits,
  splits,
  straightUps,
  setStraightUps,
  columns,
  setColumns,
  setCorners,
  corners,
  setStreets,
  streets,
  setDoubleStreets,
  doubleStreets,
  setHighLow,
  highLow,
  setOddEven,
  oddEven,
  setRedBlack,
  redBlack,
  setDozens,
  dozens,
  setPendingTotalBet,
  pendingTotalBet,
  basket,
  setBasket,
  setRecentBet,
  setRecentBetValue,
  winningNumber,
}) {
  const increaseBet = (betToIncrease) => {
    if (
      !isSpinComplete &&
      currentBetValue <= chipCount &&
      currentBetValue > 0
    ) {
      let splitRegex = /split$/;
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
      let betTypeRegex = /[a-z]+-?[a-z]+?$|low|high/;

      switch (betToIncrease) {
        case "0-00 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[0] = splits[0] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "00 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["00"] = straightUps["00"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 37]);
          setRecentBetValue(currentBetValue);
          break;
        case "0 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["0"] = straightUps["0"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "00-3 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[2] = splits[2] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "3 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["3"] = straightUps["3"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 3]);
          setRecentBetValue(currentBetValue);
          break;
        case "3-6 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[7] = splits[7] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 7]);
          setRecentBetValue(currentBetValue);
          break;
        case "6 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["6"] = straightUps["6"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 6]);
          setRecentBetValue(currentBetValue);
          break;
        case "6-9 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[12] = splits[12] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 12]);
          setRecentBetValue(currentBetValue);
          break;
        case "9 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["9"] = straightUps["9"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 9]);
          setRecentBetValue(currentBetValue);
          break;
        case "9-12 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[17] = splits[17] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 17]);
          setRecentBetValue(currentBetValue);
          break;
        case "12 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["12"] = straightUps["12"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 12]);
          setRecentBetValue(currentBetValue);
          break;
        case "12-15 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[22] = splits[22] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 22]);
          setRecentBetValue(currentBetValue);
          break;
        case "15 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["15"] = straightUps["15"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 15]);
          setRecentBetValue(currentBetValue);
          break;
        case "15-18 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[27] = splits[27] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 27]);
          setRecentBetValue(currentBetValue);
          break;
        case "18 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["18"] = straightUps["18"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 18]);
          setRecentBetValue(currentBetValue);
          break;
        case "18-21 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[32] = splits[32] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 32]);
          setRecentBetValue(currentBetValue);
          break;
        case "21 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["21"] = straightUps["21"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 21]);
          setRecentBetValue(currentBetValue);
          break;
        case "21-24 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[37] = splits[37] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 37]);
          setRecentBetValue(currentBetValue);
          break;
        case "24 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["24"] = straightUps["24"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 24]);
          setRecentBetValue(currentBetValue);
          break;
        case "24-27 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[42] = splits[42] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 42]);
          setRecentBetValue(currentBetValue);
          break;
        case "27 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["27"] = straightUps["27"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 27]);
          setRecentBetValue(currentBetValue);
          break;
        case "27-30 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[47] = splits[47] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 47]);
          setRecentBetValue(currentBetValue);
          break;
        case "30 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["30"] = straightUps["30"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 30]);
          setRecentBetValue(currentBetValue);
          break;
        case "30-33 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[52] = splits[52] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 52]);
          setRecentBetValue(currentBetValue);
          break;
        case "33 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["33"] = straightUps["33"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 33]);
          setRecentBetValue(currentBetValue);
          break;
        case "33-36 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[57] = splits[57] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 57]);
          setRecentBetValue(currentBetValue);
          break;
        case "36 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["36"] = straightUps["36"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 36]);
          setRecentBetValue(currentBetValue);
          break;
        case "3rd column":
          setChipCount(chipCount - currentBetValue);
          newColumns[2] = columns[2] + currentBetValue;
          setColumns([...newColumns]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "00-2-3 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[0] = streets[0] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "2-3 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[4] = splits[4] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 4]);
          setRecentBetValue(currentBetValue);
          break;
        case "2-3-5-6 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[1] = corners[1] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "5-6 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[9] = splits[9] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 9]);
          setRecentBetValue(currentBetValue);
          break;
        case "5-6-8-9 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[3] = corners[3] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 3]);
          setRecentBetValue(currentBetValue);
          break;
        case "8-9 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[14] = splits[14] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 14]);
          setRecentBetValue(currentBetValue);
          break;
        case "8-9-11-12 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[5] = corners[5] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 5]);
          setRecentBetValue(currentBetValue);
          break;
        case "11-12 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[19] = splits[19] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 19]);
          setRecentBetValue(currentBetValue);
          break;
        case "11-12-14-15 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[7] = corners[7] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 7]);
          setRecentBetValue(currentBetValue);
          break;
        case "14-15 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[24] = splits[24] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 24]);
          setRecentBetValue(currentBetValue);
          break;
        case "14-15-17-18 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[9] = corners[9] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 9]);
          setRecentBetValue(currentBetValue);
          break;
        case "17-18 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[29] = splits[29] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 29]);
          setRecentBetValue(currentBetValue);
          break;
        case "17-18-20-21 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[11] = corners[11] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 11]);
          setRecentBetValue(currentBetValue);
          break;
        case "20-21 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[34] = splits[34] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 34]);
          setRecentBetValue(currentBetValue);
          break;
        case "20-21-23-24 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[13] = corners[13] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 13]);
          setRecentBetValue(currentBetValue);
          break;
        case "23-24 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[39] = splits[39] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 39]);
          setRecentBetValue(currentBetValue);
          break;
        case "23-24-26-27 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[15] = corners[15] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 15]);
          setRecentBetValue(currentBetValue);
          break;
        case "26-27 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[44] = splits[44] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 44]);
          setRecentBetValue(currentBetValue);
          break;
        case "26-27-29-30 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[17] = corners[17] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 17]);
          setRecentBetValue(currentBetValue);
          break;
        case "29-30 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[49] = splits[49] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 49]);
          setRecentBetValue(currentBetValue);
          break;
        case "29-30-32-33 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[19] = corners[19] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 19]);
          setRecentBetValue(currentBetValue);
          break;
        case "32-33 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[54] = splits[54] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 54]);
          setRecentBetValue(currentBetValue);
          break;
        case "32-33-35-36 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[21] = corners[21] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 21]);
          setRecentBetValue(currentBetValue);
          break;
        case "35-36 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[59] = splits[59] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 59]);
          setRecentBetValue(currentBetValue);
          break;
        case "0-00-2 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[1] = streets[1] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "2 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["2"] = straightUps["2"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "2-5 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[6] = splits[6] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 6]);
          setRecentBetValue(currentBetValue);
          break;
        case "5 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["5"] = straightUps["5"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 5]);
          setRecentBetValue(currentBetValue);
          break;
        case "5-8 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[11] = splits[11] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 11]);
          setRecentBetValue(currentBetValue);
          break;
        case "8 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["8"] = straightUps["8"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 8]);
          setRecentBetValue(currentBetValue);
          break;
        case "8-11 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[16] = splits[16] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 16]);
          setRecentBetValue(currentBetValue);
          break;
        case "11 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["11"] = straightUps["11"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 11]);
          setRecentBetValue(currentBetValue);
          break;
        case "11-14 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[21] = splits[21] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 21]);
          setRecentBetValue(currentBetValue);
          break;
        case "14 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["14"] = straightUps["14"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 14]);
          setRecentBetValue(currentBetValue);
          break;
        case "14-17 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[26] = splits[26] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 26]);
          setRecentBetValue(currentBetValue);
          break;
        case "17 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["17"] = straightUps["17"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 17]);
          setRecentBetValue(currentBetValue);
          break;
        case "17-20 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[31] = splits[31] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 31]);
          setRecentBetValue(currentBetValue);
          break;
        case "20 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["20"] = straightUps["20"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 20]);
          setRecentBetValue(currentBetValue);
          break;
        case "20-23 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[36] = splits[36] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 36]);
          setRecentBetValue(currentBetValue);
          break;
        case "23 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["23"] = straightUps["23"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 23]);
          setRecentBetValue(currentBetValue);
          break;
        case "23-26 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[41] = splits[41] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 41]);
          setRecentBetValue(currentBetValue);
          break;
        case "26 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["26"] = straightUps["26"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 26]);
          setRecentBetValue(currentBetValue);
          break;
        case "26-29 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[46] = splits[46] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 46]);
          setRecentBetValue(currentBetValue);
          break;
        case "29 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["29"] = straightUps["29"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 29]);
          setRecentBetValue(currentBetValue);
          break;
        case "29-32 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[51] = splits[51] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 51]);
          setRecentBetValue(currentBetValue);
          break;
        case "32 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["32"] = straightUps["32"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 32]);
          setRecentBetValue(currentBetValue);
          break;
        case "32-35 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[56] = splits[56] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 56]);
          setRecentBetValue(currentBetValue);
          break;
        case "35 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["35"] = straightUps["35"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 35]);
          setRecentBetValue(currentBetValue);
          break;
        case "2nd column":
          setChipCount(chipCount - currentBetValue);
          newColumns[1] = columns[1] + currentBetValue;
          setColumns([...newColumns]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "basket":
          setChipCount(chipCount - currentBetValue);
          setBasket(basket + currentBetValue);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet(["basket", null]);
          setRecentBetValue(currentBetValue);
          break;
        case "0-1-2 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[2] = streets[2] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "1-2 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[3] = splits[3] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 3]);
          setRecentBetValue(currentBetValue);
          break;
        case "1-2-4-5 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[0] = corners[0] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "4-5 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[8] = splits[8] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 8]);
          setRecentBetValue(currentBetValue);
          break;
        case "4-5-7-8 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[2] = corners[2] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "7-8 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[13] = splits[13] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 13]);
          setRecentBetValue(currentBetValue);
          break;
        case "7-8-10-11 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[4] = corners[4] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 4]);
          setRecentBetValue(currentBetValue);
          break;
        case "10-11 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[18] = splits[18] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 18]);
          setRecentBetValue(currentBetValue);
          break;
        case "10-11-13-14 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[6] = corners[6] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 6]);
          setRecentBetValue(currentBetValue);
          break;
        case "13-14 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[23] = splits[23] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 23]);
          setRecentBetValue(currentBetValue);
          break;
        case "13-14-16-17 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[8] = corners[8] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 8]);
          setRecentBetValue(currentBetValue);
          break;
        case "16-17 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[28] = splits[28] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 28]);
          setRecentBetValue(currentBetValue);
          break;
        case "16-17-19-20 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[10] = corners[10] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 10]);
          setRecentBetValue(currentBetValue);
          break;
        case "19-20 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[33] = splits[33] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 33]);
          setRecentBetValue(currentBetValue);
          break;
        case "19-20-22-23 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[12] = corners[12] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 12]);
          setRecentBetValue(currentBetValue);
          break;
        case "22-23 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[38] = splits[38] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 38]);
          setRecentBetValue(currentBetValue);
          break;
        case "22-23-25-26 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[14] = corners[14] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 14]);
          setRecentBetValue(currentBetValue);
          break;
        case "25-26 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[43] = splits[43] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 43]);
          setRecentBetValue(currentBetValue);
          break;
        case "25-26-28-29 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[16] = corners[16] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 16]);
          setRecentBetValue(currentBetValue);
          break;
        case "28-29 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[48] = splits[48] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 48]);
          setRecentBetValue(currentBetValue);
          break;
        case "28-29-31-32 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[18] = corners[18] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 18]);
          setRecentBetValue(currentBetValue);
          break;
        case "31-32 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[53] = splits[53] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 53]);
          setRecentBetValue(currentBetValue);
          break;
        case "31-32-34-35 corner":
          setChipCount(chipCount - currentBetValue);
          newCorners[20] = corners[20] + currentBetValue;
          setCorners([...newCorners]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 20]);
          setRecentBetValue(currentBetValue);
          break;
        case "34-35 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[58] = splits[58] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 58]);
          setRecentBetValue(currentBetValue);
          break;
        case "0-1 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[1] = splits[1] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "1 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["1"] = straightUps["1"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "1-4 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[5] = splits[5] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 5]);
          setRecentBetValue(currentBetValue);
          break;
        case "4 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["4"] = straightUps["4"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 4]);
          setRecentBetValue(currentBetValue);
          break;
        case "4-7 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[10] = splits[10] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 10]);
          setRecentBetValue(currentBetValue);
          break;
        case "7 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["7"] = straightUps["7"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 7]);
          setRecentBetValue(currentBetValue);
          break;
        case "7-10 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[15] = splits[15] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 15]);
          setRecentBetValue(currentBetValue);
          break;
        case "10 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["10"] = straightUps["10"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 10]);
          setRecentBetValue(currentBetValue);
          break;
        case "10-13 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[20] = splits[20] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 20]);
          setRecentBetValue(currentBetValue);
          break;
        case "13 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["13"] = straightUps["13"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 13]);
          setRecentBetValue(currentBetValue);
          break;
        case "13-16 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[25] = splits[25] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 25]);
          setRecentBetValue(currentBetValue);
          break;
        case "16 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["16"] = straightUps["16"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 16]);
          setRecentBetValue(currentBetValue);
          break;
        case "16-19 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[30] = splits[30] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 30]);
          setRecentBetValue(currentBetValue);
          break;
        case "19 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["19"] = straightUps["19"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 19]);
          setRecentBetValue(currentBetValue);
          break;
        case "19-22 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[35] = splits[35] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 35]);
          setRecentBetValue(currentBetValue);
          break;
        case "22 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["22"] = straightUps["22"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 22]);
          setRecentBetValue(currentBetValue);
          break;
        case "22-25 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[40] = splits[40] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 40]);
          setRecentBetValue(currentBetValue);
          break;
        case "25 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["25"] = straightUps["25"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 25]);
          setRecentBetValue(currentBetValue);
          break;
        case "25-28 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[45] = splits[45] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 45]);
          setRecentBetValue(currentBetValue);
          break;
        case "28 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["28"] = straightUps["28"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 28]);
          setRecentBetValue(currentBetValue);
          break;
        case "28-31 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[50] = splits[50] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 50]);
          setRecentBetValue(currentBetValue);
          break;
        case "31 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["31"] = straightUps["31"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 31]);
          setRecentBetValue(currentBetValue);
          break;
        case "31-34 split":
          setChipCount(chipCount - currentBetValue);
          newSplits[55] = splits[55] + currentBetValue;
          setSplits([...newSplits]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 55]);
          setRecentBetValue(currentBetValue);
          break;
        case "34 straight":
          setChipCount(chipCount - currentBetValue);
          newStraightUps["34"] = straightUps["34"] + currentBetValue;
          setStraightUps({...newStraightUps});
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 34]);
          setRecentBetValue(currentBetValue);
          break;
        case "1st column":
          setChipCount(chipCount - currentBetValue);
          newColumns[0] = columns[0] + currentBetValue;
          setColumns([...newColumns]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "1-2-3 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[3] = streets[3] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 3]);
          setRecentBetValue(currentBetValue);
          break;
        case "1 to 6 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[0] = doubleStreets[0] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "4-5-6 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[4] = streets[4] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 4]);
          setRecentBetValue(currentBetValue);
          break;
        case "4 to 9 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[1] = doubleStreets[1] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "7-8-9 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[5] = streets[5] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 5]);
          setRecentBetValue(currentBetValue);
          break;
        case "7 to 12 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[2] = doubleStreets[2] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "10-11-12 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[6] = streets[6] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 6]);
          setRecentBetValue(currentBetValue);
          break;
        case "10 to 15 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[3] = doubleStreets[3] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 3]);
          setRecentBetValue(currentBetValue);
          break;
        case "13-14-15 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[7] = streets[7] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 7]);
          setRecentBetValue(currentBetValue);
          break;
        case "13 to 18 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[4] = doubleStreets[4] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 4]);
          setRecentBetValue(currentBetValue);
          break;
        case "16-17-18 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[8] = streets[8] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 8]);
          setRecentBetValue(currentBetValue);
          break;
        case "16 to 21 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[5] = doubleStreets[5] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 5]);
          setRecentBetValue(currentBetValue);
          break;
        case "19-20-21 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[9] = streets[9] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 9]);
          setRecentBetValue(currentBetValue);
          break;
        case "19 to 24 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[6] = doubleStreets[6] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 6]);
          setRecentBetValue(currentBetValue);
          break;
        case "22-23-24 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[10] = streets[10] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 10]);
          setRecentBetValue(currentBetValue);
          break;
        case "22 to 27 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[7] = doubleStreets[7] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 7]);
          setRecentBetValue(currentBetValue);
          break;
        case "25-26-27 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[11] = streets[11] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 11]);
          setRecentBetValue(currentBetValue);
          break;
        case "25 to 30 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[8] = doubleStreets[8] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 8]);
          setRecentBetValue(currentBetValue);
          break;
        case "28-29-30 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[12] = streets[12] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 12]);
          setRecentBetValue(currentBetValue);
          break;
        case "28 to 33 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[9] = doubleStreets[9] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 9]);
          setRecentBetValue(currentBetValue);
          break;
        case "31-32-33 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[13] = streets[13] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 13]);
          setRecentBetValue(currentBetValue);
          break;
        case "31-36 double-street":
          setChipCount(chipCount - currentBetValue);
          newDoubleStreets[10] = doubleStreets[10] + currentBetValue;
          setDoubleStreets([...newDoubleStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 10]);
          setRecentBetValue(currentBetValue);
          break;
        case "34-35-36 street":
          setChipCount(chipCount - currentBetValue);
          newStreets[14] = streets[14] + currentBetValue;
          setStreets([...newStreets]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 14]);
          setRecentBetValue(currentBetValue);
          break;
        case "1st dozen":
          setChipCount(chipCount - currentBetValue);
          newDozens[0] = dozens[0] + currentBetValue;
          setDozens([...newDozens]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "2nd dozen":
          setChipCount(chipCount - currentBetValue);
          newDozens[1] = dozens[1] + currentBetValue;
          setDozens([...newDozens]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "3rd dozen":
          setChipCount(chipCount - currentBetValue);
          newDozens[2] = dozens[2] + currentBetValue;
          setDozens([...newDozens]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 2]);
          setRecentBetValue(currentBetValue);
          break;
        case "low":
          setChipCount(chipCount - currentBetValue);
          newHighLow[0] = newHighLow[0] + currentBetValue;
          setHighLow([...newHighLow]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "odd":
          setChipCount(chipCount - currentBetValue);
          newOddEven[0] = newOddEven[0] + currentBetValue;
          setOddEven([...newOddEven]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "red":
          setChipCount(chipCount - currentBetValue);
          newRedBlack[0] = redBlack[0] + currentBetValue;
          setRedBlack([...newRedBlack]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 0]);
          setRecentBetValue(currentBetValue);
          break;
        case "black":
          setChipCount(chipCount - currentBetValue);
          newRedBlack[1] = newRedBlack[1] + currentBetValue;
          setRedBlack([...newRedBlack]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "even":
          setChipCount(chipCount - currentBetValue);
          newOddEven[1] = newOddEven[1] + currentBetValue;
          setOddEven([...newOddEven]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
        case "high":
          setChipCount(chipCount - currentBetValue);
          newHighLow[1] = newHighLow[1] + currentBetValue;
          setHighLow([...newHighLow]);
          setPendingTotalBet(pendingTotalBet + currentBetValue);
          setRecentBet([betToIncrease.match(betTypeRegex)[0], 1]);
          setRecentBetValue(currentBetValue);
          break;
      }
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
            {splits[0] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[0]}</p>
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
              {straightUps[0] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[0]}</p>
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
            {splits[2] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[2]}</p>
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
              {straightUps[3] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[3]}</p>
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
            {splits[7] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[7]}</p>
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
              {straightUps[6] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[6]}</p>
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
            {splits[12] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[12]}</p>
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
              {straightUps[9] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[9]}</p>
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
            {splits[17] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[17]}</p>
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
              {straightUps[12] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[12]}</p>
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
            {splits[22] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[22]}</p>
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
              {straightUps[15] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[15]}</p>
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
            {splits[27] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[27]}</p>
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
              {straightUps[18] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[18]}</p>
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
            {splits[32] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[32]}</p>
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
              {straightUps[21] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[21]}</p>
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
            {splits[37] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[37]}</p>
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
              {straightUps[24] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[24]}</p>
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
            {splits[42] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[42]}</p>
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
              {straightUps[27] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[27]}</p>
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
            {splits[47] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[47]}</p>
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
              {straightUps[30] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[30]}</p>
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
            {splits[52] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[52]}</p>
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
              {straightUps[33] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[33]}</p>
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
            {splits[57] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[57]}</p>
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
              {straightUps[36] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[36]}</p>
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
            {columns[2] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns[2]}</p>
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
            {streets[0] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[0]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("2-3 split")}
          >
            {splits[4] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[4]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("2-3-5-6 corner")}
          >
            {corners[1] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[1]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("5-6 split")}
          >
            {splits[9] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[9]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("5-6-8-9 corner")}
          >
            {corners[3] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[3]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("8-9 split")}
          >
            {splits[14] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[14]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("8-9-11-12 corner")}
          >
            {corners[5] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[5]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("11-12 split")}
          >
            {splits[19] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[19]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("11-12-14-15 corner")}
          >
            {corners[7] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[7]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("14-15 split")}
          >
            {splits[24] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[24]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("14-15-17-18 corner")}
          >
            {corners[9] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[9]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("17-18 split")}
          >
            {splits[29] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[29]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("17-18-20-21 corner")}
          >
            {corners[11] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[11]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("20-21 split")}
          >
            {splits[34] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[34]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("20-21-23-24 corner")}
          >
            {corners[13] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[13]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("23-24 split")}
          >
            {splits[39] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[39]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("23-24-26-27 corner")}
          >
            {corners[15] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[15]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("26-27 split")}
          >
            {splits[44] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[44]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("26-27-29-30 corner")}
          >
            {corners[17] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[17]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("29-30 split")}
          >
            {splits[49] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[49]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("29-30-32-33 corner")}
          >
            {corners[19] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[19]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("32-33 split")}
          >
            {splits[54] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[54]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("32-33-35-36 corner")}
          >
            {corners[21] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[21]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("35-36 split")}
          >
            {splits[59] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[59]}</p>
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
            {streets[1] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[1]}</p>
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
              {straightUps[2] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[2]}</p>
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
            {splits[6] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[6]}</p>
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
              {straightUps[5] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[5]}</p>
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
            {splits[11] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[11]}</p>
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
              {straightUps[8] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[8]}</p>
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
            {splits[16] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[16]}</p>
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
              {straightUps[11] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[11]}</p>
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
            {splits[21] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[21]}</p>
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
              {straightUps[14] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[14]}</p>
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
            {splits[26] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[26]}</p>
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
              {straightUps[17] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[17]}</p>
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
            {splits[31] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[31]}</p>
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
              {straightUps[20] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[20]}</p>
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
            {splits[36] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[36]}</p>
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
              {straightUps[23] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[23]}</p>
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
            {splits[41] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[41]}</p>
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
              {straightUps[26] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[26]}</p>
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
            {splits[46] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[46]}</p>
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
              {straightUps[29] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[29]}</p>
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
            {splits[51] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[51]}</p>
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
              {straightUps[32] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[32]}</p>
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
            {splits[56] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[56]}</p>
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
              {straightUps[35] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[35]}</p>
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
            {columns[1] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns[1]}</p>
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
            {streets[2] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[2]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("1-2 split")}
          >
            {splits[3] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[3]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("1-2-4-5 corner")}
          >
            {corners[0] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[0]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("4-5 split")}
          >
            {splits[8] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[8]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("4-5-7-8 corner")}
          >
            {corners[2] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[2]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("7-8 split")}
          >
            {splits[13] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[13]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("7-8-10-11 corner")}
          >
            {corners[4] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[4]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("10-11 split")}
          >
            {splits[18] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[18]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("10-11-13-14 corner")}
          >
            {corners[6] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[6]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("13-14 split")}
          >
            {splits[23] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[23]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("13-14-16-17 corner")}
          >
            {corners[8] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[8]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("16-17 split")}
          >
            {splits[28] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[28]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("16-17-19-20 corner")}
          >
            {corners[10] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[10]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("19-20 split")}
          >
            {splits[33] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[33]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("19-20-22-23 corner")}
          >
            {corners[12] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[12]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("22-23 split")}
          >
            {splits[38] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[38]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("22-23-25-26 corner")}
          >
            {corners[14] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[14]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("25-26 split")}
          >
            {splits[43] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[43]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("25-26-28-29 corner")}
          >
            {corners[16] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[16]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("28-29 split")}
          >
            {splits[48] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[48]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("28-29-31-32 corner")}
          >
            {corners[18] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[18]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("31-32 split")}
          >
            {splits[53] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[53]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box corner"
            onClick={() => increaseBet("31-32-34-35 corner")}
          >
            {corners[20] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{corners[20]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box split"
            onClick={() => increaseBet("34-35 split")}
          >
            {splits[58] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[58]}</p>
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
            {splits[1] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[1]}</p>
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
              {straightUps[1] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[1]}</p>
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
            {splits[5] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[5]}</p>
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
              {straightUps[4] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[4]}</p>
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
            {splits[10] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[10]}</p>
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
              {straightUps[7] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[7]}</p>
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
            {splits[15] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[15]}</p>
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
              {straightUps[10] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[10]}</p>
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
            {splits[20] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[20]}</p>
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
              {straightUps[13] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[13]}</p>
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
            {splits[25] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[25]}</p>
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
              {straightUps[16] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[16]}</p>
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
            {splits[30] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[30]}</p>
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
              {straightUps[19] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[19]}</p>
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
            {splits[35] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[35]}</p>
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
              {straightUps[22] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[22]}</p>
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
            {splits[40] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[40]}</p>
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
              {straightUps[25] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[25]}</p>
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
            {splits[45] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[45]}</p>
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
              {straightUps[28] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[28]}</p>
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
            {splits[50] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[50]}</p>
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
              {straightUps[31] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[31]}</p>
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
            {splits[55] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{splits[55]}</p>
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
              {straightUps[34] > 0 ? (
                <div className="chip-and-bet">
                  <img
                    className="blank-chip"
                    alt="blank chip"
                    src={BlankChip}
                  ></img>
                  <p className="bet-text">{straightUps[34]}</p>
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
            {columns[0] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{columns[0]}</p>
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
            {streets[3] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[3]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("1 to 6 double-street")}
          >
            {doubleStreets[0] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[0]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("4-5-6 street")}
          >
            {streets[4] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[4]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("4 to 9 double-street")}
          >
            {doubleStreets[1] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[1]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("7-8-9 street")}
          >
            {streets[5] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[5]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("7 to 12 double-street")}
          >
            {doubleStreets[2] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[2]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("10-11-12 street")}
          >
            {streets[6] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[6]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("10 to 15 double-street")}
          >
            {doubleStreets[3] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[3]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("13-14-15 street")}
          >
            {streets[7] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[7]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("13 to 18 double-street")}
          >
            {doubleStreets[4] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[4]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("16-17-18 street")}
          >
            {streets[8] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[8]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("16 to 21 double-street")}
          >
            {doubleStreets[5] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[5]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("19-20-21 street")}
          >
            {streets[9] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[9]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("19 to 24 double-street")}
          >
            {doubleStreets[6] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[6]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("22-23-24 street")}
          >
            {streets[10] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[10]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("22 to 27 double-street")}
          >
            {doubleStreets[7] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[7]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("25-26-27 street")}
          >
            {streets[11] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[11]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("25 to 30 double-street")}
          >
            {doubleStreets[8] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[8]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("28-29-30 street")}
          >
            {streets[12] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[12]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("28 to 33 double-street")}
          >
            {doubleStreets[9] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[9]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("31-32-33 street")}
          >
            {streets[13] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[13]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box double-street"
            onClick={() => increaseBet("31-36 double-street")}
          >
            {doubleStreets[10] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{doubleStreets[10]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bet-box street"
            onClick={() => increaseBet("34-35-36 street")}
          >
            {streets[14] > 0 ? (
              <div className="chip-and-bet">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{streets[14]}</p>
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
            <img src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">1 - 12</h1>
            {dozens[0] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens[0]}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          className="bet-box  dozen"
          onClick={() => increaseBet("2nd dozen")}
        >
          <div className="ribbon-div">
            <img src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">13-24</h1>
            {dozens[1] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens[1]}</p>
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
            <img src={Ribbon} className="ribbon-img"></img>
            <h1 className="dozen-text">25-36</h1>
            {dozens[2] > 0 ? (
              <div className="chip-and-bet dozen-chip">
                <img
                  className="blank-chip"
                  alt="blank chip"
                  src={BlankChip}
                ></img>
                <p className="bet-text">{dozens[2]}</p>
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
          {highLow[0] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{highLow[0]}</p>
            </div>
          ) : (
            <></>
          )}
          1 - 18
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("odd")}>
          {oddEven[0] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{oddEven[0]}</p>
            </div>
          ) : (
            <></>
          )}
          Odd
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("red")}>
          {redBlack[0] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{redBlack[0]}</p>
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
          {redBlack[1] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{redBlack[1]}</p>
            </div>
          ) : (
            <></>
          )}
          <img className="diamond" alt="black diamond" src={BlackDiamond}></img>
        </div>
        <div className="bet-box even-money" onClick={() => increaseBet("even")}>
          {oddEven[1] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{oddEven[1]}</p>
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
          {highLow[1] > 0 ? (
            <div className="chip-and-bet dozen-chip">
              <img
                className="blank-chip"
                alt="blank chip"
                src={BlankChip}
              ></img>
              <p className="bet-text">{highLow[1]}</p>
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
