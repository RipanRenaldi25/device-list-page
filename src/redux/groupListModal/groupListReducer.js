const initialState = {
<<<<<<< HEAD
  isOpen: false,
};
export default function groupListReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}
=======
    isOpen: false
}
export default function groupListReducer (state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL': return {
            isOpen: true
        }
        case 'CLOSE_MODAL': return {
            isOpen: false
        }
        default : return state;
    }
}
>>>>>>> f3af0b7cdf55a60d53a3c004915c4a5e038ade8e
