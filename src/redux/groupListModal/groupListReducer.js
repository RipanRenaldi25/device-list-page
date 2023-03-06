const initialState = {
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