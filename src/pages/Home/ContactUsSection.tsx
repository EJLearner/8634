import scoutsRaftingPic from '../../assets/images/scouts-rafting.png';
import scoutCookingPic from '../../assets/images/scout-cooking.jpg';

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
      <div className="about-us">
        <h2 id="contact-us-header">
          Want to Know More?
          <br />
          Reach out to us!
        </h2>
        <button onClick={() => dialogRef.current?.showModal()}>
          Contact Us
        </button>
        <p className="history">
          Troop 8634 was chartered on February 1, 2019 originally at Covenant of
          Grace PCA. 8634 started with seven scouts--sisters of current boy
          scouts who were looking for more than crafts and cookies. In our first
          year, we participated in district Camporee, went to summer camp,
          Assateague, Washington DC, horseback riding and hiking, and fearlessly
          used navigation and map reading skills when we got lost. We had the
          first female Eagle Scout in the former Arrowhead district and first
          female OA Chapter Chief. Our scouts have staffed summer camp and Cub
          Adventure camp and have joined Venture Crews and Sea Scout ships. We
          have graduated five Eagle Scouts with five more coming soon. The
          scouts have earned the Saffran Eagle award from summer camp four years
          running and came in third overall at the 2024 district camporee. Our
          focus is on building skills, independence, and leadership all in a
          welcoming and inclusive community.
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
          src={scoutsRaftingPic}
        />
        <CircleImage
          alt="Scout cooking"
          className="large-image"
          src={scoutCookingPic}
        />
      </div>
    </section>
  );
}
