import picturePng from '../assets/images/circle-png-circle-png-hd-1600-3284616235.png';
import zuriJpg from '../assets/images/zuri.jpg';

const scoutQuotesInfo = [
  {
    age: 13,
    name: 'Zuri Jones',
    picture: zuriJpg,
    rank: 'Star',
    text: 'I became a scout in order to make strong bonds with others my age and to have easier opportunities to serve the community.',
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
      'What keeps me coming back is getting to watch these young people try something completely unknown, embrace it, and grow into incredible human beings. ' +
      'Seeing the confidence and skills they gain is the best feeling and I’m so proud of the welcoming and inclusive culture they have worked so hard to create.',
    // TODO: make number dynamic based on current year - starting in 2019, February 1
    yearsInLeadership: 6,
  };
}

export {getScoutQuotesInfo, getScoutMasterQuoteInfo};
