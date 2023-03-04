import { combineReducers } from "redux";
import { dummyReducer } from "./dummyData/Reducer";
import modalReducer from "./modal/modalReducer";
import selectReducer from "./selectState/selectReducer";
const rootReducer = combineReducers({
  data: dummyReducer,
  modal: modalReducer,
  select: selectReducer,
});

export default rootReducer;
