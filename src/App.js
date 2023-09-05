import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Rocket from './assets/components/Rockets';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={Rocket} />
      {/* <Route path='mission' element={ } />
      <Route path='profile' element={ } /> */}
    </Routes>
  </>
);

export default App;
