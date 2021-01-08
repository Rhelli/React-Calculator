import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('The appearance of the calculator', () => {
  it('Matches the Calculator snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the navbar as the first component on the page', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild.firstChild.classList.contains('navbarContainer')).toBe(true);
  });

  it('Contains the Calculator component as the second component on the page', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild.lastChild.classList.contains('calculatorContainer')).toBe(true);
  });

  it('Contains the calculator blurb text on the page', () => {
    const { getByText } = render(<Calculator />);
    getByText("Let's Math It Up Nerds");
  });

  it('Contains the actual calculator itself', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild.lastChild.lastChild.classList.contains('calculator')).toBe(true);
  });
});
