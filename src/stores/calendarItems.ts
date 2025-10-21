import {Temporal} from 'temporal-polyfill';
import {timeZones} from '../utils/constants';
import {hasDatePassed} from '../utils/dateTimeUtils';
const {ET} = timeZones;

const TRINITY = {
  location: 'Trinity Lutheran Church',
  address: '117 Main Street Reisterstown, MD 21136',
};

const COMMON = {
  REGULAR_MEETING: {
    title: 'Scout Meeting',
    ...TRINITY,
    startTimeDisplay: '7:00 PM',
    endTimeDisplay: '8:30 PM',
    timeZone: ET,
  },
};

const CLASS_A = 'Class A/Field Uniform';
const CLASS_B = 'Class B Uniform/Purple Activity Shirt';

const allEvents = [
  {
    date: '2025-10-16',
    ...COMMON.REGULAR_MEETING,
    description: 'Canoeing with Mr Pete and Assategue Menu Planning',
  },
  {
    date: '2025-10-18',
    title: 'Jamboree on the Air (JOTA)',
    location: 'Soldiers Delight Natural Environment Area',
    startTimeDisplay: '10:00 AM',
    endTimeDisplay: '3:30 PM',
    timeZone: ET,
    link: 'https://scoutingevent.com/220-97440?draftmode=1&fbclid=IwY2xjawM_q6BleHRuA2FlbQIxMABicmlkETFnZnZ6NkhhQnh2SVNTQmw1AR5CPHRyD2rXxdqOWDv_CPLUuWNvNvKzwo8dObOjEU9wp7TTVYNkXRgoyo5FDg_aem_hiaM6t3Fj0ZCrsEWJu8dlA',
    scoutDressCode: CLASS_A,
    description:
      'Jamboree on the Air – Jamboree on the Internet (JOTA-JOTI) is a scouting event for all young people in worldwide Scouting. Learn about radio in the modern world! Use the phonetic alphabet and radio maps! Discover why space weather has been bonkers! Talk to people around MD and the World Learn Morse Code!',
  },
  {
    date: '2025-10-23',
    ...COMMON.REGULAR_MEETING,
    description:
      'SPL Elections and Kawasakie Exchange Program presentation by Caden',
  },
  {
    date: '2025-10-24',
    endDate: '2025-10-26',
    title: 'Assateague Camping Trip',
    description: 'Camp on the beach at Assateague State Park.',
    startTimeDisplay: '6:00 PM',
    timeZone: ET,
    location: 'Assateague State Park',
  },
  {
    date: '2025-10-30',
    ...COMMON.REGULAR_MEETING,
    title: 'Troop Halloween Party',
  },
  {
    date: '2025-11-01',
    title: 'Main Street Clean Up (Service Event)',
    scoutDressCode: CLASS_B,
    location: 'Reter’s Crab House',
    description: 'Help clean up Reisterstown',
    startTimeDisplay: '9:00 AM',
  },
  {
    date: '2025-11-06',
    title: 'Court of Honor',
    ...TRINITY,
  },
  {
    date: '2025-11-08',
    endDate: '2025-11-09',
    title: 'Ship Trip - Intrepid Aircraft Carrier',
    startTimeDisplay: '7:00 AM',
    timeZone: ET,
    location: 'Intrepid Sea, Air & Space Museum, New York, NY',
  },
  {
    date: '2025-11-08',
    title: 'Carroll District Merit Badge Day',
    startTimeDisplay: '8:00 AM',
    endTimeDisplay: '4:00 PM',
    location: 'St. John’s Catholic Church',
    timeZone: ET,
    scoutDressCode: CLASS_A,
    link: 'https://scoutingevent.com/220-101315',
  },
  {
    date: '2025-11-09',
    title: 'Pumpkin Drop',
    startTimeDisplay: '9:00 AM',
    endTimeDisplay: '12:00 PM',
    timeZone: ET,
    scoutDressCode: CLASS_A,
    location: 'Sykesville Fire Department',
    description:
      'Get your Engineering hat on and design a contraption to protect a pumpkin from being dropped 50, 75, and even 100 ft!',
  },
  {
    date: '2025-11-13',
    ...COMMON.REGULAR_MEETING,
    title: 'PLC',
    startTimeDisplay: '6:15 PM',
  },
  {
    date: '2025-11-13',
    ...COMMON.REGULAR_MEETING,
  },
  {
    date: '2025-11-14',
    title: 'Gettysburg Luminaries',
    startTimeDisplay: '6:00 PM',
    timeZone: ET,
    location: 'Gettysburg, PA',
    description:
      'Participate in Gettysburg Luminaries and visit battlefield/hike Johnny Reb trail',
    scoutDressCode: CLASS_A,
  },
  {
    date: '2026-07-30',
    endDate: '2026-08-07',
    title: 'Maine High Adventure',
    location: 'Maine',
    description:
      'An unforgettable experience in the woods and waters of Maine followed by whale watching in Portland!',
  },
];

function getCalendarItems({
  removePastItems = true,
}: {removePastItems?: boolean} = {}) {
  return allEvents
    .filter((item) => {
      return !removePastItems || !hasDatePassed(item.date);
    })
    .toSorted(
      (a: (typeof allEvents)[number], b: (typeof allEvents)[number]) => {
        const plainDateA = Temporal.PlainDate.from(a.date);
        const plainDateB = Temporal.PlainDate.from(b.date);

        return Temporal.PlainDate.compare(plainDateA, plainDateB);
      },
    );
}

export {getCalendarItems};
