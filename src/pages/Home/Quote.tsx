import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function QuoteShape({
  className,
  isForeground,
}: {
  className: string;
  isForeground: boolean;
}) {
  const FRONT_QUOTE_SHAPE_FILL_COLOR = 'rgb(63, 126, 0)';

  const BEHIND_QUOTE_SHAPE_FILL_COLOR = 'transparent';
  const BEHIND_QUOTE_SHAPE_STROKE_COLOR = 'rgb(240,240,240)';

  // should match green63
  const fillColor = isForeground
    ? FRONT_QUOTE_SHAPE_FILL_COLOR
    : BEHIND_QUOTE_SHAPE_FILL_COLOR;
  const strokeColor = isForeground
    ? 'transparent'
    : BEHIND_QUOTE_SHAPE_STROKE_COLOR;

  const svg = `<svg preserveAspectRatio="none" viewBox="0 0 250 130" xmlns="http://www.w3.org/2000/svg">
  <rect height="100" rx="20" ry="20" width="100%" x="0" y="0" fill="${fillColor}" stroke="${strokeColor}"></rect>
  <polygon points="30,99 80,99 55,129" fill="${fillColor}" stroke="${strokeColor}"></polygon>
</svg>`;

  const encodedSvg = encodeURIComponent(svg);

  return (
    <img
      aria-hidden="true"
      className={className}
      color="var(--front-quote-shape-fill-color)"
      src={`data:image/svg+xml;utf8,${encodedSvg}`}
    />
  );
}

function Quote(props: {
  text: string;
  name: string;
  rank: string;
  age: number;
  picture: string;
}) {
  const {text, name, rank, age, picture} = props;

  return (
    <div className="quote-wrapper">
      <QuoteShape className="background-quote" isForeground={false} />
      <QuoteShape className="foreground-quote" isForeground={true} />
      <img alt={`${name}'s picture`} className="scout-picture" src={picture} />
      <div className="quote-content">
        <FaQuoteLeft className="left-quote-icon" />
        <p className="quote-text">{text}</p>
        <FaQuoteRight className="right-quote-icon" />
        <p className="name-rank-age">
          {name}, {rank} Scout&ndash;Age {age}
        </p>
      </div>
    </div>
  );
}

export {Quote};
