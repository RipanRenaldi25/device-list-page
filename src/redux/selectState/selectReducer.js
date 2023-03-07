const initialState = false;
const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SELECT":
      return true;
    case "CLOSE_SELECT":
      return false;
    default:
      return state;
  }
};
export default selectReducer;
