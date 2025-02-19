import React from "react";
import useQuestionReducer from "./QuestionReducer"; // Utilisation correcte du hook
import Stopwatch from "./Stopwatch";

const Quiz = () => {
    const [state, dispatch] = useQuestionReducer();  // Utilisation correcte du hook personnalisé

    const handleAnswer = (answer) => {
        dispatch({ type: 'ANSWER', payload: answer });

        if (state.currentQuestion < state.questions.length - 1 ) {
            dispatch({ type: 'NEXT_QUESTION' });
            dispatch({ type: 'SET_TIME_LEFT' });
        } else if (state.currentQuestion === state.questions.length - 1) {
            return (
                <div>
                    <p>Score: {state.score}</p>
                </div>)
        }
    };

    return (
        <div className="quiz-container">
            <h1>Quiz du Savoir</h1>
            <div className="question-container">
                <h2>{state.questions[state.currentQuestion]?.question}</h2>
                <div className="options">
                    {state.questions[state.currentQuestion]?.options.map((option, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleAnswer(option)}
                            disabled={state.timeLeft === 0}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className="score-time">
                <Stopwatch />
            </div>
        </div>
    );
};

export default Quiz;
