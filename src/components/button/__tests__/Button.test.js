import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button appearance', () => {
  it('Matches the Button Snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Matches its inline snapshot', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="button"
      >
        <button
          class="grey"
          id=""
          type="button"
        />
      </div>
    `);
  });
});
