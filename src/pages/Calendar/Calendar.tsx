import {getCalendarItems} from '../../stores/calendarItems';
import {
  getDisplayDateFromStandardDate,
  isDaylightSavingTime,
} from '../../utils/dateTimeUtils';

export function Calendar() {
  console.log(getCalendarItems());

  return (
    <div>
      <h1>Calendar</h1>

      {getCalendarItems().map((item) => {
        const dateIsDst = isDaylightSavingTime(new Date(item.date));
        // TODO: After publish. This should be improved so that times translate to user's local timezone
        // and show the correct timezone abbreviation (e.g., EDT or EST).
        // For now, we'll just hardcode based on current date.
        const timezonePart = dateIsDst ? 'EDT' : 'EST';

        return (
          <div key={item.date + item.title}>
            <span>
              {item.title} - {getDisplayDateFromStandardDate(item.date)}{' '}
              {timezonePart}
            </span>{' '}
            <p>
              Location: {item.location}, {item.address}
              <br />
              Time: {item.startTimeDisplay} - {item.endTimeDisplay}
            </p>
          </div>
        );
      })}
    </div>
  );
}
