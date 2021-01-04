import * as React from 'react';
import { storiesOf } from '@storybook/react';

import SignInPage from "../../frontend/ts/pages/SignInPage"

storiesOf('page', module)
  .add('サインイン', () => <SignInPage />);