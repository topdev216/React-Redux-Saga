// @flow

import * as React from 'react';
import type { Map } from 'immutable';
import cx from 'classnames';
import DotDotDot from 'react-dotdotdot';

import TimeAgo from 'components/TimeAgo';
import Icon from 'components/Icon';
import Link from 'components/Link';

import ChevronLeft from 'images/sprite/chevron-left.svg';
import ChevronRight from 'images/sprite/chevron-right.svg';
import './styles.scss';

type Props = {
  data: Map<string, *>,
  className?: string,
  previousPost: ?Map<string, *>,
  nextPost: ?Map<string, *>,
};

const PostHeader = ({ data, className, previousPost, nextPost }: Props) => {
  if (!data) {
    return null;
  }
  const mergedClassName = cx('postHeader', className);
  return (
    <div className={mergedClassName}>
      {previousPost && (
        <Link
          to={`/blog/${previousPost.getIn(['fields', 'slug'], '')}`}
          className="postHeader__nav postHeader__nav--prev row align-middle hide-for-small-only"
        >
          <div className="postHeader__navIcon shrink column npr">
            <Icon glyph={ChevronLeft} size={10} />
          </div>
          <DotDotDot className="postHeader__navTitle column" clamp={3}>
            {previousPost.getIn(['fields', 'title'])}
          </DotDotDot>
          <div className="postHeader__navImgContainer shrink column np">
            <div
              className="postHeader__navImg"
              style={{
                backgroundImage: `url(${previousPost.getIn(
                  ['fields', 'featuredImage', 'fields', 'file', 'url'],
                  ''
                )})`,
              }}
            />
          </div>
        </Link>
      )}
      <div className="postHeader__content">
        <div className="postHeader__category">
          {data.getIn(['fields', 'category', 0, 'fields', 'title'])}
        </div>
        <h1>{data.getIn(['fields', 'title'])}</h1>
        <p className="postHeader__excerpt">
          {data.getIn(['fields', 'excerpt'])}
        </p>
        <TimeAgo
          className="postHeader__timeAgo"
          data={data.getIn(['fields', 'date'])}
        />
      </div>
      <div
        className="postHeader__inner"
        style={{
          backgroundImage: `url(${data.getIn(
            ['fields', 'featuredImage', 'fields', 'file', 'url'],
            ''
          )})`,
        }}
      />
      {nextPost && (
        <Link
          to={`/blog/${nextPost.getIn(['fields', 'slug'], '')}`}
          className="postHeader__nav postHeader__nav--next row align-middle hide-for-small-only"
        >
          <div className="postHeader__navImgContainer shrink column np">
            <div
              className="postHeader__navImg"
              style={{
                backgroundImage: `url(${nextPost.getIn(
                  ['fields', 'featuredImage', 'fields', 'file', 'url'],
                  ''
                )})`,
              }}
            />
          </div>
          <DotDotDot className="postHeader__navTitle column" clamp={3}>
            {nextPost.getIn(['fields', 'title'])}
          </DotDotDot>
          <div className="postHeader__navIcon shrink column npl">
            <Icon glyph={ChevronRight} size={10} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PostHeader;
