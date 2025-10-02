import {Link} from 'react-router-dom';

function LinkBar() {
  return (
    <nav>
      <Link to="/calendar">Calendar</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/learn-more">Learn More</Link>
    </nav>
  );
}

export {LinkBar};
