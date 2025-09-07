import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import topPicture from './assets/images/temp-top-picture.jpg';

function getDonationWithFeesAmount(dollars: number): number {
  // return the amount with 10% fees rounded to the nearest dollar
  return Math.round(dollars * 1.1);
}

function Home() {
  const [donationDollars, setDonationDollars] = useState(50);

  return (
    <>
      <img src={topPicture} alt="Scouts in Troop" />
      <section className="about-and-donation">
        <h1>Invest in future changemakers. Give today to inspire tomorrow.</h1>
        {/* grid with 2 columns  */}
        <div className="support-benefits-donate">
          <div>
            <h2>Your Support Matters</h2>
            {/* TODO use real text */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            Benefits of scouting
            <ul>
              {/* TODO use real text */}
              {/* check marks for bullet points */}
              <li>Learn about leadership</li>
              <li>Learn about service</li>
              <li>Learn about teamwork</li>
              <li>Learn about teamwork</li>
              <li>Learn about teamwork</li>
              <li>Learn about teamwork</li>
              <li>Learn about teamwork</li>
              <li>Learn about teamwork</li>
            </ul>
          </div>
          <div>
            <h2>Empower Future Leaders&#8202;&mdash;&#8202;Donate Today</h2>
            <button onClick={() => setDonationDollars(50)}>$50</button>
            <button onClick={() => setDonationDollars(100)}>$100</button>
            <button onClick={() => setDonationDollars(250)}>$250</button>
            <input
              type="text"
              onChange={(e) => setDonationDollars(Number(e.target.value))}
              placeholder="Other Amount"
              value={donationDollars}
            />
            <div>
              Cover processing fees for my {donationDollars} by increasing it to{' '}
              {getDonationWithFeesAmount(donationDollars)}
            </div>
            <button>Enter payment info</button>
          </div>
          <p>
            {/* TODO: Make "contact us" a button that opens the modal near the bottom */}
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
          <button>Contact Us</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </h2>
      </section>
    </>
  );
}

function Calendar() {
  return <div>Calendar</div>;
}

function LinkBar() {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/calendar">Calendar</Link>
    </div>
  );
}

function App() {
  return (
    <>
      {/* <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" /> */}

      <BrowserRouter>
        <LinkBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
