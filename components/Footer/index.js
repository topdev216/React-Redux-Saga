// @flow

import * as React from 'react';
import { Link } from 'react-router';
import { generate } from 'shortid';
import moment from 'moment';

import Icon from 'components/Icon';
import Logo from 'images/sprite/logo.svg';
import InstagramIcon from 'images/sprite/instagram.svg';
import TwitterIcon from 'images/sprite/twitter.svg';
import FacebookIcon from 'images/sprite/facebook.svg';
import './styles.scss';

const socialLinks = [
  {
    href: 'https://www.instagram.com/liftcanada',
    glyph: InstagramIcon,
  },
  {
    href: 'https://www.twitter.com/liftcannabis',
    glyph: TwitterIcon,
  },
  {
    href: 'https://www.facebook.com/liftcann',
    glyph: FacebookIcon,
  },
];

const currentYear = moment().format('YYYY');

const Footer = () => (
  <div className="footer">
    <div className="footer__top">
      <div className="row">
        <div className="footer__logoContainer small-12 medium-shrink column">
          <div className="row">
            <div className="column medium-12">
              <Icon
                glyph={Logo}
                width={48}
                height={30}
                className="footer__logo"
              />
            </div>
            <div className="column medium-12">
              {socialLinks.map(({ href, glyph }) => (
                <a // eslint-disable-line jsx-a11y/href-no-hash
                  className="footer__socialItem"
                  key={generate()}
                  href={href}
                  target="_blank"
                >
                  <Icon glyph={glyph} width={18} height={18} fill={'white'} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="row footer__menuContainer">
            <div className="small-6 medium-shrink column">
              <ul className="footer__menu">
                <li className="footer__menuTitle">Products</li>
                <li>
                  <Link className="footer__menuItem" to="/strains">
                    Explore Strains
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/oils">
                    Explore Oils
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/products">
                    Buy Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="small-6 medium-shrink column">
              <ul className="footer__menu">
                <li className="footer__menuTitle">Businesses</li>
                <li>
                  <Link className="footer__menuItem" to="/clinics">
                    Clinics
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/producers">
                    Producers
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/dispensaries">
                    Dispensaries
                  </Link>
                </li>
                <li>
                  <a
                    className="footer__menuItem"
                    href="https://events.lift.co"
                    target="_blank"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="small-6 medium-shrink column">
              <ul className="footer__menu">
                <li className="footer__menuTitle">Features</li>
                <li>
                  <Link className="footer__menuItem" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/rewards">
                    Lift Rewards
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/advice">
                    Advice Forum
                  </Link>
                </li>
                <li>
                  <Link className="footer__menuItem" to="/patient-guide">
                    Patient Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div className="small-6 medium-shrink column">
              <ul className="footer__menu">
                <li className="footer__menuTitle">Company</li>
                <li>
                  <Link className="footer__menuItem" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    className="footer__menuItem"
                    href="https://jobs.lift.co"
                    target="_blank"
                  >
                    Jobs
                  </a>
                </li>
                <li className="footer__menuTitle mt-md">For Business</li>
                <li>
                  <a className="footer__menuItem" href="https://lp.lift.co">
                    LP Login/Sign Up
                  </a>
                </li>
              </ul>
            </div>

            <div className="small-6 medium-shrink column show-for-small-only">
              <ul className="footer__menu">
                <li className="footer__menuButton footer__menuButton--white">
                  <Link className="c-secondary" to="/register">
                    Join
                  </Link>
                </li>
              </ul>
            </div>

            <div className="small-6 medium-shrink column show-for-small-only">
              <ul className="footer__menu">
                <li className="footer__menuButton">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>

            <div className="small-12 medium-6 medium-shrink column hide-for-small-only">
              <ul className="footer__menu">
                <li className="footer__menuButton footer__menuButton--white">
                  <Link className="" to="/register">
                    Join
                  </Link>
                </li>
                <li className="footer__menuButton">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="row">
        <div className="footer__copy column">
          <a
            href="tel:+18006811593"
            className="footer__copy--item c-white td-n"
          >
            1 800 681 1593
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a
            href="mailto:hello@lift.co"
            className="footer__copy--item c-white td-n"
          >
            hello@lift.co
          </a>
          <span>&nbsp;|&nbsp;</span>
          <span className="footer__copy--item">
            <Link className="footer__terms" to="/privacy">
              Privacy Policy
            </Link>
          </span>
        </div>
        <div className="footer__copy medium-shrink column small-12">
          <span className="footer__companyName">
            &#64;{currentYear} Lift Co. Ltd.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
