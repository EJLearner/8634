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
      height={200}
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 200 150"
    >
      <rect height={rectHeight} rx="20" ry="20" width="100%" x="0" y="0" />
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
      <QuoteShape className="background-quote" type="background" />
      <QuoteShape className="foreground-quote" type="foreground" />
      <FaQuoteLeft className="left-quote-icon" />
      <FaQuoteRight className="right-quote-icon" />
      <img alt={`${name}'s picture`} className="scout-picture" src={picture} />
      <div className="quote-content">
        <p className="quote-text">{text}</p>
        <p className="name-rank-age">
          {name}, {rank} Scout&ndash;Age {age}
        </p>
      </div>
    </div>
  );
}

export {Quote};
