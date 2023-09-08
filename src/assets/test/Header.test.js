import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

describe("testing the Header, Logo and Nav Components", () => {

  test('Logo component Should contain Image', () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  test('Logo component should contain a header', () => {
    render(<Logo />);
    const logoHeader = screen.getByRole("heading");
    expect(logoHeader).toBeInTheDocument();
  });

  const MockingNav = () => {
    return (
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
  }

  test('Nav Contain the ul ', () => {
    render(<MockingNav />);
    const navItem = screen.getByRole("list");
    expect(navItem).toBeInTheDocument();
  });

  test('Nav ul contain the items', () => {
    render(<MockingNav />);
    const navItem_links = screen.getAllByRole("listitem");
    expect(navItem_links.length).toBe(4);
  });

});
