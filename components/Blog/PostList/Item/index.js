// @flow

import * as React from 'react';
import cx from 'classnames';
import Dotdotdot from 'react-dotdotdot';
import type { Map } from 'immutable';

import Label from 'components/Label';
import TimeAgo from 'components/TimeAgo';
import Link from 'components/Link';

import './styles.scss';

type Props = {
  data: Map<string, *>,
  className?: string,
  showCategory?: boolean,
};

const PostListItem = ({ data, className, showCategory }: Props) => {
  if (!data) {
    return null;
  }
  const category = data.getIn(['fields', 'category', 0, 'fields', 'title']);
  const mergedClassName = cx('postListItem', className);
  return (
    <div className={mergedClassName}>
      <div
        className="postListItem__image"
        style={{
          backgroundImage: `url(${data.getIn(
            ['fields', 'featuredImage', 'fields', 'file', 'url'],
            ''
          )})`,
        }}
      />
      <div className="postListItem__body">
        {showCategory &&
          category && (
            <Label
              className="postListItem__category"
              style={{
                backgroundColor: `#${data.getIn(
                  ['fields', 'category', 0, 'fields', 'hex'],
                  ''
                )}`,
              }}
              linksTo={`/blog/category/${data.getIn(
                ['fields', 'category', 0, 'fields', 'slug'],
                ''
              )}`}
            >
              {category}
            </Label>
          )}
        <h6 className="postListItem__title">
          <Link
            className="postListItem__link"
            to={`/blog/${data.getIn(['fields', 'slug'], '')}`}
          >
            {data.getIn(['fields', 'title'])}
          </Link>
        </h6>
        <div className="postListItem__dotdotdot">
          <Dotdotdot clamp={2}>
            <p className="postListItem__excerpt">
              {data.getIn(['fields', 'excerpt'])}
            </p>
          </Dotdotdot>
        </div>
        <div className="postListItem__footer">
          <div className="row align-middle">
            <div className="shrink column npr">
              <Link
                className="postListItem__avatar"
                to={`/blog/contributors/${data.getIn(
                  ['fields', 'author', 0, 'fields', 'slug'],
                  ''
                )}`}
                style={{
                  backgroundImage: `url(${data.getIn(
                    [
                      'fields',
                      'author',
                      0,
                      'fields',
                      'profilePhoto',
                      'fields',
                      'file',
                      'url',
                    ],
                    ''
                  )})`,
                }}
              />
            </div>
            <div className="column">
              <Link
                className="postListItem__author"
                to={`/blog/contributors/${data.getIn(
                  ['fields', 'author', 0, 'fields', 'slug'],
                  ''
                )}`}
              >
                {data.getIn(['fields', 'author', 0, 'fields', 'name'])}
              </Link>
            </div>
            <div className="postListItem__time shrink column">
              <TimeAgo data={data.getIn(['fields', 'date'])} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostListItem.defaultProps = {
  showCategory: false,
};

export default PostListItem;
