import React from "react";

function PlayStop() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function Play(e, compteur = 1) {
        e.preventDefault();
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(count => {
                    if (count >= 20) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        return count;
                    }
                    return count + compteur;
                    
                });
            setIsPlaying(true);
            }, 1000);
        }
    }

    function Stop(e) {
        e.preventDefault();
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsPlaying(false);
        }
    }

    function Reset(e) {
        e.preventDefault();
        setCount(0);
        Stop(e);
    }  

    return (
        <div>
            <button onClick={Play} disabled={isPlaying}>Play +1</button>
            <button onClick={(e) => Play(e,2)} disabled={isPlaying}>Play +2</button>               
            <button onClick={Stop} disabled={!isPlaying}>Stop</button><br />
            <button onClick={Reset} disabled={count === 0}>Reset</button>
            <p>Counter: {count}</p>
        </div>
    );
}

export default PlayStop;