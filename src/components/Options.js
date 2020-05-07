import React from 'react';  
import Button from './Button';



const Options = ({options, props}) => {

    return <div className='option'>

      <Button onClick={() => play(options[0], options[getMachineOption()], props)} icon = 'FaHandRock' text= "rock" /> 

      <Button onClick={() => play(options[1], options[getMachineOption()], props)} icon = 'FaHandPaper' text= "paper" />

      <Button onClick={() => play(options[2], options[getMachineOption()], props)} icon = 'FaHandScissors' text= "Scissors" />

      <Button onClick={() => play(options[3], options[getMachineOption()], props)} icon = 'FaHandLizard' text= "lizard" />

      <Button onClick={() => play(options[4], options[getMachineOption()], props)} icon = 'FaHandSpock' text= "spock" />

    </div>;
}

export default Options;


function play (userOption, machineOption, {score, setScore, setMessage, setMachineOption, setUserOption, setOptions, setResult}) {

    const {addScore, msg} = getResult(userOption, machineOption);
    setUserOption(userOption);
    setMachineOption(machineOption);
    if (addScore) setScore(score + 1);
    setMessage(msg);
    setOptions(false);
    setResult(true);
  }
  
  function getResult (userOption, machineOption) {

    const result = {
      addScore: false,
      msg: "You loose.."
    }
  
    const rules = {
      'scissors': ['rock', 'spock'],
      'paper': ['scissors', 'lizard'],
      'rock': ['paper', 'spock'],
      'spock': ['lizard', 'paper'],
      'lizard': ['rock', 'scissors']
    }
  
    if (userOption === machineOption) 
      return {...result, msg:"It's a tie, play again!" };
  
    else if (rules[machineOption].includes(userOption)) 
      return { addScore: true, msg: "You win, play again'" };
    
    else 
      return result;
      
  }
  
function getMachineOption () {
    return Math.floor(Math.random() * 5);


}