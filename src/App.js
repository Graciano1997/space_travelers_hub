import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rocket from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';
import style from './assets/style/App.module.css';

const App = () => (
  <div className={style.appContainer}>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/rocket" element={<Rocket />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
