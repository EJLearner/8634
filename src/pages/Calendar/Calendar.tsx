import './calendar.css';
import {getCalendarItems} from '../../stores/calendarItems';
import {
  getDayOfWeekFromDate,
  getDisplayDateFromStandardDate,
  isDaylightSavingTime,
} from '../../utils/dateTimeUtils';
import {LinkBar} from '../../components/LinkBar';

function getFormattedDate(date: string) {
  return (
    <>
      {getDayOfWeekFromDate(date)}
      {', '}
      {getDisplayDateFromStandardDate(date)}
    </>
  );
}

interface ItemType {
  date: string;
  endDate?: string;
  title: string;
  location?: string;
  startTimeDisplay?: string;
  endTimeDisplay?: string;
  description?: string;
  link?: string;
  scoutDressCode?: string;
}

export function Calendar() {
  console.log(getCalendarItems());

  return (
    <div className="calendar-page">
      <LinkBar />
      <h1>Calendar</h1>

      {getCalendarItems().map(
        (item: ItemType, index: number, array: object[]) => {
          const {
            endDate,
            link,
            scoutDressCode,
            date,
            startTimeDisplay,
            endTimeDisplay,
            location,
            title,
            description,
          } = item;

          const dateIsDst = isDaylightSavingTime(new Date(date));
          // TODO: After publish. This should be improved so that times translate to user's local timezone
          // and show the correct timezone abbreviation (e.g., EDT or EST).
          // For now, we'll just hardcode based on current date.
          const timezonePart = dateIsDst ? 'EDT' : 'EST';
          const isLastItem = index === array.length - 1;

          return (
            <div key={date + title}>
              <h2>{title}</h2>
              <p>
                {location && (
                  <>
                    <strong>{location}</strong>
                    <br />
                  </>
                )}

                {link && (
                  <>
                    <a href={link} rel="noreferrer" target="_blank">
                      Event Link
                    </a>
                    <br />
                  </>
                )}
                {getFormattedDate(date)}
                {endDate && <> &ndash; {getFormattedDate(endDate)}</>}
                <br />
                {startTimeDisplay && (
                  <>
                    {startTimeDisplay}&ndash;{endTimeDisplay} {timezonePart}
                  </>
                )}
              </p>
              {description && <p>{description}</p>}
              {scoutDressCode && <p>Scout Dress Code: {scoutDressCode}</p>}
              {!isLastItem && <hr />}
            </div>
          );
        },
      )}
    </div>
  );
}
