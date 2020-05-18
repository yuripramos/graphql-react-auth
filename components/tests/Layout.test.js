import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout />', () => {
  const props = {
    children: <div> children component</div>
  }

  it("render component without crashing", () => {
    expect(() => {
      render(
        <Layout {...props} />
      );
    }).not.toThrow();
  })
});