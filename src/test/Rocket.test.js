import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';

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

function MockingRockets() {
  return (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
}

describe('testing the Rockets', () => {
  test('the amount of  Rockets and implicitly the getRockets() ', async () => {
    render(<MockingRockets />);
    const rocketElements = await screen.findAllByRole('img');
    expect(rocketElements.length).toBe(1);
  });

  test('When the Rocket is reserved', async () => {
    render(<MockingRockets />);
    const reservedRockeButton = await screen.findByRole('button');
    fireEvent.click(reservedRockeButton);
    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
    expect(cancelRockeButton).toBeInTheDocument();
  });

  test('When the Rockets Reserve is cancelled', async () => {
    render(<MockingRockets />);
    const reservedRockeButton = await screen.findByRole('button');
    fireEvent.click(reservedRockeButton);
    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
    expect(cancelRockeButton).toBeInTheDocument();
    fireEvent.click(reservedRockeButton);
    const reserveRockeButton = screen.getByText(/Reserve Rocket/i);
    expect(reserveRockeButton).toBeInTheDocument();
  });
});
