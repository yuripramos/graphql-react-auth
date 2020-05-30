import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import { withApollo } from '../apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { ErrorMsg } from '../components/error';
import { LoginMutation } from "../mutations";

function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [login, { error: loginError }] = useMutation(LoginMutation, {
    onCompleted(data) {
      localStorage.setItem('token', data.login.token);
    },
  });

  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await login({
              variables: {
                email: email,
                password: password,
              },
            });

            Router.push('/');
          }}
        >
          <h1>Login user</h1>
          <input autoFocus onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" value={email} />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
          {loginError && (
            <ErrorMsg error={loginError} />
          )}
          <input disabled={!password || !email} type="submit" value="Login" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
        }

        input[type='text'],
        input[type='password'] {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: hsla(0, 0%, 0%, 0.79);
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #ffffff;
          border: 0;
          padding: 1rem 2rem;
        }

        input[type='submit']:hover {
          background: #dc00dc;
          cursor: pointer;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default withApollo(Login);
