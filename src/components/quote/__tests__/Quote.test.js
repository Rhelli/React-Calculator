import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('The appearance of the Quote Page', () => {
  it('Matches the Quote Page snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the Quote Page Outer Container', () => {
    const { container } = render(<Quote />);
    expect(container.firstChild.classList.contains('quotePage')).toBe(true);
  });

  it('Contains the Navbar', () => {
    const { container } = render(<Quote />);
    expect(container.firstChild.firstChild.classList.contains('navbarContainer')).toBe(true);
  });
})
