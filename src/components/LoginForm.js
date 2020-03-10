import React from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../mutations/login";

function LoginForm() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("token", login);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <Box
      as="form"
      onSubmit={e => {
        e.preventDefault();
      }}
      width={[1, 1, 1 / 2]}
      py={3}
    >
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="name">Username</Label>
          <Input id="username" name="username" />
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </Box>
      </Flex>
      <Flex mx={-2} flexWrap="wrap" justifyContent="flex-end">
        <Box px={2}>
          <Button backgroundColor="#374ef2">Login</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginForm;
