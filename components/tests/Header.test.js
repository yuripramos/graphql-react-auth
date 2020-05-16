import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';
import { renderWithApolloMockedProvider } from '../../tests/testUtils';

describe('<Header />', () => {

  it("render component without crashing", () => {
    expect(() => {
      renderWithApolloMockedProvider(
        <Header />
      );
    }).not.toThrow();
  })
});