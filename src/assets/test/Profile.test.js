import { Provider } from 'react-redux';
import store from '../redux/store';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';

function MockingRocketsProfile() {
  return (
    <Provider store={store}>
      <Rockets />
      <Profile />
    </Provider>
  )
}
describe("testing the Profile", () => {
  test('When we Reserved Rockets', async () => {
    render(<MockingRocketsProfile />)
    const reservedRockeButton = await screen.findByRole("button");
    fireEvent.click(reservedRockeButton);
    const reservedRockeItem = screen.getByTitle(/rocketItem/i);
    expect(reservedRockeItem).toBeInTheDocument();
  });

  test('When the User has Cancelled a Reserved Rockets', async () => {
    render(<MockingRocketsProfile />)
    const reservedRockeButton = await screen.findByRole("button");
    fireEvent.click(reservedRockeButton);
    fireEvent.click(reservedRockeButton);
    const reservedRockeItem = screen.queryByText(/have any reserved Rockets! 🚀😉😊/i);
    expect(reservedRockeItem).toBeInTheDocument();
  });

})
