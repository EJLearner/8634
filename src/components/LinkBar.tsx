import {Link} from 'react-router-dom';

function LinkBar() {
  return (
    <nav>
      <Link to="/calendar">Calendar</Link>
      <a href="/#donate-header">Donate</a>
      <a href="/#contact-us-header">Learn More</a>
    </nav>
  );
}

export {LinkBar};
