import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {useRef, useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import topPicture from './assets/images/temp-top-picture.jpg';
import {FaCheckCircle, FaLock} from 'react-icons/fa';

function getDonationWithFeesAmount(dollars: number): number {
  // TODO: confirm fee percentage with payment processor
  return Math.round(dollars * 1.1);
}

function formatDonation(inputAmount: string) {
  const numbersAndPeriodsOnly = inputAmount.replace(/[^0-9.]/g, '');

  const [beforePeriod, afterPeriod] = numbersAndPeriodsOnly.split('.');

  const hasDot = numbersAndPeriodsOnly.includes('.');
  const everyNumberAfterDotIsZero = afterPeriod
    ?.split('')
    .every((char) => char === '0');

  let donationNumber;

  if (!hasDot) {
    donationNumber = beforePeriod;
  } else if (everyNumberAfterDotIsZero) {
    donationNumber = beforePeriod;
  } else {
    donationNumber = Number(numbersAndPeriodsOnly).toFixed(2);
  }

  return donationNumber;
}

function unformatDonation(inputAmount: string) {
  return Number(inputAmount.replace(/\$/, ''));
}

function Home() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [inputTextAmount, setInputTextAmount] = useState('50');
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <LinkBar />
      <img src={topPicture} alt="Scouts in Troop" />
      <section className="about-and-donation">
        <h1>Invest in future changemakers. Give today to inspire tomorrow.</h1>
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
              <div className="donation-amount-buttons">
                {[50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    className={
                      amount === donationAmount ? 'current' : 'not-current'
                    }
                    onClick={() => {
                      setDonationAmount(amount);
                      setInputTextAmount(String(amount));
                    }}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div>
                <div className="text-wrapper">
                  <span className="dollar-symbol">$</span>
                  <span className="currency-type">USD</span>
                  <input
                    className="dollar-text-input"
                    type="text"
                    onChange={(e) => setInputTextAmount(e.target.value)}
                    onBlur={(e) => {
                      const formattedAmount = formatDonation(e.target.value);
                      const unformattedAmount =
                        unformatDonation(formattedAmount);
                      setInputTextAmount(formattedAmount);
                      setDonationAmount(unformattedAmount);
                    }}
                    placeholder="Other Amount"
                    value={inputTextAmount}
                  />
                </div>
              </div>
              <div className="increase-blurb-wrapper">
                <FaCheckCircle className="increase-icon" />
                <p>
                  Increase my donation to{' '}
                  <strong>${getDonationWithFeesAmount(donationAmount)}</strong>{' '}
                  so that processing fees are covered.
                </p>
              </div>
              <button className="submit-button">
                <FaLock />
                <span>Enter payment info</span>
              </button>
            </div>
          </div>
        </div>
        <p className="questions-text">
          {/* TODO: Contact us should be link */}
          If you have questions about giving or would like to learn more about
          our programs, please contact us.
        </p>
      </section>
      {/* TODO: Quotes section */}
      <section />
      <section>
        <h2>
          Want to Know More?
          <br />
          Reach out to us!
        </h2>
        <button onClick={() => dialogRef.current?.showModal()}>
          Contact Us
        </button>
        <p className="history">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <dialog ref={dialogRef}>
          <h3>Contact Us</h3>
          {/* <form> */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Message" />
          <button onClick={() => dialogRef.current?.close()}>Submit</button>
          {/* </form> */}
        </dialog>
      </section>
    </>
  );
}

function Calendar() {
  return <div>Calendar</div>;
}

function LinkBar() {
  return (
    <nav>
      <Link to="/calendar">Calendar</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/learn-more">Learn More</Link>
    </nav>
  );
}

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
