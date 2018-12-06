// @flow

import * as React from 'react';
import Link from 'components/Link';

import './styles.scss';

type Props = {
  closeNavbar: Function,
};

const SecondaryMenu = ({ closeNavbar }: Props) => (
  <ul className="secondaryMenu">
    <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      className="secondaryMenu__item"
      onClick={() => closeNavbar()}
    >
      <Link className="secondaryMenu__link" to="/faq">
        FAQ
      </Link>
    </li>
    <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      className="secondaryMenu__item"
      onClick={() => closeNavbar()}
    >
      <Link className="secondaryMenu__link" to="/advice">
        Advice Forum
      </Link>
    </li>
  </ul>
);

export default SecondaryMenu;
