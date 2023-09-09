import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import RocketItem from '../components/RocketItem';

function MockingRockets() {
  return (
    <Provider store={store}>
      <RocketItem
        key={1}
        id={1}
        name="falcon"
        description="good"
        imageRocket={['dfasdf']}
        type="any"
        reserved={false}
      />
    </Provider>
  );
}

describe('testing the Rockets', () => {
  test('the item ', () => {
    const { tree } = render(<MockingRockets />);
    expect(tree).toMatchSnapshot();
  });

  test('the item ', () => {
    render(<MockingRockets />);
    const el = screen.getByText(/falcon/i);
    expect(el).toBeInTheDocument();
  });
});
