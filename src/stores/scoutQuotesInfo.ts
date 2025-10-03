import picturePng from '../assets/images/circle-png-circle-png-hd-1600-3284616235.png';

const scoutQuotesInfo = [
  {
    age: 13,
    name: 'Jane Doe',
    picture: picturePng,
    rank: 'Tenderfoot',
    text: 'I am gaining valuable skills and friendships that will last a lifetime.',
  },
  {
    age: 15,
    name: 'Mary Smith',
    picture: picturePng,
    rank: 'Second Class',
    text: 'Scouting has helped me become a better leader and team player.',
  },
  {
    age: 14,
    name: 'Emily Johnson',
    picture: picturePng,
    rank: 'First Class',
    text: 'The outdoor adventures have been the highlight of my scouting experience.',
  },
  {
    age: 16,
    name: 'Sarah Brown',
    picture: picturePng,
    rank: 'Star',
    text: 'I love the sense of community and service that scouting promotes.',
  },
];

function getScoutQuotesInfo() {
  return scoutQuotesInfo;
}

function getScoutMasterQuoteInfo() {
  return {
    name: 'Dawn Feakes-Lange',
    quote:
      'As the scoutmaster, I am proud to see the growth and development of our scouts.',
    yearsInLeadership: 9,
  };
}

export {getScoutQuotesInfo, getScoutMasterQuoteInfo};
