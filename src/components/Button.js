import React from 'react';
import { FaHandSpock, FaHandScissors, FaHandRock, FaHandLizard, FaHandPaper } from "react-icons/fa";

import '../styles/Button.scss';


const Button = ({onClick, icon, text}) => {
    const icons = {
        'FaHandSpock': false,
        'FaHandScissors': false,
        'FaHandRock': false,
        'FaHandLizard': false,
        'FaHandPaper': false
    }
    icons[icon] = true;

    return <button className="btn" onClick={onClick} aria-label={text}>
        {icons['FaHandSpock'] && <FaHandSpock />}
        {icons['FaHandScissors'] && <FaHandScissors />}
        {icons['FaHandRock'] && <FaHandRock />}
        {icons['FaHandLizard'] && <FaHandLizard />}
        {icons['FaHandPaper'] && <FaHandPaper />}

    </button>
}

export default Button;