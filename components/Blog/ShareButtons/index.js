// @flow

import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';

import './styles.scss';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

type Props = {
  shareUrl: string,
  shareTitle: string,
  shareDescription?: string,
  title?: string,
};

const SocialShareButtons = ({
  shareUrl,
  shareTitle,
  shareDescription,
  title,
}: Props) => {
  if (!shareUrl || !shareTitle) return null;
  return (
    <div className="shareButtons">
      <div className="shareButtons__title">{title}</div>
      <div className="shareButtons__items">
        <div className="shareButtons__item">
          <FacebookShareButton
            url={shareUrl}
            quote={shareDescription || shareTitle}
          >
            <FacebookIcon size={30} round />
          </FacebookShareButton>
        </div>

        <div className="shareButtons__item">
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={30} round />
          </TwitterShareButton>
        </div>

        <div className="shareButtons__item">
          <GooglePlusShareButton url={shareUrl}>
            <GooglePlusIcon size={30} round />
          </GooglePlusShareButton>
        </div>

        <div className="shareButtons__item">
          <LinkedinShareButton
            url={shareUrl}
            title={shareTitle}
            description={shareDescription}
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon size={30} round />
          </LinkedinShareButton>
        </div>

        <div className="shareButtons__item">
          <EmailShareButton
            url={shareUrl}
            subject={shareTitle}
            body={`Thought you might be interested in seeing this:\n\n${String(
              shareDescription
            )}\n${shareUrl}`}
          >
            <EmailIcon size={30} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

SocialShareButtons.defaultProps = {
  title: 'Share this article',
};

export default SocialShareButtons;
