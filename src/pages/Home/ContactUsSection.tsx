import scoutsRaftingPng from '../../assets/images/scouts-rafting.png';
import scoutCookingPng from '../../assets/images/scout-cooking.png';

import {Dialog} from './Dialog';

function CircleImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`circle-image ${className}`}>
      <img alt={alt} src={src} />
    </div>
  );
}

export function ContactUsSection({
  ref: dialogRef,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) {
  return (
    <section className="contact-us-section">
      <div>
        <h2 id="contact-us-header">
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
        <Dialog onClose={() => dialogRef.current?.close()} ref={dialogRef} />
      </div>
      <div className="circle-images">
        <svg
          className="circle-shape"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
        <CircleImage
          alt="Scouts rafting"
          className="small-image"
          src={scoutsRaftingPng}
        />
        <CircleImage
          alt="Scout cooking"
          className="large-image"
          src={scoutCookingPng}
        />
      </div>
    </section>
  );
}
