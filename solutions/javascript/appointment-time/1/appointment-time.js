// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number|Date} [now] (ms since the epoch, Date object, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
  // Create a copy so we don't mutate the original 'now'
  const result = new Date(now);
  
  // Set the date on the copy
  result.setDate(result.getDate() + days);
  
  return result;
}
/**  
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();;
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
 const ok = new Date(timestamp);
 const result = {year:ok.getFullYear(), // Get the year (4 digits)
month:ok.getMonth(),// Get the month, from 0 to 11.
date : ok.getDate(), // Get the day of month, from 1 to 31.
hour: ok.getHours(), // Get the hour in a 24 clock, from 0 to 23
minute : ok.getMinutes()
};

  return result;
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  // Apply updates using Date setter methods
  // These methods automatically handle overflow (e.g., Dec 32nd -> Jan 1st)
  if (options.year !== undefined) date.setFullYear(options.year);
  if (options.month !== undefined) date.setMonth(options.month);
  if (options.date !== undefined) date.setDate(options.date);
  if (options.hour !== undefined) date.setHours(options.hour);
  if (options.minute !== undefined) date.setMinutes(options.minute);

  // Return the details from the NEWly calculated date
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}
/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  let a = new Date(timestampA);
  let b = new Date(timestampB);
  return Math.round((b-a) /1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  let a = new Date(appointmentTimestamp);
  let b = new Date(currentTimestamp);
  return b < a;
}
