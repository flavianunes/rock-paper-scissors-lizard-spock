import React from 'react';
import { FaHandSpock, FaHandScissors, FaHandRock, FaHandLizard, FaHandPaper, FaPlay } from "react-icons/fa";

import '../styles/Button.scss';


const Button = ({onClick, icon, text}) => {
    const icons = {
        'FaHandSpock': false,
        'FaHandScissors': false,
        'FaHandRock': false,
        'FaHandLizard': false,
        'FaHandPaper': false,
        'FaPlay': false
    }
    icons[icon] = true;

    return <button className="btn" onClick={onClick} aria-label={text}>
        {icons['FaHandSpock'] && <FaHandSpock />}
        {icons['FaHandScissors'] && <FaHandScissors />}
        {icons['FaHandRock'] && <FaHandRock />}
        {icons['FaHandLizard'] && <FaHandLizard />}
        {icons['FaHandPaper'] && <FaHandPaper />}
        {icons['FaPlay'] && <FaPlay />}
    </button>
}

export default Button;