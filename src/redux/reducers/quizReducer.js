import { ADD_QUIZ, GET_QUESTION, UPD } from "../actionTypes/quizAT"
import quiz from "../../serverDB/server";

const quizReducer = (state = { quiz: [] }, action) => {
  switch (action.type) {
    
    case ADD_QUIZ:
      return { ...state, quiz : [...quiz] }

    case GET_QUESTION:

      return {...state.quiz}

    case UPD:

      return { ...state, quiz: [] }

    default:
      return state
  }
}
export default quizReducer
