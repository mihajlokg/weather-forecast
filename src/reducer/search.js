const initialState = {
    data: {},
    history: [],
    hpChecked: true,
    rpChecked: true,
    loading: false,
}

const search = (state = initialState, action) => {
    switch (action.type) {

        case "SAVE_CURRENT_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    current: action.data,
                }
            }

        case "SAVE_7DAYS_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    sevenDays: action.data,
                }
            }

        case "SAVE_IN_HISTORY":
        
            const prevHistory = state.history;
            const searched = {
                name: action.name,
                time: action.time,
            }
            // If history array length is greater
            // than 9, shift array to the right
            if( prevHistory.length === 9 ){
                // Remove latest element
                prevHistory.pop();
            }

            return {
                ...state,
                history: [
                    searched,
                    ...state.history
                ],
            }

        case "TOGGLE":
            return {
                ...state,
                [action.stateNode]: action.checked
            }

        case "DISPLAY_SPINNER":
            return {
                ...state,
                loading: true
            }

        case "HIDE_SPINNER":
            return {
                ...state,
                loading: false
            }

      default:
        return state
    }
}
export default search
