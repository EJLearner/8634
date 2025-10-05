import {useRef} from 'react';
import topPicture from '../../assets/images/scout-group.png';
import {LinkBar} from '../../components/LinkBar';
import {ContactUsSection} from './ContactUsSection';
import {QuotesSection} from './QuotesSection';

function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <LinkBar />
      <img alt="Scouts in Troop" className="top-photo" src={topPicture} />
      <section className="about-and-donation">
        <h1 id="donate-header">
          Invest in future changemakers. Give today to inspire tomorrow.
        </h1>
        <div className="support-benefits-donate">
          <div>
            <h2 className="support-matters-header">Your Support Matters</h2>
            <p>
              When you donate to troop 8634, you are helping girls and young
              women in scouting build courage, confidence, and character. With
              your support, girls in our community gain access to life-changing
              experiences in leadership, outdoor adventure, and community
              service.
            </p>
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
          <div>
            <div className="donate-box">
              <h2>Empower Future Leaders&#8202;&mdash;&#8202;Donate Today</h2>
              <a href="https://www.paypal.com/donate/?hosted_button_id=ZQCX9N42G6AMU">
                Donate
              </a>
            </div>
          </div>
        </div>
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
      <QuotesSection />
      <ContactUsSection ref={dialogRef} />
    </>
  );
}

export {Home};
