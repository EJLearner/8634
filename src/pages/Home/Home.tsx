import {useRef} from 'react';
import topPicture from '../../assets/images/scout-group.jpg';
import {LinkBar} from '../../components/LinkBar';
import {ContactUsSection} from './ContactUsSection';
import {QuotesSection} from './QuotesSection';
import {FeaturedEventsSection} from './FeaturedEventsSection';

function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <LinkBar />
      <img alt="Scouts in Troop" className="top-photo" src={topPicture} />
      <section className="about-and-donation">
        <h1 id="support-header">
          Invest in future changemakers.
          <br />
          Learn more today to inspire tomorrow.
        </h1>
        <div className="support-benefits">
          <div>
            <h2 className="support-matters-header">Your Support Matters</h2>
            <p>
              When you support girls in Scouting, you’re investing in courage,
              confidence, and character. From building outdoor skills to leading
              service projects, girls in Scouting are learning to tackle
              challenges, make a difference in their communities, and grow into
              strong, capable leaders. Your support helps provide them with the
              tools, mentorship, and opportunities they need to thrive.
            </p>
          </div>
          <div className="benefits">
            Benefits of scouting
            <ul>
              <li>Leadership Development</li>
              <li>Teamwork and Collaboration</li>
              <li>Outdoor Skills and Appreciation</li>
              <li>Community Service</li>
              <li>Personal Growth</li>
              <li>Ethical Values</li>
              <li>Physical Fitness</li>
              <li>Lifelong Frendships</li>
            </ul>
          </div>
        </div>
        {/* Removed for now because we need confirmation that the troop can have a donate button */
        /*
        <div className="donate-box">
          <a href="https://www.paypal.com/donate/?hosted_button_id=ZQCX9N42G6AMU">
            Donate Now
          </a>
        </div>
          */}
        <p className="questions-text">
          If you have questions about giving or would like to learn more about
          our programs, please{' '}
          <button
            className="plain-text-button"
            onClick={() => dialogRef.current?.showModal()}
          >
            contact us
          </button>
          .
        </p>
      </section>
      <FeaturedEventsSection />
      <QuotesSection />
      <ContactUsSection ref={dialogRef} />
    </>
  );
}

export {Home};
