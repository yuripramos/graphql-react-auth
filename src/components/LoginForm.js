import React, { useState } from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../mutations/login";

function LoginForm() {
  const client = useApolloClient();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const variables = { username, password };

  const [loginMutation, { data, loading, error }] = useMutation(LOGIN, {
    variables
  });

  // const onLoginHandler = useMutation(LOGIN, {
  //   onCompleted({ login }) {
  //     localStorage.setItem("token", login);
  //     client.writeData({ data: { isLoggedIn: true } });
  //   }
  // });
  console.log("useMutation resp", data, error);
  return (
    <Box
      as="form"
      onSubmit={e => e.preventDefault()}
      width={[1, 1, 1 / 2]}
      py={3}
    >
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="name">Username</Label>
          <Input
            id="username"
            name="username"
            onBlur={e => {
              setUsername(e.target.value);
            }}
          />
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onBlur={e => {
              setPassword(e.target.value);
            }}
          />
        </Box>
      </Flex>
      <Flex mx={-2} flexWrap="wrap" justifyContent="flex-end">
        <Box px={2}>
          <Button
            onClick={async () => {
              loginMutation({ variables });
            }}
            backgroundColor="#374ef2"
          >
            Login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginForm;
