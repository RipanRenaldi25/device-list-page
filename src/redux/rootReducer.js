import { combineReducers } from "redux";
import { dummyReducer } from "./dummyData/Reducer";
import modalReducer from "./modal/modalReducer";
import selectReducer from "./selectState/selectReducer";
import groupListReducer from "./groupListModal/groupListReducer";
import deviceReducer from "./deviceData/deviceReducer";
const rootReducer = combineReducers({
  data: dummyReducer,
  modal: modalReducer,
  select: selectReducer,
  groupListModal: groupListReducer,
  device: deviceReducer,
});

export default rootReducer;
