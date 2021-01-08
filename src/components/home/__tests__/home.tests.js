import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('The Home Pages Appearance', () => {
  it('Matches the Homepage Snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the home page container', () => {
    const { container } = render(<Home />);
    expect(container.firstChild.classList.contains('homeContainer')).toBe(true);
  });

  it('Contains the Navbar', () => {
    const { container } = render(<Home />);
    expect(container.firstChild.firstChild.classList.contains('navbarContainer')).toBe(true);
  });

  it('Contains the welcome text', () => {
    const { getByText } = render(<Home />);
    getByText('Welcome to Our Page!');
  });

  it('Contains the ipsum lorem text', () => {
    const { getByText } = render(<Home />);
    getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa. Elit pellentesque habitant morbi tristique senectus et netus et. Velit euismod in pellentesque massa placerat duis. Non tellus orci ac auctor augue maurisaugue neque. Nulla pharetra diam sit amet. Sed vulputate mi sit amet mauris commodo quis. Vestibulum mattis ullamcorper velit sed ullamcorper. In nulla posuere sollicitudin aliquam ultrices sagittis. Praesent tristique magna sit amet purus. Sed vulputate mi sit amet. Interdum velit laoreet id donec. Viverra adipiscing at in tellus integer. Est sit amet facilisis magna etiam tempor. Diam quam nulla porttitor massa id neque. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Arcu non sodales neque sodales ut etiam sit amet nisl. Urna neque viverra justo nec ultrices dui sapien eget mi.');
  });
});
