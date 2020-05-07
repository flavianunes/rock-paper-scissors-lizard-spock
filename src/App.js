import React, {useState} from 'react';
import './styles/App.scss';

import Score from './components/Score';
import Instructions from './components/Instructions';
import Options from './components/Options';
import Result from './components/Result';

function App() {

  const options = ['rock','paper', 'scissors', 'lizard', 'spock'];
  
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Pick one and let's play!");
  const [userOption, setUserOption] = useState(options[0]);
  const [machineOption, setMachineOption] = useState(options[0]);

  const [showOptions, setOptions] = useState(true);
  const [showResult, setResult] = useState(false);
   

  const props = {
    score, setScore, setMessage, setUserOption, setMachineOption, setOptions, setResult
  }

  return (
   <main className='container'> 
    <header>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <Score score = {score} />
    </header>
    <Instructions msg = {message} />
    {showResult && <Result userOption = {userOption} machineOption={machineOption} setOptions = {setOptions} setResult = {setResult}/>}
    {showOptions && <Options options={options} props={props}/>}
   
   </main>
  );
}



export default App;
