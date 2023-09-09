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
    {
      mission_id: '2arora',
      mission_name: 'Travel with Nasa',
      description: 'Let us go ....',
      reserved: false,
    },
    {
      mission_id: '3g',
      mission_name: 'Travel with Start',
      description: 'Please call Mr Ellon ....',
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
describe("testing the Missions", () => {

  test('Testing Travel to space with Nasa ', async () => {
    render(<MockingMissions />);
    const MissionElements = await screen.findByText(/Nasa/i);
    expect(MissionElements).toBeInTheDocument();
  });

  test('Testing the new Mission State Microverse ', async () => {
    render(<MockingMissions />);
    const MissionElements = await screen.findByText(/Microverse/i);
    expect(MissionElements).toBeInTheDocument();
  });

  test('Testing the new Mission with Mr Ellon ... ', async () => {
    render(<MockingMissions />);
    const MissionElements = await screen.findByText(/Ellon/i);
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