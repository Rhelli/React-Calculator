import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

describe('The Navbar Appearance', () => {
  it('Matches the Navbar Snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the Navbar title container and text', () => {
    const { container, getByText } = render(<Navbar />);
    expect(container.firstChild.firstChild.classList.contains('navbarTitle')).toBe(true);
    getByText('Math Magicians');
  });

  it('Contains the navbar links container and links', () => {
    const { container, getByText } = render(<Navbar />);
    expect(container.firstChild.lastChild.classList.contains('navbarLinks')).toBe(true);
    getByText('Home');
    getByText('Calculator');
    getByText('Quote');
  });
});
