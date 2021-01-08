import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Display from '../Display';

describe('The Display Appearance', () => {
  it('Matches the Snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Initializes with a displayed value of 0', () => {
    const { getByText } = render(<Display />);
    getByText('0');
  });
});
