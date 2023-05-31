import { combineReducers } from "redux";
import quizSlice from "./Quiz/quizSlice";
import quizSlice from "./Quiz/quizSlice";

const reducer = combineReducers({
    quiz: quizSlice.reducer
});

export default reducer;
