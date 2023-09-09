import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import configureMockStore from 'redux-mock-store';
import Missions from '../components/Missions';

// const mockStore = configureMockStore([]);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

// describe('Loading missions component', () => {
//   it('renders correctly', () => {

//     const { tree } = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>,
//     );
//     expect(tree).toMatchSnapshot();
//   });
// });
// const initialState = {
//   missions: [
//     {
//       id: 1,
//       name: 'Mission',
//       description: 'This is a lengthy description indicating the mission paramaters',
//       reserved: false,
//     },
//   ],
// };


function MockingMissions() {
  // const store = mockStore(initialState);
  return (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
}

test('the amount of  Rockets and implicitly the getRockets() ', () => {

  render(<MockingMissions />);
  const MissionElements = screen.getByText(/This is a lengthy /i);
  expect(MissionElements).toBeInTheDocument();
});

//  test('When the Rocket is reserved', async () => {
//    render(<MockingRockets />);
//    const reservedRockeButton = await screen.findByRole('button');
//    fireEvent.click(reservedRockeButton);
//    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
//    expect(cancelRockeButton).toBeInTheDocument();
//  });

//  test('When the Rockets Reserve is cancelled', async () => {
//    render(<MockingRockets />);
//    const reservedRockeButton = await screen.findByRole('button');
//    fireEvent.click(reservedRockeButton);
//    const cancelRockeButton = screen.getByText(/Cancel Reservation/i);
//    expect(cancelRockeButton).toBeInTheDocument();
//    fireEvent.click(reservedRockeButton);
//    const reserveRockeButton = screen.getByText(/Reserve Rocket/i);
//    expect(reserveRockeButton).toBeInTheDocument();
//  });

