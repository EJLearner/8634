import {useState} from 'react';
import {Textarea} from '../../components/Textarea';
import {Textbox} from '../../components/Textbox';

export function Dialog({
  onClose,
  ref,
}: {
  onClose: () => void;
  ref: React.RefObject<HTMLDialogElement | null>;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <dialog className="contact-us-form" ref={ref}>
      <h3>Contact Us</h3>
      <form data-netlify="true" method="POST" name="contact">
        <input name="form-name" type="hidden" value="contact" />
        <Textbox
          id="name"
          label="Name"
          onChange={(value: string) => {
            setName(value);
          }}
          pattern=".*\S.*"
          required
          value={name}
        />
        <Textbox
          id="email"
          label="Email"
          onChange={(value: string) => {
            setEmail(value);
          }}
          pattern="^\S+@\S+\.\S+$"
          required
          value={email}
        />
        <Textbox
          id="phone"
          label="Phone"
          onChange={(value: string) => {
            setPhone(value);
          }}
          pattern="^(?:\D*\d\D*){10,}$"
          value={phone}
        />
        <Textarea
          id="message"
          label="Message"
          onChange={(value: string) => {
            setMessage(value);
          }}
          required
          value={message}
        />
        <button onClick={() => onClose} type="submit">
          Submit
        </button>
      </form>
    </dialog>
  );
}
