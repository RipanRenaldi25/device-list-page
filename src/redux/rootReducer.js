import { combineReducers } from "redux";
import { dummyReducer } from "./dummyData/Reducer";
import modalReducer from "./modal/modalReducer";
import selectReducer from "./selectState/selectReducer";
import groupListReducer from "./groupListModal/groupListReducer";
<<<<<<< HEAD
import deviceReducer from "./deviceData/deviceReducer";
=======
>>>>>>> f3af0b7cdf55a60d53a3c004915c4a5e038ade8e
const rootReducer = combineReducers({
  data: dummyReducer,
  modal: modalReducer,
  select: selectReducer,
  groupListModal: groupListReducer,
<<<<<<< HEAD
  device: deviceReducer,
=======
>>>>>>> f3af0b7cdf55a60d53a3c004915c4a5e038ade8e
});

export default rootReducer;
