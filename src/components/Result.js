import React, { useEffect, useState } from 'react';  
import { FaHandSpock, FaHandScissors, FaHandRock, FaHandLizard, FaHandPaper } from "react-icons/fa";
import Button from './Button'



const Result = ({userOption, machineOption, setResult, setOptions}) => {

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
    
        <div>
            {iconsUser['scissors'] && <FaHandScissors/>}
            {iconsUser['rock'] && <FaHandRock/>}
            {iconsUser['paper'] && <FaHandPaper/>}
            {iconsUser['lizard'] && <FaHandLizard/>}
            {iconsUser['spock'] && <FaHandSpock/>}
        </div>     
        <p>vs</p> 
        <div>
            {iconsMachine['scissors'] && <FaHandScissors/>}
            {iconsMachine['rock'] && <FaHandRock/>}
            {iconsMachine['paper'] && <FaHandPaper/>}
            {iconsMachine['lizard'] && <FaHandLizard/>}
            {iconsMachine['spock'] && <FaHandSpock/>}
        </div>

    </div>
    <Button onClick={() => {setResult(false); setOptions(true)}} text='play again' icon='FaPlay'/>
    </>
}

export default Result;