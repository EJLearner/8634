import zuriJpg from '../assets/images/zuri.jpg';
import {getTimeSince} from '../utils/dateTimeUtils';

function getScoutQuotesInfo() {
  return [
    {
      age: 13,
      name: 'Zuri Jones',
      picture: zuriJpg,
      rank: 'Star',
      text: 'I became a scout in order to make strong bonds with others my age and to have easier opportunities to serve the community.',
    },
  ];
}

function getScoutMasterQuoteInfo() {
  return {
    name: 'Dawn Feakes-Lange',
    quote:
      'What keeps me coming back is getting to watch these young people try something completely unknown, embrace it, and grow into incredible human beings. ' +
      'Seeing the confidence and skills they gain is the best feeling and I’m so proud of the welcoming and inclusive culture they have worked so hard to create.',
    yearsInLeadership: getTimeSince('2019-02-01', 'years'),
  };
}

export {getScoutQuotesInfo, getScoutMasterQuoteInfo};
