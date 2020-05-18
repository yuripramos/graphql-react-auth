import React from 'react';
import { render } from '@testing-library/react';
import Draft from '../create';

describe('<Create />', () => {

  it("render component without crashing", () => {
    expect(() => {
      render(
        <Draft />
      );
    }).not.toThrow();
  })
});