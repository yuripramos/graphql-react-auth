import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export function useLazyQuery<TData = any, TVariables = any>(query: any) {
  const client = useApolloClient();
  return React.useCallback(
    (variables: TVariables) =>
      client.query<TData, TVariables>({
        query: query,
        variables: variables,
      }),
    [client]
  );
}
