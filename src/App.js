import React, {useState} from 'react';

import './App.css';
import Timer from './Timer.js'



export default () => {
  const [name, setName] = useState(null)
  const [score, setScore] =useState(0)
  const [isActive, setisActive] = useState(false)
  const [word, setWord] =useState('')
  const [played, setPlayed] = useState(false)
  // const [highscore, setHighscore] = useState(0)


  const _handleKeyDownN = (e) => {
     if (e.key === 'Enter') {
      setName(e.target.value)
    }
  }

  const getWords = () => {
    fetch("https://random-word-api.herokuapp.com/word?key=FGB1YPZP&number=1")
      .then(res => res.json())
      .then(
        (result) => {
          setWord(result[0])
        },
        (error) => {
          console.log("ERROR")
        }
    )
  }

  const _handleClickS = () => {
    setScore(0)
    setWord('')
    getWords()
    setisActive(true)
    setPlayed(true)
    
  }



  const correctWord = (e) => {
    if (e.target.value === word){
      setScore(score + 1)
      getWords()
      e.target.value = ''

      console.log(word)
    }
  }




  return (
    <div className="App">
      <header className="app-header">
        <h1>TYPE MASTER</h1>
        <div>
          {name ? (<h4 className="name-header"> Welcome {name}</h4>):(<h4>
            Enter Name: <input className = "enter-name" type="text" onKeyDown={_handleKeyDownN}></input>
          </h4>)}
          {name ? (<p>Your Score : {score} </p>):(<p> Enter name to record score! </p>) }

          <div className="word-display">
            <label>{isActive ? word : ''}</label>
          </div>
          <Timer start = {isActive} timerSwitch = {setisActive} />

        </div>  
        
        {isActive ? (<input type="text" onChange ={correctWord}></input>
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