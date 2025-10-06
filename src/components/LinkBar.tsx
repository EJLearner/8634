import './linkBar.css';
import {Link, useLocation} from 'react-router-dom';

function LinkBar() {
  const location = useLocation();

  const isAtHome = location.pathname === '/';

  return (
    <nav>
      {!isAtHome && <Link to="/">Home</Link>}
      {isAtHome && <Link to="/calendar">Calendar</Link>}
      <a href="/#donate-header">Donate</a>
      <a href="/#contact-us-header">Learn More</a>
    </nav>
  );
}

export {LinkBar};
