import picturePng from '../../assets/images/circle-png-circle-png-hd-1600-3284616235.png';

import {Quote} from './Quote';

function QuotesSection() {
  return (
    <>
      <section className="quotes">
        {/* TODO: Quotes section */}

        <div>
          <Quote
            age={13}
            picture={picturePng}
            name="Jane Doe"
            rank="Tenderfoot"
            text="This is fun!"
          />
          <Quote
            age={13}
            name="Jane Doe"
            picture={picturePng}
            rank="Tenderfoot"
            text="This is fun!"
          />
        </div>
        <div>I am the scoutmaster</div>
        <div>
          <Quote
            age={13}
            picture={picturePng}
            name="Jane Doe"
            rank="Tenderfoot"
            text="This is fun!"
          />
          <Quote
            age={13}
            picture={picturePng}
            name="Jane Doe"
            rank="Tenderfoot"
            text="This is fun!"
          />
        </div>
      </section>
    </>
  );
}

export {QuotesSection};
