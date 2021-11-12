
/**
 * Returns current date
 * @returns {string} - Returns date in format: DD-MM-YYYY HH:mm
 */
export const currentDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let minutes = today.getMinutes();
  let hours = today.getHours();

  // Add leading zeroes on month, days, hours and minutes
  // or use 'datetime format' npm library :)
  let zeroDay = Math.floor(day/10) ? day : `0${day}`;
  let zeroMonth = Math.floor(month/10) ? month : `0${month}`;
  let zeroMinutes = Math.floor(minutes/10) ? minutes : `0${minutes}`;
  let zeroHours = Math.floor(hours/10) ? hours : `0${hours}`;

  let date = `${zeroDay}-${zeroMonth}-${today.getFullYear()}`;
  let time = `${zeroHours}:${zeroMinutes}`;

  return `${date} ${time}`; 
}


/**
 * Get name of day
 * @param {number} dt - Timestamp
 * @returns {string} - Appropriate name of the day of the week
 */
export const dayOfWeek = dt => {
  const timestamp = dt;
  const a = new Date(timestamp*1000);
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayOfWeek = days[a.getDay()];
  
  return dayOfWeek;
}


/**
 * Convert Celsius to Fahrenheit unit
 * @param {number} tempC - The temperature in Celsius
 * @returns {number} - The temperature in Fahrenheit
 */
export const toFahrenheit = tempC => {
 return Math.round((tempC * 9/5) + 32);
}