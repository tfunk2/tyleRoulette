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
import Wheel from '../images/roulette-wheel.png'

export default function BettingOptions(props) {

    const handleChipClick = (value) => {
        if(props.isSpinComplete || !props.isSpinComplete) {
            props.setCurrentBetValue(value)
        }
    }

    return(
        <div className="betting-options-div">
            <div className="wheel-div">
                <img alt="roulette wheel" className="roulette-wheel" src={Wheel}></img>
            </div>
            <div className="chip-options-div">
                
                {props.chipCount >= 1 ?
                    <div className="img-div">
                        <img alt="1 chip" onClick={() => handleChipClick(1)} 
                            className={props.currentBetValue === 1 ? "active-chip" : "chip-img"} 
                            src={One}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 5 ?
                    <div className="img-div">
                        <img alt="5 chip" onClick={() => handleChipClick(5)} 
                            className={props.currentBetValue === 5 ? "active-chip" : "chip-img"} 
                            src={Five}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 25 ?
                    <div className="img-div">
                        <img alt="25 chip" onClick={() => handleChipClick(25)} 
                            className={props.currentBetValue === 25 ? "active-chip" : "chip-img"} 
                            src={TwentyFive}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 100 ?
                    <div className="img-div">
                        <img alt="100 chip" onClick={() => handleChipClick(100)} 
                            className={props.currentBetValue === 100 ? "active-chip" : "chip-img"} 
                            src={OneHundred}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 500 ?
                    <div className="img-div">
                        <img alt="500 chip" onClick={() => handleChipClick(500)} 
                            className={props.currentBetValue === 500 ? "active-chip" : "chip-img"} 
                            src={FiveHundred}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 1000 ?
                    <div className="img-div">
                        <img alt="1000 chip" onClick={() => handleChipClick(1000)} 
                            className={props.currentBetValue === 1000 ? "active-chip" : "chip-img"} 
                            src={OneThousand}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 10000 ?
                    <div className="img-div">
                        <img alt="10k chip" onClick={() => handleChipClick(10000)} 
                            className={props.currentBetValue === 10000 ? "active-chip" : "chip-img"} 
                            src={TenThousand}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 50000 ?
                    <div className="img-div">
                        <img alt="50k chip" onClick={() => handleChipClick(50000)} 
                            className={props.currentBetValue === 50000 ? "active-chip" : "chip-img"} 
                            src={FiftyThousand}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 100000 ?
                    <div className="img-div">
                        <img alt="100k chip" onClick={() => handleChipClick(100000)} 
                            className={props.currentBetValue === 100000 ? "active-chip" : "chip-img"} 
                            src={OneHundredK}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 500000 ?
                    <div className="img-div">
                        <img alt="500k chip" onClick={() => handleChipClick(500000)} 
                            className={props.currentBetValue === 500000 ? "active-chip" : "chip-img"} 
                            src={FiveHundredK}
                        >
                        </img>
                        </div> : <></>}
                
                {props.chipCount >= 1000000 ?
                    <div className="img-div">
                        <img alt="1 million chip" onClick={() => handleChipClick(1000000)} 
                            className={props.currentBetValue === 1000000 ? "active-chip" : "chip-img"} 
                            src={OneMillion}
                        >
                        </img>
                        </div> : <></>}
            </div>
            <div className="img-div">
                <img alt="spin circle" onClick={props.spinTheWheel} className="spin-circle" src={SpinCircle}></img>
            </div>
        </div>
    )
}