import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Rocket from './assets/components/Rockets';
import Wrong from './assets/components/Wrong';
import Profile from './assets/components/Profile';
import Missions from './compenent/mission/Missions';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="rocket" element={<Rocket />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/*" element={<Wrong />} />
    </Routes>
  </>
);

export default App;
