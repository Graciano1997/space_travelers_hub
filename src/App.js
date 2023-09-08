import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Rocket from './assets/components/Rockets';
import Profile from './assets/components/Profile';
import Missions from './assets/components/Missions';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/rocket" element={<Rocket />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
