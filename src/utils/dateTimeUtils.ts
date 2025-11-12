import {Temporal} from 'temporal-polyfill';
import {timeZones} from '../utils/constants';
const {UTC} = timeZones;

function convertMilitaryTimeToUserFriendly(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  return `${String(adjustedHours)}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function getCalendarItems(): string[] {
  const startOfDay = Temporal.PlainTime.from('00:00');
  const endOfDay = Temporal.PlainTime.from('23:30');
  const interval = Temporal.Duration.from({minutes: 30});

  const times: string[] = [];
  let currentTime = startOfDay;

  while (currentTime <= endOfDay) {
    times.push(convertMilitaryTimeToUserFriendly(currentTime.toString()));
    currentTime = currentTime.add(interval);
  }

  return ['All Day', ...times, '12:00 AM'];
}

// Determines if the provided date (in 'YYYY-MM-DD' format) is in Daylight Saving Time (DST)
function isDaylightSavingTime(date: string | Date): boolean {
  const dateObj = new Date(date);
  const january = new Date(dateObj.getFullYear(), 0, 1).getTimezoneOffset();
  const july = new Date(dateObj.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(january, july) !== dateObj.getTimezoneOffset();
}

function getDisplayDateFromStandardDate(dateString: string): string {
  const date = new Date(
    typeof dateString === 'string' ? `${dateString}T00:00:00` : dateString,
  );

  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getDayOfWeekFromDate(
  date: string | Date,
  format: 'long' | 'short' = 'long',
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(undefined, {
    weekday: format,
    // since the date is done simply without regard to time zone, the zone ends up as UTC. We need to force it to be UTC here too
    // otherwise it may show the wrong day depending on the user's local timezone
    timeZone: UTC,
  });
}

function getTimeSince(date: string, unit: 'years' | 'months' | 'days'): number {
  const start = Temporal.PlainDate.from(date);
  const today = Temporal.Now.plainDateISO();

  const difference = start.until(today, {largestUnit: unit});
  return difference[unit];
}

function hasDatePassed(date: string): boolean {
  const todayTemporal = Temporal.Now.zonedDateTimeISO();
  const dateTemporal = Temporal.PlainDate.from(date);

  return Temporal.PlainDate.compare(dateTemporal, todayTemporal) < 0;
}

export {
  convertMilitaryTimeToUserFriendly,
  getCalendarItems,
  isDaylightSavingTime,
  hasDatePassed,
  getTimeSince,
  getDisplayDateFromStandardDate,
  getDayOfWeekFromDate,
};
