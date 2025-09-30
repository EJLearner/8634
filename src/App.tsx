import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {useRef, useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import topPicture from './assets/images/temp-top-picture.jpg';
import {Quote} from './components/Quote';
import {FaAsterisk} from 'react-icons/fa';

function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');

  console.log({nameError, emailError, messageError, phoneError});

  console.log(email);

  const validateName = (name: string) => {
    let error = '';

    if (!name.trim()) {
      error = 'Name is required.';
    }

    setNameError(error);
    return !error;
  };

  const validatedEmail = (email: string) => {
    let error = '';

    if (!/\S+@\S+\.\S+/.test(email)) {
      error = 'Please enter a valid email address.';
    }

    setEmailError(error);
    return !error;
  };

  const validatePhone = (phone: string) => {
    let error = '';

    if (phone.trim() !== '' && !/^\+?[0-9\s\-()]+$/.test(phone)) {
      error = 'Please enter a valid phone number.';
    }

    setPhoneError(error);
    return !error;
  };

  const handleNameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const {value} = event.target;

    let error = '';

    if (!value.trim()) {
      error = 'Name is required.';
    }

    setNameError(error);

    validateName(value);
    setName(value.trim());
  };

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const {value} = event.target;

    let error = '';

    if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    }

    setEmailError(error);

    validatedEmail(value);
    setEmail(value.trim());
  };

  const handleMessageBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;

    let error = '';

    if (!value.trim()) {
      error = 'Message is required.';
    }

    setMessageError(error);

    setMessage(value.trim());
  };

  const handlePhoneBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const {value} = event.target;

    let error = '';

    // TODO: improve phone validation - should be at least 10 digits
    if (phone.trim() !== '' && !/^\+?[0-9\s\-()]$/.test(phone)) {
      error = 'Please enter a valid phone number.';
    }

    setPhoneError(error);

    validatePhone(value);
    setPhone(value.trim());
  };

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
      {/* TODO: Quotes section */}
      <section className="quotes">
        <Quote text="This is fun!" name="Jane Doe" rank="Tenderfoot" age={13} />
        <Quote text="This is fun!" name="Jane Doe" rank="Tenderfoot" age={13} />
        <Quote text="This is fun!" name="Jane Doe" rank="Tenderfoot" age={13} />
        <Quote text="This is fun!" name="Jane Doe" rank="Tenderfoot" age={13} />
      </section>
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
        <dialog className="contact-us-form" ref={dialogRef}>
          <h3>Contact Us</h3>
          <form name="contact" data-netlify="true" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
              Name <FaAsterisk className="required-asterisk" />
              {nameError && (
                <div className="error-message" id="name-error" role="alert">
                  {nameError}
                </div>
              )}
              <input
                aria-label="Name"
                aria-invalid={Boolean(nameError)}
                aria-describedby={nameError ? 'name-error' : undefined}
                id="name"
                name="name"
                type="text"
                required
                onBlur={handleNameBlur}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              Email <FaAsterisk className="required-asterisk" />
              {emailError && (
                <div className="error-message" id="email-error" role="alert">
                  {emailError}
                </div>
              )}
              <input
                id="email"
                aria-label="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                onBlur={handleEmailBlur}
                required
                // not using type email so that my code can control email validation
                type="text"
                value={email}
              />
            </label>
            <label htmlFor="phone">
              Phone
              {phoneError && (
                <div className="error-message" id="phone-error" role="alert">
                  {phoneError}
                </div>
              )}
              <input
                id="phone"
                aria-label="Phone"
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                onBlur={handlePhoneBlur}
                type="tel"
                value={phone}
              />
            </label>
            <label htmlFor="message">
              Message <FaAsterisk className="required-asterisk" />
              {messageError && (
                <div className="error-message" id="message-error" role="alert">
                  {messageError}
                </div>
              )}
              <textarea
                aria-label="Message"
                id="message"
                name="message"
                rows={3}
                onBlur={handleMessageBlur}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="submit" onClick={() => dialogRef.current?.close()}>
              Submit
            </button>
          </form>
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
