import { Provider } from 'react-redux';
import store from '../redux/store';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';

function MockingRockets() {
  return (
    <Provider store={store}>
      <Rockets />
    </Provider>
  )
}

describe("testing the Rockets", () => {
  test('the amount of  Rockets and implicitly the getRockets() ', async () => {
    render(<MockingRockets />)
    const rocketElements = await screen.findAllByRole("img");
    expect(rocketElements.length).toBe(1);
  });

  test('When the Rocket is reserved', async () => {
    render(<MockingRockets />)
    const reservedRockeButton = await screen.findByRole("button");
    fireEvent.click(reservedRockeButton);
    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
    expect(cancelRockeButton).toBeInTheDocument();
  });

  test('When the Rockets Reserve is cancelled', async () => {
    render(<MockingRockets />)
    const reservedRockeButton = await screen.findByRole("button");
    fireEvent.click(reservedRockeButton);
    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
    expect(cancelRockeButton).toBeInTheDocument();
    fireEvent.click(reservedRockeButton);
    const reserveRockeButton = screen.getByText(/Reserve Rocket/i);
    expect(reserveRockeButton).toBeInTheDocument();
  });

});
