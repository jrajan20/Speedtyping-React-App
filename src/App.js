import React, {useState} from 'react';
import './App.css';
import Timer from './Timer.js'



export default () => {
  const [name, setName] = useState('')
  const [score, setScore] =useState('0')
  const [isActive, setisActive] = useState(false)

  const [word, setWord] =useState('')

  const _handleKeyDownN = (e) => {
     if (e.key === 'Enter') {
      setName(e.target.value);
    }
  }

  const _handleClickS = () => {
    setisActive(true)
  }
  

  return (
    <div className="App">
      <header className="app-header">
        <h1>TYPE MASTER</h1>
        <div>
          <p>
            Enter Name: <input type="text" onKeyDown={_handleKeyDownN}></input>
          </p>
          <label>
            Rules:
            <ul>
              <li> You will be given a random word in the box below </li>
              <li> Type the word as fast as you can, and another word will appear.</li>
              <li> You have 30 seconds to type as many words as possible.  Your score is the number of words you are able to type.</li>
            </ul>
          </label>

          <label className="word-display">{name}</label>
          <Timer start = {isActive} />

        </div>  
         <button className="start-Game" onClick = {_handleClickS}> START </button>

      </header>


    </div>

    )
}