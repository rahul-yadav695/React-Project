import React, { useState, useEffect } from 'react';

function Timer() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        console.log(timer)

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Timer:</h1>
            <h1>{timer}</h1>
        </div>
    );
}

export default Timer;
