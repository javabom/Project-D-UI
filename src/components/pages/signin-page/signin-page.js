import { withErrorBoundary } from "../../../hocs";

import SigninPagePresenter from "./signin-page.presenter";

const SigninPage = withErrorBoundary(SigninPagePresenter);

export default SigninPage;
