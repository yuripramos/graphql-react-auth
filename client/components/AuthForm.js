import React, { useState } from "react";

export const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form onSubmit={onSubmitHandler} className="col s6">
        <div className="input-field">
          <input
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
