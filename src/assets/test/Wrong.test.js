import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Wrong from '../components/Wrong';

describe('testing the Wrong Components', () => {
  test('Wrong component Should contain an Heading', () => {
    render(<Wrong />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });

  it('Logo component should contain a wrong sms', () => {
    render(<Wrong />);
    const paragraphItem = screen.getByText(/UUUPPPSSSS!/i);
    expect(paragraphItem).toBeInTheDocument();
  });
});
