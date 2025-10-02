import {useRef, useState} from 'react';
import topPicture from '../../assets/images/temp-top-picture.jpg';
import {Quote} from './Quote';
import {Textbox} from '../../components/Textbox';
import {Textarea} from '../../components/Textarea';
import {LinkBar} from '../../components/LinkBar';

function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <LinkBar />
      <img alt="Scouts in Troop" src={topPicture} />
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
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
        <Quote age={13} name="Jane Doe" rank="Tenderfoot" text="This is fun!" />
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
          <form data-netlify="true" method="POST" name="contact">
            <input name="form-name" type="hidden" value="contact" />
            <Textbox
              id="name"
              label="Name"
              onChange={(value: string) => setName(value)}
              pattern=".*\S.*"
              required
              value={name}
            />
            <Textbox
              id="email"
              label="Email"
              onChange={(value: string) => setEmail(value)}
              pattern="^\S+@\S+\.\S+$"
              required
              value={email}
            />
            <Textbox
              id="phone"
              label="Phone"
              onChange={(value: string) => setPhone(value)}
              pattern="^(?:\D*\d\D*){10,}$"
              value={phone}
            />
            <Textarea
              id="message"
              label="Message"
              onChange={(value: string) => setMessage(value)}
              required
              value={message}
            />
            <button onClick={() => dialogRef.current?.close()} type="submit">
              Submit
            </button>
          </form>
        </dialog>
      </section>
    </>
  );
}

export {Home};
