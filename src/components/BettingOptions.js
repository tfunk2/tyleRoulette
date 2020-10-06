import React from 'react';
import '../stylesheets/BettingOptions.css'
import One from '../images/1-chip.png'
import Five from '../images/5-chip.png'
import TwentyFive from '../images/25-chip.png'
import OneHundred from '../images/100-chip.png'
import FiveHundred from '../images/500-chip.png'
import OneThousand from '../images/1000-chip.png'
import TenThousand from '../images/10k-chip.png'
import FiftyThousand from '../images/50k-chip.png'
import OneHundredK from '../images/100k-chip.png'
import FiveHundredK from '../images/500k-chip.png'
import OneMillion from '../images/1m-chip.png'
import SpinCircle from '../images/spin-circle.png'

export default function BettingOptions(props) {

    const handleChipClick = (value) => {
        if(props.isSpinComplete) {
            props.setCurrentBetValue(value)
        }
    }

    return(
        <div className="betting-options-div">
            <div className="chip-options-div">
                {props.chipCount >= 1 ? <img alt="1 chip" onClick={() => handleChipClick(1)} className={props.currentBetValue === 1 ? "active-chip" : "chip-img"} src={One}></img> : <></>}
                {props.chipCount >= 5 ? <img alt="5 chip" onClick={() => handleChipClick(5)} className={props.currentBetValue === 5 ? "active-chip" : "chip-img"} src={Five}></img> : <></>}
                {props.chipCount >= 25 ? <img alt="25 chip" onClick={() => handleChipClick(25)} className={props.currentBetValue === 25 ? "active-chip" : "chip-img"} src={TwentyFive}></img> : <></>}
                {props.chipCount >= 100 ? <img alt="100 chip" onClick={() => handleChipClick(100)} className={props.currentBetValue === 100 ? "active-chip" : "chip-img"} src={OneHundred}></img> : <></>}
                {props.chipCount >= 500 ? <img alt="500 chip" onClick={() => handleChipClick(500)} className={props.currentBetValue === 500 ? "active-chip" : "chip-img"} src={FiveHundred}></img> : <></>}
                {props.chipCount >= 1000 ? <img alt="1000 chip" onClick={() => handleChipClick(1000)} className={props.currentBetValue === 1000 ? "active-chip" : "chip-img"} src={OneThousand}></img> : <></>}
                {props.chipCount >= 10000 ? <img alt="10k chip" onClick={() => handleChipClick(10000)} className={props.currentBetValue === 10000 ? "active-chip" : "chip-img"} src={TenThousand}></img> : <></>}
                {props.chipCount >= 50000 ? <img alt="50k chip" onClick={() => handleChipClick(50000)} className={props.currentBetValue === 50000 ? "active-chip" : "chip-img"} src={FiftyThousand}></img> : <></>}
                {props.chipCount >= 100000 ? <img alt="100k chip" onClick={() => handleChipClick(100000)} className={props.currentBetValue === 100000 ? "active-chip" : "chip-img"} src={OneHundredK}></img> : <></>}
                {props.chipCount >= 500000 ? <img alt="500k chip" onClick={() => handleChipClick(500000)} className={props.currentBetValue === 500000 ? "active-chip" : "chip-img"} src={FiveHundredK}></img> : <></>}
                {props.chipCount >= 1000000 ? <img alt="1 million chip" onClick={() => handleChipClick(1000000)} className={props.currentBetValue === 1000000 ? "active-chip" : "chip-img"} src={OneMillion}></img> : <></>}
            </div>
            <div className="spin-circle-div">
                <img alt="spin circle" onClick={props.spinTheWheel} className="spin-circle" src={SpinCircle}></img>
            </div>
        </div>
    )
}