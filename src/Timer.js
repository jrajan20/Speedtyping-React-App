import React, {useState, useEffect} from 'react';

const Timer = props => {
 const [time, setTime] = useState(30);

useEffect(()=> {   //timer starts as soon as the timer as soon as component mounts
let countdown = null;
	if (props.start){
		countdown = setInterval(() =>{
			setTime(time - 1);
		},1000)  //1 second intervals
	} else if (!props.start && time !== 0) {
      clearInterval(countdown); //makes sure game is active 
    } 
    if (time === 0){              //end of game timer reset
    	props.timerSwitch(false)
    	setTime(30)
    }
    return () => clearInterval(countdown);  
  }, [props.start, time]);



  return (
    <div className="Timer">
     	
    	<h2>Timer: {time}s</h2>

    </div>

    )
}

export default Timer;
