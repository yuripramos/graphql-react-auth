import { Fragment } from 'react'
import Link from 'next/link'
import { isAuthenticatedQuery } from '../queries'
import { useQuery } from '@apollo/react-hooks'
import Router from 'next/router'
import Cookies from 'js-cookie'

function isActive(pathname) {
  return (
    typeof document !== 'undefined' && document.location.pathname === pathname
  )
}

function removeSession() {
  Cookies.remove('token', { path: '' })
  Router.push('/')
}

const Header = () => {
  const isAuthenticated = useQuery(isAuthenticatedQuery).data

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
        {!!isAuthenticated ? (
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
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: gray;
          font-weight: regular;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: #000;
          font-weight: bold;
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
          background: hsla(0, 89%, 63%, 0.79);
          color: white;
          font-weight: 500;
        }

        .right a:hover {
          background: hsl(0, 72%, 54%);
        }
      `}</style>
    </nav>
  )
}

export default Header
