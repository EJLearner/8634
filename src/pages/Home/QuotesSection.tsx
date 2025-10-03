import {
  getScoutMasterQuoteInfo,
  getScoutQuotesInfo,
} from '../../stores/scoutQuotesInfo';
import {Quote} from './Quote';

function QuotesSection() {
  const scoutQuotesInfo = getScoutQuotesInfo();
  const {name, quote, yearsInLeadership} = getScoutMasterQuoteInfo();

  return (
    <section className="quotes">
      {/* TODO: After publish - would be nice to improve grid so that I can render a map of quotes with less markup here */}

      <div>
        <Quote {...scoutQuotesInfo[0]} />
        <Quote {...scoutQuotesInfo[1]} />
      </div>
      <div>
        <div className="scout-master-quote-content">
          <p>{quote}</p>
          <p>
            {name}, {yearsInLeadership} years
          </p>
        </div>
      </div>
      <div>
        <Quote {...scoutQuotesInfo[2]} />
        <Quote {...scoutQuotesInfo[3]} />
      </div>
    </section>
  );
}

export {QuotesSection};
