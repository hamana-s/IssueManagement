import React from 'react';
import { storiesOf } from '@storybook/react';

import Main from "../../frontend/ts/main"

storiesOf('page', module)
  .add('Main', () => <Main />);