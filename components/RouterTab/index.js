// @flow

import * as React from 'react';
import { Link } from 'react-router';

import Button from 'components/Button';

const Tab = (props: Object) => (
  <Button
    element={Link}
    className="light hollow"
    activeClassName="active"
    {...props}
  >
    {props.children}
  </Button>
);

export default Tab;
