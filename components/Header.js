import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { isAuthenticatedQuery } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../apollo/client';
import React from 'react';

function isActive(pathname) {
  return typeof document !== 'undefined' && document.location.pathname === pathname;
}

export const Header = () => {
  const { loading, data: dataAuth, error } = useQuery(isAuthenticatedQuery);

  const [isAuth, setIsAuth] = useState(false);
  console.log('data', dataAuth)
  useEffect(() => {
    setIsAuth(Boolean(localStorage.getItem('token')) || false);
  }, []);

  const removeSession = async () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return (
    <nav>
      <div className="left">
        <Link href="/">
          <a data-active={isActive('/')}>Blog</a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>Drafts</a>
        </Link>
      </div>
      <div className="right">
        {!!isAuth ? (
          <Fragment>
            <Link href="/create">
              <a data-active={isActive('/create')}>+ Create draft</a>
            </Link>
            <Link href="/login">
              <a onClick={() => removeSession()}>Logout</a>
            </Link>
          </Fragment>
        ) : (
            <Fragment>
              <Link href="/signup">
                <a data-active={isActive('/signup')}>Signup</a>
              </Link>
              <Link href="/login">
                <a data-active={isActive('/login')}>Login</a>
              </Link>
            </Fragment>
          )}
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
          background: hsla(0, 0%, 82%, 0.75);
          height: 100px;
        }

        .bold {
          font-weight: 900;
        }

        a {
          text-decoration: none;
          color: #000;
          font-weight: regular;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: #000;
          font-weight: bold;
          font-size: 20px;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          background: hsla(0, 0%, 0%, 0.79);
          color: white;
          font-weight: 500;
        }

        .right a:hover {
          background: hsl(0, 72%, 54%);
        }
      `}</style>
    </nav>
  );
};

export default withApollo(Header);
