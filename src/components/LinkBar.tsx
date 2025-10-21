import {ANCHOR_IDS} from '../utils/constants';
import './linkBar.css';
import {Link, useLocation} from 'react-router-dom';

function LinkBar() {
  const location = useLocation();

  const isAtHome = location.pathname === '/';

  return (
    <nav>
      {!isAtHome && <Link to="/">Home</Link>}
      {isAtHome && <Link to="/calendar">Calendar</Link>}
      <a href={`/#${ANCHOR_IDS.CONTACT_US}`}>Learn More</a>
    </nav>
  );
}

export {LinkBar};
