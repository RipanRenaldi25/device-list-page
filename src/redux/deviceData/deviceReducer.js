const initialInit = {
  isLoading: false,
  deviceData: [],
  error: "",
};

function deviceReducer(state = initialInit, action) {
  switch (action.type) {
    case "FETCH_DEVICE":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_DEVICE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        deviceData: action.payload,
      };
    case "FETCH_DEVICE_FAILED":
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}
export default deviceReducer;
