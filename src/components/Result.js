import React  from 'react';  
import { FaHandSpock, FaHandScissors, FaHandRock, FaHandLizard, FaHandPaper } from "react-icons/fa";
import Button from './Button'

const Result = ({userOption, machineOption, setResult, setOptions, setMessage}) => {

    const iconsUser = {
        'scissors': false,
        'rock': false,
        'paper': false,
        'lizard': false,
        'spock': false
    }

    iconsUser[userOption] = true;

    const iconsMachine = {
        'scissors': false,
        'rock': false,
        'paper': false,
        'lizard': false,
        'spock': false
    }
    iconsMachine[machineOption] = true;


    return <>
    <div className="result">
    
        <div className="iconUser">
            {iconsUser['scissors'] && <FaHandScissors/>}
            {iconsUser['rock'] && <FaHandRock/>}
            {iconsUser['paper'] && <FaHandPaper/>}
            {iconsUser['lizard'] && <FaHandLizard/>}
            {iconsUser['spock'] && <FaHandSpock/>}
        </div>     
        <p className="vs">x</p> 
        <div  className="iconMachine">
            {iconsMachine['scissors'] && <FaHandScissors/>}
            {iconsMachine['rock'] && <FaHandRock/>}
            {iconsMachine['paper'] && <FaHandPaper/>}
            {iconsMachine['lizard'] && <FaHandLizard/>}
            {iconsMachine['spock'] && <FaHandSpock/>}
        </div>

    </div>
    <Button onClick={() => {setResult(false); setOptions(true); setMessage(`Pick one and let's play!`)}} text='play again' icon='FaPlay'/>
    </>
}

export default Result;