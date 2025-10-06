import {timeZones} from '../utils/constants';
const {ET} = timeZones;

const TRINITY = {
  location: 'Trinity Lutheran Church',
  address: '117 Main Street Reisterstown, MD 21136',
};

const COMMON = {
  REGULAR_MEETING: {
    title: 'Scout Meeting',
    description:
      'Scouts will do activities, learn skills and plan for future outings.',
    ...TRINITY,
    startTimeDisplay: '7:00 PM',
    endTimeDisplay: '8:30 PM',
    timeZone: ET,
  },
};

function getCalendarItems() {
  return [
    {
      date: '2025-10-09',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-10-16',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-10-23',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-10-30',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-11-06',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-11-13',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-11-20',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-12-04',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-12-11',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2025-12-18',
      ...COMMON.REGULAR_MEETING,
    },
    {
      date: '2026-01-08',
      ...COMMON.REGULAR_MEETING,
    },
  ];
}

export {getCalendarItems};
