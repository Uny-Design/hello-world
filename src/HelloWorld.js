import React from 'react';

const HelloWorld = ({ children, ...props }) => {
  return <h1 {...props}>{children}</h1>;
};
export { HelloWorld };
