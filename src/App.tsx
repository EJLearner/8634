import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {useRef, useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import topPicture from './assets/images/temp-top-picture.jpg';

function getDonationWithFeesAmount(dollars: number): number {
  // return the amount with 10% fees rounded to the nearest dollar
  return Math.round(dollars * 1.1);
}

function Home() {
  const [donationDollars, setDonationDollars] = useState(50);
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
                      donationDollars === amount ? 'current' : 'not-current'
                    }
                    onClick={() => setDonationDollars(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div>
                {/* TODO: Next task add USD shaded text on the right, make font size larger */}
                <input
                  type="text"
                  onChange={(e) => setDonationDollars(Number(e.target.value))}
                  placeholder="Other Amount"
                  value={donationDollars}
                />
              </div>
              <div>
                Cover processing fees for my {donationDollars} by increasing it
                to {getDonationWithFeesAmount(donationDollars)}
              </div>
              <button>Enter payment info</button>
            </div>
          </div>
          <p>
            If you have questions about giving or would like to learn more about
            our programs, please contact us.
          </p>
        </div>
      </section>
      {/* Quotes section */}
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
