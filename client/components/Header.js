import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";
import { Link } from "react-router-dom";

const Header = ({ data, mutate }) => {
  const onLogoutClick = () => {
    mutate({
      refetchQueries: [{ query }]
    });
  };
  const renderButtons = () => {
    const { loading, user } = data;
    if (loading) {
      return <div />;
    }
    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick()}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(graphql(query)(Header));
