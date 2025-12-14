// import breakfastSantaPicture from '../../assets/images/santa.jpg';
import coffeePicture from '../../assets/images/coffee.png';
// import papaJohnsLogo from '../../assets/images/papa-johns-logo.jpg';
import raftingPicture from '../../assets/images/maine-rafting-picture.jpg';

import './FeaturedEvents.css';
import type {ReactNode} from 'react';
import {hasDatePassed} from '../../utils/dateTimeUtils';

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

function getCoffeeEventLinkAndDescription() {
  const isLocalDropOffAvailable = !hasDatePassed('2025-12-06');

  if (isLocalDropOffAvailable) {
    return {
      description: (
        <p>
          If you’re in the Reisterstown, MD area, you can make a difference just
          by enjoying your daily coffee! When you order through our fundraiser
          website by December 6th, your coffee or tea will be hand-delivered
          right to you by one of our Scouts—no shipping needed! Every purchase
          directly supports our troop, so sip with purpose and help us reach our
          goals.
        </p>
      ),
      href: 'https://www.givingbean.com/orderform2/my_own_orderform.php?pstr=NzI2NDV8fDE=',
    };
  }

  return {
    description: (
      <p>
        You can make a difference just by enjoying your daily coffee! When you
        order through our fundraiser website, your coffee or tea will be shipped
        to you! Every purchase directly supports our troop, so sip with purpose
        and help us reach our goals.
      </p>
    ),
    href: 'https://www.givingbean.com/store/home.php?partner=72645',
  };
}

function FeaturedEventsSection() {
  const {description, href} = getCoffeeEventLinkAndDescription();

  return (
    <section className="featured-events">
      <h2>Featured Events</h2>
      <div className="events-list">
        {/* Keeping these events in case they are used again - may put it in a better place later */}
        {/* 
        <Event
          buttonText="Buy Tickets"
          description={
            <p>
              Start your holiday season with joy at our annual{' '}
              <i>Breakfast with Santa</i>! Enjoy a delicious breakfast buffet,
              festive holiday music, and cheerful decorations. Children can
              share their wish lists, take photos with Santa, and enjoy fun
              crafts and activities. It’s the perfect way to kick off the
              holiday season with family and friends!
            </p>
          }
          href="https://www.zeffy.com/en-US/ticketing/troop-8634-breakfast-with-santa"
          image={breakfastSantaPicture}
          imageAlt="Santa Cookie"
          title="Breakfast with Santa"
        />
        <Event
          buttonText="Buy BOGO Card"
          description={
            <p>
              Support our Papa John’s BOGO (buy one, get one) fundraiser cards.
              These are discount cards sold for $15. They provide a “buy one
              pizza, get one free” deal, with the free pizza being of equal or
              lesser value, and can be used any day from January 2026 to
              December 2026 at participating locations in MD, DC, and VA.
            </p>
          }
          href="https://www.zeffy.com/en-US/ticketing/papa-johns-bogo-fundraiser-cards-2"
          image={papaJohnsLogo}
          imageAlt="Papa John's Logo"
          title="Papa John’s BOGO Fundraising Cards"
        /> 
        */}

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
        <Event
          {...{description, href}}
          buttonText="Buy Coffee"
          image={coffeePicture}
          imageAlt="Giving Bean Coffee"
          title="Giving Bean Coffee For A Cause"
        />
      </div>
    </section>
  );
}
export {FeaturedEventsSection};
