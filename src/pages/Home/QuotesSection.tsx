import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {
  getScoutMasterQuoteInfo,
  getScoutQuotesInfo,
} from '../../stores/scoutQuotesInfo';
import {Quote} from './Quote';

function QuotesSection() {
  const scoutQuotesInfo = getScoutQuotesInfo();
  const {name, quote, yearsInLeadership} = getScoutMasterQuoteInfo();

  // Temporarily hide scout quotes until we have more
  const showScoutQuotes = scoutQuotesInfo.length >= 4;

  return (
    <section className={showScoutQuotes ? 'quotes' : 'quotes only-scoutmaster'}>
      {showScoutQuotes && (
        <div className="scout-quotes-1">
          <Quote {...scoutQuotesInfo[0]} />
          <Quote {...scoutQuotesInfo[1]} />
        </div>
      )}
      <div className="scoutmaster-quote">
        <div className="scoutmaster-quote-content">
          <FaQuoteLeft className="left-quote-icon" />
          <FaQuoteRight className="right-quote-icon" />
          <p className="quote-text">{quote}</p>
          <p className="name-years">
            {name}
            <br /> Scoutmaster, {yearsInLeadership} years
          </p>
        </div>
      </div>
      {showScoutQuotes && (
        <div className="scout-quotes-2">
          <Quote {...scoutQuotesInfo[2]} />
          <Quote {...scoutQuotesInfo[3]} />
        </div>
      )}
    </section>
  );
}

export {QuotesSection};
