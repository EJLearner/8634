import './calendar.css';
import {getCalendarItems} from '../../stores/calendarItems';
import {
  getDayOfWeekFromDate,
  getDisplayDateFromStandardDate,
  isDaylightSavingTime,
} from '../../utils/dateTimeUtils';
import {LinkBar} from '../../components/LinkBar';

export function Calendar() {
  console.log(getCalendarItems());

  return (
    <div className="calendar-page">
      <LinkBar />
      <h1>Calendar</h1>

      {getCalendarItems().map((item) => {
        const dateIsDst = isDaylightSavingTime(new Date(item.date));
        // TODO: After publish. This should be improved so that times translate to user's local timezone
        // and show the correct timezone abbreviation (e.g., EDT or EST).
        // For now, we'll just hardcode based on current date.
        const timezonePart = dateIsDst ? 'EDT' : 'EST';

        return (
          <div key={item.date + item.title}>
            <h2>{item.title}</h2>
            <p>
              {getDayOfWeekFromDate(item.date)}
              {', '}
              {getDisplayDateFromStandardDate(item.date)}
              <br />
              {item.startTimeDisplay}&ndash;{item.endTimeDisplay} {timezonePart}
            </p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
