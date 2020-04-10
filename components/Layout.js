import Header from './Header';

const Footer = () => (
  <footer>
    <p>Made with love with Typescript and React</p>
    <span>
      by{' '}
      <a href="http://github.com/yuripramos" target="_blank">
        Yuri Ramos
      </a>
    </span>
    <style jsx>
      {`
        footer {
          text-align: center;
          background: #287194;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 75px;
          font-family: sans-serif;
          color: #fff;
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        span {
          padding-top: 5px;
          font-size: 12px;
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
        font-family: sans-serif;
        background: rgba(0, 0, 0, 0.05);
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
      }
    `}</style>
  </div>
);

export default Layout;
