// @flow

import * as React from 'react';
import cx from 'classnames';
import type { Map } from 'immutable';

import PostListItem from 'components/Blog/PostList/Item';
import Preloader from 'components/Preloader';

import './styles.scss';

type Props = {
  data: Map<string, *>,
  jumbotronStyle?: boolean,
  chunkStyle?: boolean,
  showCategory?: boolean,
  noPostsMessage?: string,
  isLoading?: boolean,
};

const PostList = ({
  data,
  jumbotronStyle,
  chunkStyle,
  showCategory,
  noPostsMessage,
  isLoading,
}: Props) => {
  if (isLoading) {
    return <Preloader />;
  }
  if (!data) {
    return null;
  }
  if (!data.size) {
    return (
      <div className="text-center pt-xl pb-xl">
        <h3 className="nm">{noPostsMessage}</h3>
      </div>
    );
  }
  if (jumbotronStyle)
    return (
      <div className="postList row">
        {data.entrySeq().map(([key, item]) => {
          if (Number(key) > 0) return null;
          return (
            <div key={key} className="small-12 large-8 column">
              <PostListItem
                showCategory={showCategory}
                data={item}
                className="first"
              />
            </div>
          );
        })}
        <div className="small-12 large-4 column">
          {data.entrySeq().map(([key, item]) => {
            if (Number(key) > 2 || Number(key) === 0) return null;
            return (
              <PostListItem key={key} showCategory={showCategory} data={item} />
            );
          })}
        </div>

        {data.entrySeq().map(([key, item]) => {
          if (Number(key) < 3) return null;
          return (
            <div className="small-12 medium-6 large-4 column" key={key}>
              <PostListItem showCategory={showCategory} data={item} />
            </div>
          );
        })}
      </div>
    );

  if (chunkStyle)
    return (
      <div className="postList row">
        {data.entrySeq().map(([key, item]) => {
          const index = Number(key);
          const className = cx('small-12', 'medium-6', 'column', {
            'large-4': index > 0,
            'large-8': index === 0,
            second: index === 0,
          });

          return (
            <div className={className} key={key}>
              <PostListItem showCategory={showCategory} data={item} />
            </div>
          );
        })}
      </div>
    );

  return (
    <div className="postList row">
      {data.entrySeq().map(([key, item]) => (
        <div className="small-12 medium-6 large-4 column" key={key}>
          <PostListItem showCategory={showCategory} data={item} />
        </div>
      ))}
    </div>
  );
};

PostList.defaultProps = {
  jumbotronStyle: false,
  showCategory: false,
  noPostsMessage: 'No posts here',
  isLoading: false,
};

export default PostList;
