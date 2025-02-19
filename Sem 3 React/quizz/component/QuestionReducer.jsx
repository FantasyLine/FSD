import { useReducer } from "react";

const initialState = {
    questions: [
      { id: 1, question: "Quelle est la capitale de la France ?", options: ["Paris", "Londres", "Berlin", "Rome"], correctAnswer: "Paris" },
      { id: 2, question: "Combien font 5 × 6 ?", options: ["30", "25", "20", "35"], correctAnswer: "30" },
      { id: 3, question: "Quel est le plus grand océan du monde ?", options: ["Pacifique", "Atlantique", "Arctique", "Indien"], correctAnswer: "Pacifique" },
      { id: 4, question: "Qui a peint la Joconde ?", options: ["Vincent van Gogh", "Pablo Picasso", "Léonard de Vinci", "Claude Monet"], correctAnswer: "Léonard de Vinci" },
      { id: 5, question: "Quelle planète est la plus proche du soleil ?", options: ["Mars", "Vénus", "Mercure", "Jupiter"], correctAnswer: "Mercure" },
      { id: 6, question: "En quelle année a eu lieu la Révolution française ?", options: ["1776", "1789", "1804", "1815"], correctAnswer: "1789" },
      { id: 7, question: "Quelle est la langue officielle du Brésil ?", options: ["Espagnol", "Portugais", "Français", "Anglais"], correctAnswer: "Portugais" },
      { id: 8, question: "Quel est l'élément chimique représenté par le symbole O ?", options: ["Or", "Oxygène", "Osmium", "Hydrogène"], correctAnswer: "Oxygène" },
      { id: 9, question: "Quelle est la devise nationale des États-Unis ?", options: ["E Pluribus Unum", "Liberté, Égalité, Fraternité", "In God We Trust", "Justice for All"], correctAnswer: "In God We Trust" },
      { id: 10, question: "Quel animal est connu pour sa capacité à changer de couleur ?", options: ["Serpent", "Caméléon", "Pieuvre", "Tigre"], correctAnswer: "Caméléon" }
    ],
    currentQuestion: 0,
    score: 0,
    timeLeft: 30, // temps en secondes
};

function reducer(state, action) {
  switch (action.type) {
    case 'ANSWER':
      if (state.questions[state.currentQuestion].correctAnswer === action.payload) {
        return {
          ...state,
          score: state.score + 1,
        };
      }
      return state;

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        timeLeft: 30,
      };

    case 'RESET':
      return {
        ...state,
        currentQuestion: 0,
        score: 0,
        timeLeft: 30,
      };
    case 'SET_TIME_LEFT':
      return {
        ...state,
        timeLeft: 30,
    }
    case 'TIME_LEFT':
      return {
        ...state,
        timeLeft: action.payload,
      };

    default:
      return state;
  }
}

// Le hook personnalisé doit retourner l'état et dispatch
const useQuestionReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch]; // Retourne l'état et la fonction dispatch
};

export default useQuestionReducer;
