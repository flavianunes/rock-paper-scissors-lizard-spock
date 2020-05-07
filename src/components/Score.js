import React from 'react';  

function Score ({score}) {
    return <div className="score"><label htmlFor='score'>Score</label> <span className='score-number'>{score}</span></div>;
}

export default Score;