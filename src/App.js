import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Rocket from './assets/components/Rockets';
import Wrong from './assets/components/Wrong';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="rocket" element={<Rocket />} />
      <Route path="/*" element={<Wrong />} />
      {/* <Route path='mission' element={ } />
      <Route path='profile' element={ } /> */}
    </Routes>
  </>
);

export default App;
