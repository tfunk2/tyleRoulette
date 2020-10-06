import React from 'react';
import '../stylesheets/Layout.css'

export default function Layout(props) {

    const increaseBet = (betToIncrease) => {
        if(props.isSpinComplete && props.currentBetValue <= props.chipCount) {
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

            switch(betToIncrease) {
            case "0-00 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[0] = props.splits[0] + props.currentBetValue;
                props.setSplits([...newSplits]);
                break;
            case "00 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[37] = props.straightUps[37] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "0 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[0] = props.straightUps[0] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "00-3 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[2] = props.splits[2] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "3 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[3] = props.straightUps[3] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "3-6 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[7] = props.splits[7] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "6 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[6] = props.straightUps[6] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "6-9 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[12] = props.splits[12] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "9 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[9] = props.straightUps[9] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "9-12 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[17] = props.splits[17] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "12 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[12] = props.straightUps[12] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "12-15 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[22] = props.splits[22] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "15 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[15] = props.straightUps[15] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "15-18 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[27] = props.splits[27] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "18 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[18] = props.straightUps[18] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "18-21 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[32] = props.splits[32] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "21 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[21] = props.straightUps[21] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "21-24 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[37] = props.splits[37] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "24 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[24] = props.straightUps[24] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "24-27 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[42] = props.splits[42] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "27 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[27] = props.straightUps[27] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "27-30 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[47] = props.splits[47] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "30 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[30] = props.straightUps[30] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "30-33 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[52] = props.splits[52] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "33 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[33] = props.straightUps[33] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "33-36 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[57] = props.splits[57] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "36 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[36] = props.straightUps[36] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "3rd column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[2] = props.columns[2] + props.currentBetValue
                props.setColumns([...newColumns])
                break;
            case "00-2-3 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[0] = props.streets[0] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "2-3 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[4] = props.splits[4] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "2-3-5-6 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[1] = props.corners[1] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "5-6 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[9] = props.splits[9] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "5-6-8-9 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[3] = props.corners[3] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "8-9 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[14] = props.splits[14] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "8-9-11-12 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[5] = props.corners[5] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "11-12 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[19] = props.splits[19] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "11-12-14-15 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[7] = props.corners[7] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "14-15 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[24] = props.splits[24] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "14-15-17-18 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[9] = props.corners[9] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "17-18 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[29] = props.splits[29] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "17-18-20-21 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[11] = props.corners[11] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "20-21 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[34] = props.splits[34] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "20-21-23-24 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[13] = props.corners[13] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "23-24 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[39] = props.splits[39] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "23-24-26-27 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[15] = props.corners[15] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "26-27 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[44] = props.splits[44] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "26-27-29-30 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[17] = props.corners[17] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "29-30 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[49] = props.splits[49] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "29-30-32-33 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[19] = props.corners[19] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "32-33 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[54] = props.splits[54] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "32-33-35-36 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[21] = props.corners[21] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "35-36 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[59] = props.splits[59] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "0-00-2 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[1] = props.streets[1] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "2 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[2] = props.straightUps[2] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "2-5 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[6] = props.splits[6] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "5 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[5] = props.straightUps[5] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "5-8 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[11] = props.splits[11] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "8 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[8] = props.straightUps[8] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "8-11 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[16] = props.splits[16] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "11 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[11] = props.straightUps[11] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "11-14 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[21] = props.splits[21] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "14 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[14] = props.straightUps[14] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "14-17 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[26] = props.splits[26] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "17 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[17] = props.straightUps[17] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "17-20 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[31] = props.splits[31] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "20 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[20] = props.straightUps[20] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "20-23 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[36] = props.splits[36] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "23 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[23] = props.straightUps[23] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "23-26 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[41] = props.splits[41] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "26 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[26] = props.straightUps[26] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "26-29 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[46] = props.splits[46] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "29 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[29] = props.straightUps[29] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "29-32 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[51] = props.splits[51] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "32 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[32] = props.straightUps[32] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "32-35 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[56] = props.splits[56] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "35 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[35] = props.straightUps[35] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "2nd column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[1] = props.columns[1] + props.currentBetValue
                props.setColumns([...newColumns])
                break;
            case "0-2-3 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[2] = props.streets[2] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "1-2 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[3] = props.splits[3] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "1-2-4-5 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[0] = props.corners[0] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "4-5 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[8] = props.splits[8] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "4-5-7-8 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[2] = props.corners[2] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "7-8 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[13] = props.splits[13] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "7-8-10-11 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[4] = props.corners[4] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "10-11 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[18] = props.splits[18] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "10-11-13-14 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[6] = props.corners[6] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "13-14 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[23] = props.splits[23] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "13-14-16-17 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[8] = props.corners[8] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "16-17 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[28] = props.splits[28] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "16-17-19-20 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[10] = props.corners[10] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "19-20 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[33] = props.splits[33] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "19-20-22-23 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[12] = props.corners[12] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "22-23 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[38] = props.splits[38] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "22-23-25-26 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[14] = props.corners[14] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "25-26 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[43] = props.splits[43] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "25-26-28-29 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[16] = props.corners[16] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "28-29 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[48] = props.splits[48] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "28-29-31-32 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[18] = props.corners[18] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "31-32 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[53] = props.splits[53] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "31-32-34-35 corner":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newCorners[20] = props.corners[20] + props.currentBetValue
                props.setCorners([...newCorners])
                break;
            case "34-35 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[58] = props.splits[58] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "0-1 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[1] = props.splits[1] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "1 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[1] = props.straightUps[1] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "1-4 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[5] = props.splits[5] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "4 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[4] = props.straightUps[4] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "4-7 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[10] = props.splits[10] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "7 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[7] = props.straightUps[7] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "7-10 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[15] = props.splits[15] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "10 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[10] = props.straightUps[10] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "10-13 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[20] = props.splits[20] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "13 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[13] = props.straightUps[13] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "13-16 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[25] = props.splits[25] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "16 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[16] = props.straightUps[16] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "16-19 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[30] = props.splits[30] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "19 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[19] = props.straightUps[19] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "19-22 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[35] = props.splits[35] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "22 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[22] = props.straightUps[22] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "22-25 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[40] = props.splits[40] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "25 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[25] = props.straightUps[25] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "25-28 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[45] = props.splits[45] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "28 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[28] = props.straightUps[28] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "28-31 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[50] = props.splits[50] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "31 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[31] = props.straightUps[31] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "31-34 split":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newSplits[55] = props.splits[55] + props.currentBetValue;
                props.setSplits([...newSplits])
                break;
            case "34 straight":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStraightUps[34] = props.straightUps[34] + props.currentBetValue
                props.setStraightUps([...newStraightUps])
                break;
            case "1st column":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newColumns[0] = props.columns[0] + props.currentBetValue
                props.setColumns([...newColumns])
                break;
            case "1-2-3 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[3] = props.streets[3] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "1 to 6 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[0] = props.doubleStreets[0] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "4-5-6 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[4] = props.streets[4] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "4 to 9 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[1] = props.doubleStreets[1] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "7-8-9 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[5] = props.streets[5] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "7 to 12 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[2] = props.doubleStreets[2] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "10-11-12 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[6] = props.streets[6] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "10 to 15 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[3] = props.doubleStreets[3] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "13-14-15 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[7] = props.streets[7] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "13 to 18 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[4] = props.doubleStreets[4] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "16-17-18 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[8] = props.streets[8] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "16 to 21 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[5] = props.doubleStreets[5] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "19-20-21 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[9] = props.streets[9] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "19 to 24 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[6] = props.doubleStreets[6] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "22-23-24 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[10] = props.streets[10] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "22 to 27 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[7] = props.doubleStreets[7] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "25-26-27 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[11] = props.streets[11] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "25 to 30 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[8] = props.doubleStreets[8] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "28-29-30 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[12] = props.streets[12] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "28 to 33 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[9] = props.doubleStreets[9] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "31-32-33 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[13] = props.streets[13] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "31-36 double street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDoubleStreets[10] = props.doubleStreets[10] + props.currentBetValue
                props.setDoubleStreets([...newDoubleStreets])
                break;
            case "34-35-36 street":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newStreets[14] = props.streets[14] + props.currentBetValue
                props.setStreets([...newStreets])
                break;
            case "1st dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[0] = props.dozens[0] + props.currentBetValue
                props.setDozens([...newDozens])
                break;
            case "2nd dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[1] = props.dozens[1] + props.currentBetValue
                props.setDozens([...newDozens])
                break;
            case "3rd dozen":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newDozens[2] = props.dozens[2] + props.currentBetValue
                props.setDozens([...newDozens])
                break;
            case "1 to 18":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newHighLow[0] = newHighLow[0] + props.currentBetValue
                props.setHighLow([...newHighLow])
                break;
            case "odd":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newOddEven[0] = newOddEven[0] + props.currentBetValue
                props.setOddEven([...newOddEven])
                break;
            case "red":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newRedBlack[0] = props.redBlack[0] + props.currentBetValue
                props.setRedBlack([...newRedBlack])
                break;
            case "black":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newRedBlack[1] = newRedBlack[1] + props.currentBetValue
                props.setRedBlack([...newRedBlack])
                break;
            case "even":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newOddEven[1] = newOddEven[1] + props.currentBetValue
                props.setOddEven([...newOddEven])
                break;
            case "19 to 36":
                props.setChipCount(props.chipCount - props.currentBetValue)
                newHighLow[1] = newHighLow[1] + props.currentBetValue
                props.setHighLow([...newHighLow])
                break;
            }
        }
    }

    return(
        <div className="layout-div">
            <div className="zeroes-inside-columns">
                <section className="zeroes">
                    <div className="bet-box" onClick={() => increaseBet("00 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("0-00 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("0 straight")}></div>
                </section>
                <section className="inside-and-columns">
                    <div className="bet-box" onClick={() => increaseBet("00-3 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("3 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("3-6 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("6 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("6-9 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("9 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("9-12 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("12 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("12-15 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("15 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("15-18 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("18 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("18-21 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("21 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("21-24 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("24 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("24-27 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("27 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("27-30 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("30 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("30-33 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("33 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("33-36 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("36 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("3rd column")}></div>
                    <div className="bet-box" onClick={() => increaseBet("00-2-3 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("2-3 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("2-3-5-6 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("5-6 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("5-6-8-9 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("8-9 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("8-9-11-12 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("11-12 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("11-12-14-15 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("14-15 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("14-15-17-18 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("17-18 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("17-18-20-21 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("20-21 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("20-21-23-24 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("23-24 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("23-24-26-27 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("26-27 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("26-27-29-30 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("29-30 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("29-30-32-33 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("32-33 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("32-33-35-36 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("35-36 split")}></div>
                    <div className="empty"></div>

                    <div className="bet-box" onClick={() => increaseBet("0-00-2 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("2 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("2-5 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("5 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("5-8 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("8 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("8-11 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("11 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("11-14 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("14 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("14-17 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("17 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("17-20 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("20 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("20-23 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("23 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("23-26 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("26 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("26-29 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("29 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("29-32 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("32 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("32-35 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("35 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("2nd column")}></div>
                    <div className="bet-box" onClick={() => increaseBet("0-2-3 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1-2 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1-2-4-5 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4-5 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4-5-7-8 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7-8 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7-8-10-11 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10-11 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10-11-13-14 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13-14 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13-14-16-17 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16-17 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16-17-19-20 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19-20 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19-20-22-23 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22-23 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22-23-25-26 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25-26 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25-26-28-29 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28-29 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28-29-31-32 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31-32 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31-32-34-35 corner")}></div>
                    <div className="bet-box" onClick={() => increaseBet("34-35 split")}></div>
                    <div className="empty"></div>

                    <div className="bet-box" onClick={() => increaseBet("0-1 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1-4 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4-7 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7-10 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10-13 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13-16 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16-19 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19-22 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22-25 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25-28 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28-31 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31-34 split")}></div>
                    <div className="bet-box" onClick={() => increaseBet("34 straight")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1st column")}></div>
                    <div className="empty"></div>
                    <div className="bet-box" onClick={() => increaseBet("1-2-3 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("1 to 6 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4-5-6 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("4 to 9 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7-8-9 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("7 to 12 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10-11-12 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("10 to 15 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13-14-15 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("13 to 18 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16-17-18 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("16 to 21 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19-20-21 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("19 to 24 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22-23-24 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("22 to 27 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25-26-27 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("25 to 30 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28-29-30 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("28 to 33 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31-32-33 street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("31-36 double street")}></div>
                    <div className="bet-box" onClick={() => increaseBet("34-35-36 street")}></div>
                </section>
            </div>
            <section className="dozens">
                <div className="empty"></div>
                <div className="bet-box" onClick={() => increaseBet("1st dozen")}></div>
                <div className="bet-box" onClick={() => increaseBet("2nd dozen")}></div>
                <div className="bet-box" onClick={() => increaseBet("3rd dozen")}></div>
            </section>
            <section className="even-money-bets">
                <div className="empty"></div>
                <div className="bet-box" onClick={() => increaseBet("1 to 18")}></div>
                <div className="bet-box" onClick={() => increaseBet("odd")}></div>
                <div className="bet-box" onClick={() => increaseBet("red")}></div>
                <div className="bet-box" onClick={() => increaseBet("black")}></div>
                <div className="bet-box" onClick={() => increaseBet("even")}></div>
                <div className="bet-box" onClick={() => increaseBet("19 to 36")}></div>
            </section>
        </div>
    )
}