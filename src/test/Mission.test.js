import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import Missions from '../components/Missions';

const response = {
  data: [
    {
      mission_id: '1gra',
      mission_name: 'Microverse Planet',
      description: 'Going to Study in space',
      reserved: false,
    },
   ],
};

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue(response),
}));

function MockingMissions() {
  return (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
}
describe('testing the Missions', () => {
  test('Testing Travel to space with Microverse ', async () => {
    render(<MockingMissions />);
    const MissionElements = await screen.findByText(/Microverse/i);
    expect(MissionElements).toBeInTheDocument();
  });

 
  it('Check if Evething is rendered correctly', () => {
    const { tree } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
