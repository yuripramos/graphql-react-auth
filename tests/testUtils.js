import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider as ApolloMockedProvider } from '@apollo/react-testing';


export const renderWithApolloMockedProvider = (
  node,
  { mocks, addTypename = false }
) => ({
  ...render(
    <ApolloMockedProvider mocks={mocks} addTypename={addTypename} >
      {node}
    </ApolloMockedProvider>
  )
});



export const buildApolloMockWithError = (
  query,
  variables,
  error = new Error('sample error')
) => ({
  request: {
    query,
    variables
  },
  error
});

export const buildApolloMockWithData = (query, variables, data) => ({
  request: {
    query,
    variables
  },
  result: { data }
});
