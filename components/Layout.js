import React from 'react';
import Header from './Header';

const Footer = () => (
  <footer>
    <div className="footerWrapper">
      Made with Typescript and React&nbsp;<span>  by{' '} &nbsp;<a className="footerAnchor" href="http://github.com/yuripramos" target="_blank"> Yuri Ramos</a></span>
    </div>

    <style jsx>
      {`
        footer {
          text-align: center;
          background: #287194;
          width: 100%;
          height: 73px;
          color: #fff;
        }

        .footerAnchor {
          text-decoration: none;
          font-weight: bold;
          padding: 0;
          color: #fff;
          display: inline;
        }

        .footerWrapper {
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          padding-top: 14px;
        }

      `}
    </style>
  </footer>
);

const Layout = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <Footer />
    <style jsx>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400&display=swap');
      `}
    </style>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Balsamiq Sans', cursive;
        background: rgba(0, 0, 0, 0.05);
      }

      a {
        color: #000;
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
        min-height: calc(100vh - 194px);
      }
    `}</style>
  </div>
);

export default Layout;
