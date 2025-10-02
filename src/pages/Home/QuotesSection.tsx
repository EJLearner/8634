import {Quote} from './Quote';

function QuotesSection() {
  return (
    <>
      {/* TODO: Quotes section */}
      <section className="quotes">
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
      </section>
    </>
  );
}

export {QuotesSection};
