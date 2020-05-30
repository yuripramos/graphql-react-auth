import React from 'react';

export const ErrorMsg = ({ error }) => {
  return (
    <div className="wrapper">
      {error.toString()}
      <style jsx>
        {`
          .wrapper {
            border: solid 1px red;
            padding: 10px 3px;
            border-radius: 5px;
            margin: 10px 0px;
          }
        `}
      </style>
    </div>
  );
};
