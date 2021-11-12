export const searchAPI = (term, history) => ({
  type: 'SEARCH',
  term,
  save:true,
  history,
})

export const historyAPI = (term, history) => ({
  type: 'SEARCH',
  term,
  save:false,
  history,
})

export const currentWeatherData = data => ({
  type: "SAVE_CURRENT_DATA",
  data
});

export const sevenDaysWeatherData = data => ({
  type: "SAVE_7DAYS_DATA",
  data
});

export const saveInHistory = (name, time) => ({
  type: "SAVE_IN_HISTORY",
  name,
  time
});

export const toggle = (checked, stateNode) => ({
  type: "TOGGLE",
  checked,
  stateNode,
});

export const redirectToResults = history => ({
  type: "REDIRECT_TO_RESULTS",
  history
});

export const displaySpinner = () => ({
  type: "DISPLAY_SPINNER",
});

export const hideSpinner = () => ({
  type: "HIDE_SPINNER",
});