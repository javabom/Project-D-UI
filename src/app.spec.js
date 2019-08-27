import React from "react";
import ReactDOM from "react-dom";

import AppPresenter from "./app.presenter";

describe("[app.presenter.js]", () => {
  test("스모크 테스트", () => {
    const div = document.createElement("div");

    ReactDOM.render(<AppPresenter />, div);
  });
});
