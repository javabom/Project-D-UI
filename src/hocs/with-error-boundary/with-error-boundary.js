import React, { Component } from "react";

import {
  FallbackCompDefault,
  onErrorDefault
} from "./with-error-boundary.default-params";

const withErrorBoundary = (
  Comp,
  FallbackComp = FallbackCompDefault,
  onError = onErrorDefault
) => {
  class WithErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      this.resetError = this.resetError.bind(this);
    }

    static getDerivedStateFromError(error) {
      return { error };
    }

    render() {
      const {
        props,
        state: { error },
        resetError
      } = this;

      return error ? (
        <FallbackComp
          error={error}
          onReset={resetError}
          originalProps={props}
        />
      ) : (
        <Comp {...props} />
      );
    }

    componentDidCatch(error, info) {
      onError(error, info);
    }

    resetError() {
      this.setState({ error: null });
    }
  }

  const origianlCompName = Comp.displayName || Comp.name;
  WithErrorBoundary.displayName = `withErrorBoundary(${origianlCompName})`;

  return WithErrorBoundary;
};

export default withErrorBoundary;
