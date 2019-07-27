import React, {useState} from 'react';

import './App.css';
import Timer from './Timer.js'



export default () => {
  const [name, setName] = useState(null)
  const [score, setScore] =useState(0)
  const [isActive, setisActive] = useState(false)
  const [word, setWord] =useState('')
  const [played, setPlayed] = useState(false)
  // const [highscore, setHighscore] = useState(0)  (potential future feature)


  const _handleKeyDownN = (e) => {    //handles name enter
     if (e.key === 'Enter') {
      setName(e.target.value)
    }
  }

//random words API fetch
  const getWords = () => { //sometimes the api key bugs and doesnt work so a new one might have to be used.
    fetch("https://random-word-api.herokuapp.com/word?key=T143X8R5&number=1")
      .then(res => res.json())
      .then(
        (result) => {
          setWord(result[0])
          // console.log(result[0])
        },
        (error) => {
          console.log("ERROR")
        }
    )
  }

  const _handleClickS = () => {  //start game
   if (name){
      setScore(0)
      setWord('')
      getWords()
      setisActive(true)
      setPlayed(true)
    } else {
      alert("Please enter name first!")
    }
    
  }


  const correctWord = (e) => {     //scoring function
    if (e.target.value === word){
      setScore(score + 1)
      getWords()
      e.target.value = ''
      
    }
  }


  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">TYPE MASTER</h1>
        <div>
          {name ? (<h4 className="name-header"> Welcome {name}</h4>):(<h4 className = "name-label">
            Enter Name: <input className = "enter-name" type="text" maxLength="30" onKeyDown={_handleKeyDownN}></input>
          </h4>)}
          {name ? (<p className="score-label">Your Score : {score} </p>):(<p> Enter name to record score! </p>) }

          <div className="word-display">
            <label>{isActive ? word : ''}</label>
          </div>
          <span className="timer"><Timer start = {isActive} timerSwitch = {setisActive} /></span>
        </div>  
        
        {isActive ? (<input  autoFocus className="word-input" type="text" onChange ={correctWord}></input>
          ) : (
            <button className="start-game" onClick = {_handleClickS}> {played ? 'TRY AGAIN' : 'START GAME'} </button>
          )
         
        }
        <label className ="rule-box">
            <h3>Rules:</h3>
            <ul>
              <li> You will be given a random word in the box above. </li>
              <li> Type the word as fast as you can, and another word will appear.</li>
              <li> You have 30 seconds to type as many words as possible.  Your score is the number of words you are able to type.</li>
            </ul>
        </label>

      </header>

    </div>

    )
}