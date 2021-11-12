const initialState = {
    showChart: true
}

const results = (state = initialState, action) => {
    switch (action.type) {

        case "TOGGLE_CHART_TABLE":
            return {
                showChart: action.checked
            }

      default:
        return state
    }
}
export default results
