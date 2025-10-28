import breakfastSantaPicture from '../../assets/images/santa.jpg';
import papaJohnsLogo from '../../assets/images/papa-johns-logo.jpg';
import raftingPicture from '../../assets/images/maine-rafting-picture.jpg';

import './FeaturedEvents.css';
import type {ReactNode} from 'react';

function Event({
  href,
  image,
  imageAlt,
  title,
  description,
  buttonText,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string | ReactNode;
  description: string | ReactNode;
  buttonText: string;
}) {
  return (
    <div>
      <img alt={imageAlt} src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={href} rel="noreferrer" target="_blank">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function FeaturedEventsSection() {
  return (
    <section className="featured-events">
      <h2>Featured Events</h2>
      <div className="events-list">
        <Event
          buttonText="Buy Tickets"
          description={
            <>
              Start your holiday season with joy at our annual{' '}
              <i>Breakfast with Santa</i>! Enjoy a delicious breakfast buffet,
              festive holiday music, and cheerful decorations. Children can
              share their wish lists, take photos with Santa, and enjoy fun
              crafts and activities. It’s the perfect way to kick off the
              holiday season with family and friends!
            </>
          }
          href="https://www.zeffy.com/en-US/ticketing/troop-8634-breakfast-with-santa"
          image={breakfastSantaPicture}
          imageAlt="Santa Cookie"
          title="Breakfast with Santa"
        />
        <Event
          buttonText="Buy BOGO Card"
          description={
            <>
              Support our Papa John’s BOGO (buy one, get one) fundraiser cards.
              These are discount cards sold for $15. They provide a “buy one
              pizza, get one free” deal, with the free pizza being of equal or
              lesser value, and can be used any day from January 2026 to
              December 2026 at participating locations in MD, DC, and VA.
            </>
          }
          href="https://www.zeffy.com/en-US/ticketing/papa-johns-bogo-fundraiser-cards-2"
          image={papaJohnsLogo}
          imageAlt="Buy BOGO Card"
          title="Papa John’s BOGO Fundraising Cards"
        />
        <Event
          buttonText="Learn More"
          description={
            <>
              Maine High Adventure (MHA) is a Scouting America high adventure
              program located in North Maine that offers wilderness treks, most
              notably canoe trips on the Allagash Wilderness Waterway and 100km
              treks through the North Woods. The program provides trained guides
              and gear for these expeditions, focusing on authentic, remote
              backcountry experiences with a strong emphasis on outdoor skills
              and environmental interpretation.
            </>
          }
          href="https://www.mainehighadventure.org/"
          image={raftingPicture}
          imageAlt="Rafting"
          title="Troop 8634 Maine High Adventure Trip"
        />
      </div>
    </section>
  );
}
export {FeaturedEventsSection};
