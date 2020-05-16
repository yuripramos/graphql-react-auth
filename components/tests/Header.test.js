import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('<Header />', () => {

  it("render component without crashing", () => {
    expect(() => {
      render(
        <Header />
      );
    }).not.toThrow();
  })
});