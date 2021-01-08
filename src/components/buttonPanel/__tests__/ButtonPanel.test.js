import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

describe('The Button Panel Appearance', () => {
  it('Matches the Button Panel Snapshot', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders all of the buttons correctly', () => {
    const { getByText } = render(<ButtonPanel />);

    getByText('AC');
    getByText('+/-');
    getByText('%');
    getByText('÷');
    getByText('7');
    getByText('8');
    getByText('9');
    getByText('x');
    getByText('4');
    getByText('5');
    getByText('6');
    getByText('-');
    getByText('1');
    getByText('2');
    getByText('3');
    getByText('+');
    getByText('0');
    getByText('.');
    getByText('=');
  });
});
