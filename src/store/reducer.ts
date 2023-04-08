import { ActionTypes } from "./actionType";

// within src/store/reducer.js
const initialState = {
    idToken: "",
    user: null
};
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER_DETAILS:
            return {
                ...state,
                idToken: action.payload.idToken,
                user: action.payload.user,
            };
        default:
            return state;
    }
};
export default reducer;