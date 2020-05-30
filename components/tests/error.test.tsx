import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMsg } from '../error';

describe('<ErrorMsg />', () => {
  const props = {
    error: "cannot render this props without values"
  };
  it("render component without crashing", () => {
    expect(() => {
      render(
        <ErrorMsg {...props} />
      );
    }).not.toThrow();
  })
});