import React from "react";
import ReactDOM from "react-dom";

import {
  FallbackCompDefault,
  onErrorDefault
} from "./with-error-boundary.default-params";

describe("[hocs/with-error-boundary/with-error-boundary.default-params.js]", () => {
  describe("[FallbackCompDefault]", () => {
    test("스모크 테스트", () => {
      const div = document.createElement("div");
      ReactDOM.render(<FallbackCompDefault />, div);
    });
  });

  describe("[onErrorDefault]", () => {
    test("항상 아무 일도 하지 않고 undefined 반환", () => {
      const error = new Error("test");
      const info = { componentStack: "" };

      const received = onErrorDefault(error, info);

      expect(received).toBeUndefined();
    });
  });
});
