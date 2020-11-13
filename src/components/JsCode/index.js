import React, { useState } from "react";
import "./index.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function JsCode() {
  const jsCodeChallenges = [
    {
      id: 1,
      challengeName: "Seven Boom!",
      challenge: `Create a function that takes an array of numbers and return "Boom!"
        if the number 7 appears in the array. Otherwise, return "there is no
        7 in the array".`,
      solution: `function sevenBoom(arr) {
          let newArr = arr.join("").split("");
          if(newArr.includes(7) || newArr.includes("7")) {
            return 'Boom!';
          } else {
            return "there is no 7 in the array";
          }
        }`,
    },
    {
      id: 2,
      challengeName: "Tower of Hanoi",
      challenge: `There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.
      Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.`,
      solution: `function towerHanoi(discs) {
        return Math.pow(2, discs) - 1;
      }`,
    },
    {
      id: 3,
      challengeName: "Number of Boomerangs",
      challenge: `A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
      Some boomerang examples:
      [3, 7, 3], [1, -1, 1], [5, 6, 5]
      Create a function that returns the total number of boomerangs in an array.`,
      solution: `function countBoomerangs(arr) {
        let numOfBoom = 0;
        for(let i = 0; i < arr.length; i++) {
          if(arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
            numOfBoom++;
          }
        }
        return numOfBoom;
      }`,
    },
    {
      id: 4,
      challengeName: "Oddish vs. Evenish",
      challenge: `Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".`,
      solution: `function oddishOrEvenish(num) {
        let splitNumberToArrOfStr = num.toString().split("");
        let arrToNum = splitNumberToArrOfStr.map((ele) => {
          return parseInt(ele);
        });
        let sum = arrToNum.reduce((total, n) => {
          return total + n;
        });
      
        if (sum % 2 === 0) {
          return "Evenish";
        } else {
          return "Oddish";
        }
      }`,
    },
    {
      id: 5,
      challengeName: "How Many Days Between Two Dates",
      challenge: `Create a function that takes two dates and returns the number of days between the first and second date.`,
      solution: `function getDays(date1, date2) {
        let difference = date2 - date1;
        let diffInDays = difference / (1000 * 60 * 60 * 24);
        return diffInDays;
      }`,
    },
    {
      id: 6,
      challengeName: "Let's Meet!",
      challenge: `From point A, an object is moving towards point B at constant velocity va (in km/hr). From point B, another object is moving towards point A at constant velocity vb (in km/hr). Knowing this and the distance between point A and B (in km), write a function that returns how much time passes until both objects meet.`,
      solution: `function letsMeet(distance, va, vb) {
        let timetoMeet = distance / (va + vb);
        let hours = Math.floor(timetoMeet);
        let minutes = Math.floor((timetoMeet - hours) * 60);
        let seconds =
          (timetoMeet - hours) * 60 - Math.floor((timetoMeet - hours) * 60);
        
        let answer = ${"${hours}h ${minutes}min ${Math.floor(seconds * 60)}s"};
        return answer;
      }`,
    },
  ];

  const [countChallenge, setCountChallenge] = useState(0);

  const nextChanellge = () => {
    if (countChallenge < 5 && countChallenge >= 0) {
      setCountChallenge((prevCount) => prevCount + 1);
    }
  };
  const prevChanellge = () => {
    if (countChallenge <= 6 && countChallenge >= 1) {
      setCountChallenge((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="jscode">
      <h5 className="jscode__title">
        I like to solve JavaScript challenges from different resources, mainly
        from the website{" "}
        <a href="https://edabit.com" target="_blank">
          edabit.com
        </a>
        . Here are some of them..
      </h5>
      <div className="jscode__challengesContainer">
        <div className="jscode__nav">
          <span
            onClick={prevChanellge}
            style={
              countChallenge === 0
                ? { color: "gray" }
                : { color: "var(--textColor)" }
            }
          >
            <i class="fas fa-arrow-left"></i>Prev Challenge
          </span>
          <span
            onClick={nextChanellge}
            style={
              countChallenge === 5
                ? { color: "gray" }
                : { color: "var(--textColor)" }
            }
          >
            Next Challenge
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
        <div className="jscode__challenge">
          <h4>{jsCodeChallenges[countChallenge].challengeName}</h4>
          <div className="jscode__question">
            {jsCodeChallenges[countChallenge].challenge}
          </div>
          <div className="jscode__solution">
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {jsCodeChallenges[countChallenge].solution}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JsCode;

/*
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
*/
