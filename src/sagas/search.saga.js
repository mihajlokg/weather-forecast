import { API, APPID } from "../config/";
import { put, takeEvery } from "redux-saga/effects";
import { NotificationManager} from 'react-notifications';

import { 
  currentWeatherData,
  sevenDaysWeatherData,
  saveInHistory,
  displaySpinner,
  hideSpinner,
} from "./../actions"
import { currentDate } from "./../helpers/"


let handleErrors = response => {
  if (!response.ok) {
    switch (response.status) {
      case 401:
        // Unauthorized
        NotificationManager.error('Ivalid API key', 'Alert', 3000);
        break;
      case 404:
        // 404
        NotificationManager.error('City not found', 'Alert', 3000);
        break;
      default:
    }
  } else {
    return response;
  }
};

let handleCatch = errors => {
    console.log(errors);
};

function* searchAPI(action){

  // Display spinner
  yield put(displaySpinner());

    // Prepare API url/data
    const { term, save } = action;
    const currentWeatherURL = `${API}weather?q=${term}&appid=${APPID}&units=metric`;
    
    const data = {
        method: 'GET',
        headers: {
            "Accept" : "application/json",
        },
    }
    
    // Call API (One Day)
    const currentData = yield fetch( currentWeatherURL, data)
        .then(handleErrors)
        .then(response => {
            if(response!==undefined){
                return response.json();
            }
        } )
        .catch(handleCatch);
    
        if(currentData!==undefined){

          // Call API (7 days)
          const { lon, lat } = currentData.coord;
          const sevenDaysWeatherURL = `${API}onecall?lon=${lon}&lat=${lat}&appid=${APPID}&units=metric&exclude=minutely,hourly,current&units=metric`;
          const sevenDaysData = yield fetch( sevenDaysWeatherURL, data)
          .then(handleErrors)
          .then(response => {
              if(response!==undefined){
                return response.json();
              }
          } )
          .catch(handleCatch);

            // Hide spinner
            yield put(hideSpinner());

            // Update current data
            yield put(currentWeatherData(currentData));

            // Update seven days data
            yield put(sevenDaysWeatherData(sevenDaysData));

            // Remember in history
            if(save){
              yield put(saveInHistory(currentData.name, currentDate()));
            }

            // Redirect on results
            Boolean(action.history) && (
                action.history.push({
                  pathname: '/results'
                })
              );
        }
}

export default function* searchWatcher() {
  yield takeEvery("SEARCH", searchAPI);
}
