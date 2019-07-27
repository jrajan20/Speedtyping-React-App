import React, {useState, useEffect} from 'react';

const Timer = props => {
 const [time, setTime] = useState(15);

useEffect(()=> {
let countdown = null;
	if (props.start){
		countdown = setInterval(() =>{
			setTime(time - 1);
		},1000)
	} else if (!props.start && time !== 0) {
      clearInterval(countdown);
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
