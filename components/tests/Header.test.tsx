import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';
import { renderWithApolloMockedProvider, buildApolloMockWithData } from '../../tests/testUtils';
import { isAuthenticatedQuery } from '../../queries';

describe('<Header />', () => {

  const mockedData = [
    {
      id: 2,
      title: "Subscribe to GraphQL Weekly for community news ",
      content: "https://graphqlweekly.com/",
      published: true,
      author: {
        id: 1,
        name: "Bob",
        __typename: "User"
      },
      __typename: "Post"
    }
  ];

  it("render component without crashing", () => {
    expect(() => {
      renderWithApolloMockedProvider(
        <Header />,
        {
          mocks: [
            buildApolloMockWithData(
              isAuthenticatedQuery,
              {},
              mockedData
            )
          ]
        }
      );
    }).not.toThrow();
  })
});