import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';

const response = {
  data: [
    {
      id: 1,
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'rocket',
    },
  ],
};

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue(response),
}));

function MockingRocketsProfile() {
  return (
    <Provider store={store}>
      <Rockets />
      <Profile />
    </Provider>
  );
}
describe('testing the Profile', () => {
  test('When we Reserved Rockets', async () => {
    render(<MockingRocketsProfile />);
    const reservedRockeButton = await screen.findByRole('button');
    fireEvent.click(reservedRockeButton);
    const reservedRockeItem = screen.getByTitle(/rocketItem/i);
    expect(reservedRockeItem).toBeInTheDocument();
  });

  test('When the User has Cancelled a Reserved Rockets', async () => {
    render(<MockingRocketsProfile />);
    const reservedRockeButton = await screen.findByRole('button');
    fireEvent.click(reservedRockeButton);
    fireEvent.click(reservedRockeButton);
    const reservedRockeItem = screen.queryByText(/have any reserved Rockets! 🚀😉😊/i);
    expect(reservedRockeItem).toBeInTheDocument();
  });
});
