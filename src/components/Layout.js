import React from 'react';
import '../stylesheets/Layout.css'
import RedDiamond from '../images/red-diamond.png'
import BlackDiamond from '../images/black-diamond.png'
import Ribbon from '../images/ribbon.png'
import BlankChip from '../images/blank-chip.png'

export default function Layout(props) {

    const increaseBet = (betToIncrease) => {
        if(!props.isSpinComplete && props.currentBetValue <= props.chipCount && props.currentBetValue > 0) {
            let splitRegex = /split$/
            let newSplits = props.splits.flat()
            let newStraightUps = props.straightUps.flat()
            let newColumns = props.columns.flat()
            let newStreets = props.streets.flat()
            let newDoubleStreets = props.doubleStreets.flat()
            let newHighLow = props.highLow.flat()
            let newOddEven = props.oddEven.flat()
            let newRedBlack = props.redBlack.flat()
            let newDozens = props.dozens.flat()
            let newCorners = props.corners.flat()
            let betTypeRegex = /[a-z]+-?[a-z]+?$|low|high/

            switch(betToIncrease) {
            case "0-00 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[0] = props.splits[0] + props.currentBetValue
                props.setSplits([...newSplits]);
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "00 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[37] = props.straightUps[37] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 37])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "0 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[0] = props.straightUps[0] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "00-3 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[2] = props.splits[2] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "3 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[3] = props.straightUps[3] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 3])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "3-6 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[7] = props.splits[7] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 7])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "6 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[6] = props.straightUps[6] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 6])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "6-9 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[12] = props.splits[12] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 12])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "9 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[9] = props.straightUps[9] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 9])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "9-12 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[17] = props.splits[17] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 17])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "12 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[12] = props.straightUps[12] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 12])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "12-15 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[22] = props.splits[22] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 22])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "15 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[15] = props.straightUps[15] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 15])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "15-18 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[27] = props.splits[27] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 27])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "18 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[18] = props.straightUps[18] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 18])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "18-21 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[32] = props.splits[32] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 32])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "21 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[21] = props.straightUps[21] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 21])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "21-24 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[37] = props.splits[37] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 37])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "24 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[24] = props.straightUps[24] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 24])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "24-27 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[42] = props.splits[42] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 42])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "27 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[27] = props.straightUps[27] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 27])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "27-30 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[47] = props.splits[47] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 47])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "30 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[30] = props.straightUps[30] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 30])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "30-33 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[52] = props.splits[52] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 52])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "33 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[33] = props.straightUps[33] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 33])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "33-36 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[57] = props.splits[57] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 57])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "36 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[36] = props.straightUps[36] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 36])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "3rd column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[2] = props.columns[2] + props.currentBetValue
                props.setColumns([...newColumns])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "00-2-3 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[0] = props.streets[0] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2-3 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[4] = props.splits[4] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 4])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2-3-5-6 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[1] = props.corners[1] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "5-6 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[9] = props.splits[9] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 9])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "5-6-8-9 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[3] = props.corners[3] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 3])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "8-9 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[14] = props.splits[14] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 14])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "8-9-11-12 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[5] = props.corners[5] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 5])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "11-12 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[19] = props.splits[19] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 19])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "11-12-14-15 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[7] = props.corners[7] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 7])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "14-15 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[24] = props.splits[24] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 24])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "14-15-17-18 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[9] = props.corners[9] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 9])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "17-18 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[29] = props.splits[29] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 29])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "17-18-20-21 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[11] = props.corners[11] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 11])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "20-21 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[34] = props.splits[34] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 34])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "20-21-23-24 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[13] = props.corners[13] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 13])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "23-24 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[39] = props.splits[39] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 39])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "23-24-26-27 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[15] = props.corners[15] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 15])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "26-27 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[44] = props.splits[44] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 44])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "26-27-29-30 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[17] = props.corners[17] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 17])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "29-30 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[49] = props.splits[49] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 49])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "29-30-32-33 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[19] = props.corners[19] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 19])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "32-33 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[54] = props.splits[54] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 54])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "32-33-35-36 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[21] = props.corners[21] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 21])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "35-36 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[59] = props.splits[59] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 59])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "0-00-2 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[1] = props.streets[1] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[2] = props.straightUps[2] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2-5 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[6] = props.splits[6] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 6])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "5 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[5] = props.straightUps[5] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 5])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "5-8 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[11] = props.splits[11] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 11])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "8 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[8] = props.straightUps[8] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 8])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "8-11 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[16] = props.splits[16] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 16])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "11 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[11] = props.straightUps[11] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 11])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "11-14 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[21] = props.splits[21] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 21])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "14 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[14] = props.straightUps[14] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 14])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "14-17 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[26] = props.splits[26] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 26])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "17 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[17] = props.straightUps[17] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 17])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "17-20 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[31] = props.splits[31] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 31])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "20 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[20] = props.straightUps[20] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 20])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "20-23 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[36] = props.splits[36] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 36])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "23 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[23] = props.straightUps[23] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 23])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "23-26 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[41] = props.splits[41] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 41])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "26 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[26] = props.straightUps[26] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 26])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "26-29 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[46] = props.splits[46] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 46])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "29 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[29] = props.straightUps[29] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 29])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "29-32 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[51] = props.splits[51] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 51])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "32 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[32] = props.straightUps[32] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 32])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "32-35 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[56] = props.splits[56] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 56])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "35 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[35] = props.straightUps[35] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 35])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2nd column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[1] = props.columns[1] + props.currentBetValue
                props.setColumns([...newColumns])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "basket":
                props.setChipCount(props.chipCount - props.currentBetValue)
                props.setBasket(props.basket + props.currentBetValue)
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet(["basket", null])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "0-1-2 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[2] = props.streets[2] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1-2 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[3] = props.splits[3] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 3])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1-2-4-5 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[0] = props.corners[0] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4-5 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[8] = props.splits[8] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 8])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4-5-7-8 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[2] = props.corners[2] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7-8 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[13] = props.splits[13] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 13])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7-8-10-11 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[4] = props.corners[4] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 4])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10-11 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[18] = props.splits[18] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 18])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10-11-13-14 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[6] = props.corners[6] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 6])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13-14 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[23] = props.splits[23] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 23])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13-14-16-17 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[8] = props.corners[8] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 8])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16-17 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[28] = props.splits[28] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 28])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16-17-19-20 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[10] = props.corners[10] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 10])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19-20 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[33] = props.splits[33] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 33])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19-20-22-23 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[12] = props.corners[12] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 12])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22-23 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[38] = props.splits[38] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 38])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22-23-25-26 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[14] = props.corners[14] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 14])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25-26 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[43] = props.splits[43] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 43])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25-26-28-29 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[16] = props.corners[16] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 16])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28-29 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[48] = props.splits[48] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 48])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28-29-31-32 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[18] = props.corners[18] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 18])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31-32 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[53] = props.splits[53] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 53])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31-32-34-35 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[20] = props.corners[20] + props.currentBetValue
                props.setCorners([...newCorners])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 20])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "34-35 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[58] = props.splits[58] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 58])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "0-1 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[1] = props.splits[1] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[1] = props.straightUps[1] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1-4 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[5] = props.splits[5] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 5])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[4] = props.straightUps[4] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 4])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4-7 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[10] = props.splits[10] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 10])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[7] = props.straightUps[7] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 7])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7-10 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[15] = props.splits[15] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 15])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[10] = props.straightUps[10] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 10])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10-13 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[20] = props.splits[20] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 20])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[13] = props.straightUps[13] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 13])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13-16 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[25] = props.splits[25] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 25])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[16] = props.straightUps[16] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 16])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16-19 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[30] = props.splits[30] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 30])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[19] = props.straightUps[19] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 19])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19-22 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[35] = props.splits[35] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 35])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[22] = props.straightUps[22] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 22])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22-25 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[40] = props.splits[40] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 40])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[25] = props.straightUps[25] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 25])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25-28 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[45] = props.splits[45] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 45])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[28] = props.straightUps[28] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 28])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28-31 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[50] = props.splits[50] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 50])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[31] = props.straightUps[31] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 31])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31-34 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[55] = props.splits[55] + props.currentBetValue
                props.setSplits([...newSplits])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 55])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "34 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[34] = props.straightUps[34] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 34])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1st column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[0] = props.columns[0] + props.currentBetValue
                props.setColumns([...newColumns])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1-2-3 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[3] = props.streets[3] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 3])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1 to 6 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[0] = props.doubleStreets[0] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4-5-6 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[4] = props.streets[4] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 4])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "4 to 9 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[1] = props.doubleStreets[1] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7-8-9 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[5] = props.streets[5] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 5])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "7 to 12 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[2] = props.doubleStreets[2] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10-11-12 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[6] = props.streets[6] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 6])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "10 to 15 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[3] = props.doubleStreets[3] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 3])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13-14-15 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[7] = props.streets[7] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 7])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "13 to 18 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[4] = props.doubleStreets[4] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 4])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16-17-18 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[8] = props.streets[8] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 8])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "16 to 21 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[5] = props.doubleStreets[5] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 5])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19-20-21 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[9] = props.streets[9] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 9])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "19 to 24 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[6] = props.doubleStreets[6] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 6])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22-23-24 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[10] = props.streets[10] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 10])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "22 to 27 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[7] = props.doubleStreets[7] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 7])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25-26-27 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[11] = props.streets[11] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 11])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "25 to 30 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[8] = props.doubleStreets[8] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 8])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28-29-30 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[12] = props.streets[12] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 12])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "28 to 33 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[9] = props.doubleStreets[9] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 9])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31-32-33 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[13] = props.streets[13] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 13])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "31-36 double-street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[10] = props.doubleStreets[10] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 10])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "34-35-36 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[14] = props.streets[14] + props.currentBetValue
                props.setStreets([...newStreets])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 14])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "1st dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[0] = props.dozens[0] + props.currentBetValue
                props.setDozens([...newDozens])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "2nd dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[1] = props.dozens[1] + props.currentBetValue
                props.setDozens([...newDozens])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "3rd dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[2] = props.dozens[2] + props.currentBetValue
                props.setDozens([...newDozens])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 2])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "low":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newHighLow[0] = newHighLow[0] + props.currentBetValue
                props.setHighLow([...newHighLow])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "odd":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newOddEven[0] = newOddEven[0] + props.currentBetValue
                props.setOddEven([...newOddEven])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "red":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newRedBlack[0] = props.redBlack[0] + props.currentBetValue
                props.setRedBlack([...newRedBlack])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 0])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "black":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newRedBlack[1] = newRedBlack[1] + props.currentBetValue
                props.setRedBlack([...newRedBlack])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "even":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newOddEven[1] = newOddEven[1] + props.currentBetValue
                props.setOddEven([...newOddEven])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            case "high":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newHighLow[1] = newHighLow[1] + props.currentBetValue
                props.setHighLow([...newHighLow])
                props.setPendingTotalBet(props.pendingTotalBet + props.currentBetValue)
                props.setRecentBet([betToIncrease.match(betTypeRegex)[0], 1])
                props.setRecentBetValue(props.currentBetValue)
                break;
            }
        }
    }

    return(
        <div className="layout-div" 
            id={
                props.currentBetValue === 1 ? 
                    "one-chip-cursor" : 
                    props.currentBetValue === 5 ? 
                    "five-chip-cursor" : 
                    props.currentBetValue === 25 ? 
                    "twenty-five-chip-cursor" : 
                    props.currentBetValue === 100 ? 
                    "one-hundred-chip-cursor" : 
                    props.currentBetValue === 500 ? 
                    "five-hundred-chip-cursor" : 
                    props.currentBetValue === 1000 ? 
                    "one-thousand-chip-cursor" : 
                    props.currentBetValue === 10000 ? 
                    "ten-thousand-chip-cursor" : 
                    props.currentBetValue === 50000 ? 
                    "fifty-thousand-chip-cursor" : 
                    props.currentBetValue === 100000 ? 
                    "hundred-thousand-chip-cursor" : 
                    props.currentBetValue === 500000 ? 
                    "five-hundred-thousand-chip-cursor" : 
                    props.currentBetValue === 1000000 ? 
                    "one-million-chip-cursor" : 
                    "default"
            }
        >
            <div className="zeroes-inside-columns">
                <section className="zeroes">
                    <div className={props.winningNumber === "00" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("00 straight")
                    }>
                        <div className="number green">
                            {props.straightUps[37] > 0 ? 
                                <div className="chip-and-bet">
                                    <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                    <p className="bet-text">{props.straightUps[37]}</p>
                                </div> : <></>
                            }
                            00
                        </div>
                    </div>
                    <div className="bet-box split" id="split" onClick={() => increaseBet("0-00 split")}>
                        {props.splits[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[0]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "0" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("0 straight")
                    }>
                        <div className="number green">
                            {props.straightUps[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[0]}</p>
                            </div> : <></>
                        }
                        0
                        </div>
                    </div>
                </section>
                <section className="inside-and-columns">
                    <div className="bet-box split" onClick={() => increaseBet("00-3 split")}>
                        {props.splits[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[2]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "3" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("3 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[3] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[3]}</p>
                            </div> : <></>
                        }
                        3
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("3-6 split")}>
                        {props.splits[7] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[7]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "6" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("6 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[6] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[6]}</p>
                            </div> : <></>
                        }
                        6
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("6-9 split")}>
                        {props.splits[12] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[12]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "9" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("9 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[9] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[9]}</p>
                            </div> : <></>
                        }
                        9
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("9-12 split")}>
                        {props.splits[17] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[17]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "12" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("12 straight")
                    }>
                        <div className="number red">
                        {props.straightUps[12] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[12]}</p>
                            </div> : <></>
                        }
                        12
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("12-15 split")}>
                        {props.splits[22] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[22]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "15" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("15 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[15] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[15]}</p>
                            </div> : <></>
                        }
                        15
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("15-18 split")}>
                        {props.splits[27] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[27]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "18" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("18 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[18] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[18]}</p>
                            </div> : <></>
                        }
                        18
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("18-21 split")}>
                        {props.splits[32] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[32]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "21" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("21 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[21] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[21]}</p>
                            </div> : <></>
                        }
                        21
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("21-24 split")}>
                        {props.splits[37] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[37]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "24" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("24 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[24] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[24]}</p>
                            </div> : <></>
                        }
                        24
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("24-27 split")}>
                        {props.splits[42] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[42]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "27" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("27 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[27] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[27]}</p>
                            </div> : <></>
                        }
                        27
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("27-30 split")}>
                        {props.splits[47] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[47]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "30" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("30 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[30] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[30]}</p>
                            </div> : <></>
                        }
                        30
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("30-33 split")}>
                        {props.splits[52] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[52]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "33" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("33 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[33] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[33]}</p>
                            </div> : <></>
                        }
                        33
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("33-36 split")}>
                        {props.splits[57] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[57]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "36" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("36 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[36] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[36]}</p>
                            </div> : <></>
                        }
                        36
                        </div>
                    </div>
                    <div className="bet-box column" onClick={() => increaseBet("3rd column")}>
                        {props.columns[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.columns[2]}</p>
                            </div> : <></>
                        }
                        2 to 1
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("00-2-3 street")}>
                    {props.streets[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[0]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("2-3 split")}>
                        {props.splits[4] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[4]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("2-3-5-6 corner")}>
                        {props.corners[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[1]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("5-6 split")}>
                        {props.splits[9] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[9]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("5-6-8-9 corner")}>
                        {props.corners[3] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[3]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("8-9 split")}>
                        {props.splits[14] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[14]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("8-9-11-12 corner")}>
                        {props.corners[5] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[5]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("11-12 split")}>
                        {props.splits[19] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[19]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("11-12-14-15 corner")}>
                        {props.corners[7] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[7]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("14-15 split")}>
                        {props.splits[24] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[24]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("14-15-17-18 corner")}>
                        {props.corners[9] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[9]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("17-18 split")}>
                        {props.splits[29] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[29]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("17-18-20-21 corner")}>
                        {props.corners[11] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[11]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("20-21 split")}>
                        {props.splits[34] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[34]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("20-21-23-24 corner")}>
                        {props.corners[13] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[13]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("23-24 split")}>
                        {props.splits[39] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[39]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("23-24-26-27 corner")}>
                        {props.corners[15] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[15]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("26-27 split")}>
                        {props.splits[44] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[44]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("26-27-29-30 corner")}>
                        {props.corners[17] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[17]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("29-30 split")}>
                        {props.splits[49] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[49]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("29-30-32-33 corner")}>
                        {props.corners[19] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[19]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("32-33 split")}>
                        {props.splits[54] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[54]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("32-33-35-36 corner")}>
                        {props.corners[21] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[21]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("35-36 split")}>
                        {props.splits[59] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[59]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="empty fill"></div>

                    <div className="bet-box street" onClick={() => increaseBet("0-00-2 street")}>
                        {props.streets[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[1]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "2" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("2 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[2]}</p>
                            </div> : <></>
                        }
                        2
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("2-5 split")}>
                        {props.splits[6] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[6]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "5" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("5 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[5] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[5]}</p>
                            </div> : <></>
                        }
                        5
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("5-8 split")}>
                        {props.splits[11] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[11]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "8" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("8 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[8] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[8]}</p>
                            </div> : <></>
                        }
                        8
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("8-11 split")}>
                        {props.splits[16] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[16]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "11" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("11 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[11] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[11]}</p>
                            </div> : <></>
                        }
                        11
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("11-14 split")}>
                        {props.splits[21] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[21]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "14" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("14 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[14] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[14]}</p>
                            </div> : <></>
                        }
                        14
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("14-17 split")}>
                        {props.splits[26] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[26]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "17" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("17 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[17] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[17]}</p>
                            </div> : <></>
                        }
                        17
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("17-20 split")}>
                        {props.splits[31] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[31]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "20" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("20 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[20] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[20]}</p>
                            </div> : <></>
                        }
                        20
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("20-23 split")}>
                        {props.splits[36] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[36]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "23" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("23 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[23] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[23]}</p>
                            </div> : <></>
                        }
                        23
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("23-26 split")}>
                        {props.splits[41] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[41]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "26" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("26 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[26] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[26]}</p>
                            </div> : <></>
                        }
                        26
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("26-29 split")}>
                        {props.splits[46] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[46]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "29" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("29 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[29] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[29]}</p>
                            </div> : <></>
                        }
                        29
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("29-32 split")}>
                        {props.splits[51] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[51]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "32" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("32 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[32] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[32]}</p>
                            </div> : <></>
                        }
                        32
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("32-35 split")}>
                        {props.splits[56] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[56]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "35" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("35 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[35] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[35]}</p>
                            </div> : <></>
                        }
                        35
                        </div>
                    </div>
                    <div className="bet-box column" onClick={() => increaseBet("2nd column")}>
                        {props.columns[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.columns[1]}</p>
                            </div> : <></>
                        }
                        2 to 1
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("0-1-2 street")}>
                        {props.streets[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[2]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("1-2 split")}>
                        {props.splits[3] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[3]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("1-2-4-5 corner")}>
                        {props.corners[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[0]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("4-5 split")}>
                        {props.splits[8] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[8]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("4-5-7-8 corner")}>
                        {props.corners[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[2]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("7-8 split")}>
                        {props.splits[13] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[13]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("7-8-10-11 corner")}>
                        {props.corners[4] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[4]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("10-11 split")}>
                        {props.splits[18] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[18]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("10-11-13-14 corner")}>
                        {props.corners[6] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[6]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("13-14 split")}>
                        {props.splits[23] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[23]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("13-14-16-17 corner")}>
                        {props.corners[8] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[8]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("16-17 split")}>
                        {props.splits[28] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[28]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("16-17-19-20 corner")}>
                        {props.corners[10] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[10]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("19-20 split")}>
                        {props.splits[33] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[33]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("19-20-22-23 corner")}>
                        {props.corners[12] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[12]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("22-23 split")}>
                        {props.splits[38] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[38]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("22-23-25-26 corner")}>
                        {props.corners[14] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[14]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("25-26 split")}>
                        {props.splits[43] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[43]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("25-26-28-29 corner")}>
                        {props.corners[16] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[16]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("28-29 split")}>
                        {props.splits[48] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[48]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("28-29-31-32 corner")}>
                        {props.corners[18] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[18]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("31-32 split")}>
                        {props.splits[53] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[53]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box corner" onClick={() => increaseBet("31-32-34-35 corner")}>
                        {props.corners[20] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.corners[20]}</p>
                            </div> : <></>
                        }    
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("34-35 split")}>
                        {props.splits[58] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[58]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="empty fill"></div>

                    <div className="bet-box split" onClick={() => increaseBet("0-1 split")}>
                        {props.splits[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[1]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "1" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("1 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[1]}</p>
                            </div> : <></>
                        }
                        1
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("1-4 split")}>
                        {props.splits[5] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[5]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "4" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("4 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[4] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[4]}</p>
                            </div> : <></>
                        }
                        4
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("4-7 split")}>
                        {props.splits[10] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[10]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "7" && props.isSpinComplete ? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("7 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[7] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[7]}</p>
                            </div> : <></>
                        }
                        7
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("7-10 split")}>
                        {props.splits[15] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[15]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "10" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("10 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[10] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[10]}</p>
                            </div> : <></>
                        }
                        10
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("10-13 split")}>
                        {props.splits[20] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[20]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "13" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("13 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[13] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[13]}</p>
                            </div> : <></>
                        }
                        13
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("13-16 split")}>
                        {props.splits[25] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[25]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "16" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("16 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[16] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[16]}</p>
                            </div> : <></>
                        }
                        16
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("16-19 split")}>
                        {props.splits[30] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[30]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "19" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("19 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[19] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[19]}</p>
                            </div> : <></>
                        }
                        19
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("19-22 split")}>
                        {props.splits[35] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[35]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "22" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("22 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[22] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[22]}</p>
                            </div> : <></>
                        }
                        22
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("22-25 split")}>
                        {props.splits[40] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[40]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "25" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("25 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[25] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[25]}</p>
                            </div> : <></>
                        }
                        25
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("25-28 split")}>
                        {props.splits[45] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[45]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "28" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("28 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[28] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[28]}</p>
                            </div> : <></>
                        }
                        28
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("28-31 split")}>
                        {props.splits[50] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[50]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "31" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("31 straight")
                    }>
                        <div className="number black">
                            {props.straightUps[31] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[31]}</p>
                            </div> : <></>
                        }
                        31
                        </div>
                    </div>
                    <div className="bet-box split" onClick={() => increaseBet("31-34 split")}>
                        {props.splits[55] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.splits[55]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className={props.winningNumber === "34" && props.isSpinComplete? "bet-box winning-num" : "bet-box"} 
                        id="straight-up-number" onClick={() => increaseBet("34 straight")
                    }>
                        <div className="number red">
                            {props.straightUps[34] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.straightUps[34]}</p>
                            </div> : <></>
                        }
                        34
                        </div>
                    </div>
                    <div className="bet-box column" onClick={() => increaseBet("1st column")}>
                        {props.columns[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.columns[0]}</p>
                            </div> : <></>
                        }
                        2 to 1
                    </div>
                    <div className="bet-box basket" onClick={() => increaseBet("basket")}>
                        {props.basket > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.basket}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("1-2-3 street")}>
                        {props.streets[3] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[3]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("1 to 6 double-street")}>
                        {props.doubleStreets[0] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[0]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("4-5-6 street")}>
                        {props.streets[4] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[4]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("4 to 9 double-street")}>
                        {props.doubleStreets[1] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[1]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("7-8-9 street")}>
                        {props.streets[5] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[5]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("7 to 12 double-street")}>
                        {props.doubleStreets[2] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[2]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("10-11-12 street")}>
                        {props.streets[6] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[6]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("10 to 15 double-street")}>
                        {props.doubleStreets[3] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[3]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("13-14-15 street")}>
                        {props.streets[7] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[7]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("13 to 18 double-street")}>
                        {props.doubleStreets[4] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[4]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("16-17-18 street")}>
                        {props.streets[8] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[8]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("16 to 21 double-street")}>
                        {props.doubleStreets[5] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[5]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("19-20-21 street")}>
                        {props.streets[9] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[9]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("19 to 24 double-street")}>
                        {props.doubleStreets[6] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[6]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("22-23-24 street")}>
                        {props.streets[10] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[10]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("22 to 27 double-street")}>
                        {props.doubleStreets[7] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[7]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("25-26-27 street")}>
                        {props.streets[11] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[11]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("25 to 30 double-street")}>
                        {props.doubleStreets[8] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[8]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("28-29-30 street")}>
                        {props.streets[12] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[12]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("28 to 33 double-street")}>
                        {props.doubleStreets[9] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[9]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("31-32-33 street")}>
                        {props.streets[13] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[13]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box double-street" onClick={() => increaseBet("31-36 double-street")}>
                        {props.doubleStreets[10] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.doubleStreets[10]}</p>
                            </div> : <></>
                        }
                    </div>
                    <div className="bet-box street" onClick={() => increaseBet("34-35-36 street")}>
                        {props.streets[14] > 0 ? 
                            <div className="chip-and-bet">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.streets[14]}</p>
                            </div> : <></>
                        }
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
                        {props.dozens[0] > 0 ? 
                            <div className="chip-and-bet dozen-chip">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.dozens[0]}</p>
                            </div> : <></>
                        }
                    </div>
                </div>
                <div className="bet-box  dozen" onClick={() => increaseBet("2nd dozen")}>
                    <div className="ribbon-div">
                        <img src={Ribbon} className="ribbon-img"></img>
                        <h1 className="dozen-text">13-24</h1>
                        {props.dozens[1] > 0 ? 
                            <div className="chip-and-bet dozen-chip">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.dozens[1]}</p>
                            </div> : <></>
                        }
                    </div>
                </div>
                <div className="bet-box right-dozen" onClick={() => increaseBet("3rd dozen")}>
                    <div className="ribbon-div">
                        <img src={Ribbon} className="ribbon-img"></img>
                        <h1 className="dozen-text">25-36</h1>
                        {props.dozens[2] > 0 ? 
                            <div className="chip-and-bet dozen-chip">
                                <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                                <p className="bet-text">{props.dozens[2]}</p>
                            </div> : <></>
                        }
                    </div>
                </div>
            </section>
            <section className="even-money-bets">
                <div className="empty" id="empty-remove-border"></div>
                <div className="bet-box even-money left-even-money" onClick={() => increaseBet("low")}>
                    {props.highLow[0] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.highLow[0]}</p>
                        </div> : <></>
                    }
                    1 - 18
                </div>
                <div className="bet-box even-money" onClick={() => increaseBet("odd")}>
                    {props.oddEven[0] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.oddEven[0]}</p>
                        </div> : <></>
                    }
                    Odd
                </div>
                <div className="bet-box even-money" onClick={() => increaseBet("red")}>
                    {props.redBlack[0] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.redBlack[0]}</p>
                        </div> : <></>
                    }
                    <img className="diamond" alt="red diamond" src={RedDiamond}></img>
                </div>
                <div className="bet-box even-money" onClick={() => increaseBet("black")}>
                    {props.redBlack[1] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.redBlack[1]}</p>
                        </div> : <></>
                    }
                    <img className="diamond" alt="black diamond" src={BlackDiamond}></img>
                </div>
                <div className="bet-box even-money" onClick={() => increaseBet("even")}>
                    {props.oddEven[1] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.oddEven[1]}</p>
                        </div> : <></>
                    }
                    Even
                </div>
                <div className="bet-box right-even-money" onClick={() => increaseBet("high")}>
                    {props.highLow[1] > 0 ? 
                        <div className="chip-and-bet dozen-chip">
                            <img className="blank-chip" alt="blank chip" src={BlankChip}></img>
                            <p className="bet-text">{props.highLow[1]}</p>
                        </div> : <></>
                    }
                    19 - 36
                </div>
            </section>
        </div>
    )
}