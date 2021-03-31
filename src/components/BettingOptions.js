import React from "react";
import "../stylesheets/BettingOptions.css";
import One from "../images/1-chip.png";
import Five from "../images/5-chip.png";
import TwentyFive from "../images/25-chip.png";
import OneHundred from "../images/100-chip.png";
import FiveHundred from "../images/500-chip.png";
import OneThousand from "../images/1000-chip.png";
import TenThousand from "../images/10k-chip.png";
import FiftyThousand from "../images/50k-chip.png";
import OneHundredK from "../images/100k-chip.png";
import FiveHundredK from "../images/500k-chip.png";
import OneMillion from "../images/1m-chip.png";
import SpinCircle from "../images/spin-circle.png";
import Wheel from "../images/roulette-wheel.png";

export default function BettingOptions({
  chipCount,
  currentBetValue,
  setCurrentBetValue,
  spinTheWheel,
  isSpinComplete,
  pendingTotalBet,
  recentBet,
  isWheelSpinning,
  winningNumber,
  undoRecentBet,
  whichMessage,
  resetLayout,
  collectWinnings,
  totalAmountWon
}) {
  const handleChipClick = (value) => {
    if (!isSpinComplete) {
      setCurrentBetValue(value);
    }
    if (value === currentBetValue) {
      setCurrentBetValue(0);
    }
  };

  const whatColorNumber = () => {
    switch (winningNumber) {
      case "0":
        return "green-wheel-number";
        break;
      case "1":
        return "red-wheel-number";
        break;
      case "2":
        return "black-wheel-number";
        break;
      case "3":
        return "red-wheel-number";
        break;
      case "4":
        return "black-wheel-number";
        break;
      case "5":
        return "red-wheel-number";
        break;
      case "6":
        return "black-wheel-number";
        break;
      case "7":
        return "red-wheel-number";
        break;
      case "8":
        return "black-wheel-number";
        break;
      case "9":
        return "red-wheel-number";
        break;
      case "10":
        return "black-wheel-number";
        break;
      case "11":
        return "black-wheel-number";
        break;
      case "12":
        return "red-wheel-number";
        break;
      case "13":
        return "black-wheel-number";
        break;
      case "14":
        return "red-wheel-number";
        break;
      case "15":
        return "black-wheel-number";
        break;
      case "16":
        return "red-wheel-number";
        break;
      case "17":
        return "black-wheel-number";
        break;
      case "18":
        return "red-wheel-number";
        break;
      case "19":
        return "red-wheel-number";
        break;
      case "20":
        return "black-wheel-number";
        break;
      case "21":
        return "red-wheel-number";
        break;
      case "22":
        return "black-wheel-number";
        break;
      case "23":
        return "red-wheel-number";
        break;
      case "24":
        return "black-wheel-number";
        break;
      case "25":
        return "red-wheel-number";
        break;
      case "26":
        return "black-wheel-number";
        break;
      case "27":
        return "red-wheel-number";
        break;
      case "28":
        return "black-wheel-number";
        break;
      case "29":
        return "black-wheel-number";
        break;
      case "30":
        return "red-wheel-number";
        break;
      case "31":
        return "black-wheel-number";
        break;
      case "32":
        return "red-wheel-number";
        break;
      case "33":
        return "black-wheel-number";
        break;
      case "34":
        return "red-wheel-number";
        break;
      case "35":
        return "black-wheel-number";
        break;
      case "36":
        return "red-wheel-number";
        break;
      case "00":
        return "green-wheel-number";
        break;
    }
  };

  return (
    <div className="betting-options-div">
      <div className="wheel-div">
        <img
          alt="roulette wheel"
          className={
            isWheelSpinning ? "roulette-wheel-spinning" : "roulette-wheel"
          }
          src={Wheel}
        ></img>
        {!isWheelSpinning ? (
          <div className={`${whatColorNumber()} wheel-number-div`}>
            <h2 className="winning-number-h2">{winningNumber}</h2>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="reset-button-div">
        {isSpinComplete ? (
          <div className="winnings-div">
            {totalAmountWon > 0 ? (
              <h3>
                {whichMessage("won")}
                <span className="winnings-div-num">{totalAmountWon}</span>!
              </h3>
            ) : (
              <h3>
                {whichMessage("lost")}
                <span className="winnings-div-num">{pendingTotalBet}</span>.
              </h3>
            )}
            {chipCount < 1 && totalAmountWon === 0 && isSpinComplete ? (
              <button className="restart-button" onClick={resetLayout}>
                +1000 Restart
              </button>
            ) : (
              <button
                className="collect-winnings-button"
                onClick={collectWinnings}
              >
                {totalAmountWon > 0 ? "Collect Winnings" : "Clear Layout"}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="chip-options-div">
        {chipCount >= 1 ? (
          <div className="img-div">
            <img
              alt="1 chip"
              onClick={() => handleChipClick(1)}
              className={currentBetValue === 1 ? "active-chip" : "chip-img"}
              src={One}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 5 ? (
          <div className="img-div">
            <img
              alt="5 chip"
              onClick={() => handleChipClick(5)}
              className={currentBetValue === 5 ? "active-chip" : "chip-img"}
              src={Five}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 25 ? (
          <div className="img-div">
            <img
              alt="25 chip"
              onClick={() => handleChipClick(25)}
              className={currentBetValue === 25 ? "active-chip" : "chip-img"}
              src={TwentyFive}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 100 ? (
          <div className="img-div">
            <img
              alt="100 chip"
              onClick={() => handleChipClick(100)}
              className={currentBetValue === 100 ? "active-chip" : "chip-img"}
              src={OneHundred}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 500 ? (
          <div className="img-div">
            <img
              alt="500 chip"
              onClick={() => handleChipClick(500)}
              className={currentBetValue === 500 ? "active-chip" : "chip-img"}
              src={FiveHundred}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 1000 ? (
          <div className="img-div">
            <img
              alt="1000 chip"
              onClick={() => handleChipClick(1000)}
              className={currentBetValue === 1000 ? "active-chip" : "chip-img"}
              src={OneThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 10000 ? (
          <div className="img-div">
            <img
              alt="10k chip"
              onClick={() => handleChipClick(10000)}
              className={currentBetValue === 10000 ? "active-chip" : "chip-img"}
              src={TenThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 50000 ? (
          <div className="img-div">
            <img
              alt="50k chip"
              onClick={() => handleChipClick(50000)}
              className={currentBetValue === 50000 ? "active-chip" : "chip-img"}
              src={FiftyThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 100000 ? (
          <div className="img-div">
            <img
              alt="100k chip"
              onClick={() => handleChipClick(100000)}
              className={
                currentBetValue === 100000 ? "active-chip" : "chip-img"
              }
              src={OneHundredK}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 500000 ? (
          <div className="img-div">
            <img
              alt="500k chip"
              onClick={() => handleChipClick(500000)}
              className={
                currentBetValue === 500000 ? "active-chip" : "chip-img"
              }
              src={FiveHundredK}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 1000000 ? (
          <div className="img-div">
            <img
              alt="1 million chip"
              onClick={() => handleChipClick(1000000)}
              className={
                currentBetValue === 1000000 ? "active-chip" : "chip-img"
              }
              src={OneMillion}
            ></img>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="spin-img-div">
        <div className="spin-circle-container">
          <img
            alt="spin circle"
            onClick={spinTheWheel}
            className="spin-circle"
            src={SpinCircle}
          ></img>
        </div>
        {!isSpinComplete ? (
          <div className="buttons-div">
            {pendingTotalBet > 0 ? (
              <button onClick={resetLayout} className="reset-button">
                Reset All Bets
              </button>
            ) : (
              <></>
            )}
            {recentBet.length === 2 ? (
              <button onClick={undoRecentBet} className="undo-bet-button">
                Undo Last Bet
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="filler-div"></div>
        )}
      </div>
    </div>
  );
}
