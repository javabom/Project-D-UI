import React from "react";
import ReactDOM from "react-dom";

import SigninPagePresenter from "./signin-page.presenter";

describe("[components/pages/signin-page/signin-page.presenter.js]", () => {
  test("스모크 테스트", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SigninPagePresenter />, div);
  });
});
