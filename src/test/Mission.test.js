import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import Missions from '../components/Missions';

function MockingMissions() {
  return (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
}
describe('testing the Missions', () => {
  it('Check if Evething is rendered correctly', () => {
    const { tree } = render(<MockingMissions />);
    expect(tree).toMatchSnapshot();
  });
});
