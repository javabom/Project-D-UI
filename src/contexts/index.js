import React from "react";

const composeProviders = (...providers) => ({ children }) =>
  providers.reduce(
    (children, Provider) => <Provider>{children}</Provider>,
    children
  );

const ContextProvider = composeProviders();

export { ContextProvider };
