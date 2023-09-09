import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Profile from '../components/Profile';

function MockingRocketsProfile() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

describe('testing the Profile', () => {
  test('see how it renders ', () => {
    const { tree } = render(<MockingRocketsProfile />);
    expect(tree).toMatchSnapshot();
  });

  test('mission', () => {
    render(<MockingRocketsProfile />);
    const word = screen.getByText(/mission/i);
    expect(word).toBeInTheDocument();
  });
});
