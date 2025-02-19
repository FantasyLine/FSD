import { useEffect } from "react";
import useQuestionReducer from "./QuestionReducer"; // Utilise le hook personnalisé correctement

function Stopwatch() {
    const [state, dispatch] = useQuestionReducer(); // Utilisation correcte du hook personnalisé

    useEffect(() => {
        const interval = setInterval(() => {
           if (state.timeLeft > 0) {
               dispatch({ type: 'TIME_LEFT', payload: state.timeLeft - 1 });
           }
        }, 1000);

        if (state.timeLeft === 0) {
            dispatch({ type: 'NEXT_QUESTION' });
        }


        return () => clearInterval(interval);
    }, [state.timeLeft]);

    return (
        <div>
            <p>Time left: {state.timeLeft}</p>
        </div>
    );
}

export default Stopwatch;
