import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function myTriangleMaker({
  top,
  left,
  width,
  height,
  peakAtTop = true,
}: {
  top: number;
  left: number;
  width: number;
  height: number;
  peakAtTop?: boolean;
}) {
  const right = left + width;
  const bottom = top + height;

  const points = peakAtTop
    ? `${left},${bottom} ${right},${bottom} ${(left + right) / 2},${top}`
    : `${left},${top} ${right},${top} ${(left + right) / 2},${bottom}`;

  return <polygon points={points} />;
}

function QuoteShape({
  className,
  type,
}: {
  className: string;
  type: 'foreground' | 'background';
}) {
  const svgHeight = 150;
  const rectHeight = 0.666666 * svgHeight;

  const triangleProperties = {
    top: rectHeight - 1,
    left: 30,
    width: 50,
    height: type === 'foreground' ? 30 : 70,
    peakAtTop: false,
  };

  return (
    <svg
      className={className}
      width="200"
      height={200}
      xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 200 150"
    >
      <rect
        width="100%"
        height={rectHeight}
        x="0"
        y="0"
        rx="20"
        ry="20"
        // fill="purple"
      />
      {myTriangleMaker(triangleProperties)}
    </svg>
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
      <QuoteShape type="background" className="background-quote" />
      <QuoteShape type="foreground" className="foreground-quote" />
      <FaQuoteLeft className="left-quote-icon" />
      <FaQuoteRight className="right-quote-icon" />
      <img className="scout-picture" src={picture} alt={`${name}'s picture`} />
      <div className="quote-content">
        <p>{text}</p>
        <p className="name-rank-age">
          {name}, {rank} {age}
        </p>
      </div>
    </div>
  );
}

export {Quote};
