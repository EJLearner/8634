import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import {Calendar} from './pages/Calendar/Calendar';
import {Home} from './pages/Home/Home';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Calendar />} path="/calendar" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
