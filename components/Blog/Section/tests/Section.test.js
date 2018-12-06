import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';

import { BLOG_LATEST_KEY, BLOG_LATEST_TITLE } from 'containers/constants';
import BlogSection from 'components/Blog/Section';

describe('<BlogSection />', () => {
  it('should match snapshoot', () => {
    const renderedComponent = shallow(
      <BlogSection
        slug="category"
        title="Category"
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have the title copy', () => {
    const renderedComponent = shallow(
      <BlogSection
        slug="category"
        title="Category"
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent.find('h2').text()).toEqual('Category');
  });

  it('should pass the correct props to PostList for latest category', () => {
    const renderedComponent = shallow(
      <BlogSection
        title={BLOG_LATEST_TITLE}
        slug={BLOG_LATEST_KEY}
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent.find('PostList')).toHaveLength(1);
    expect(renderedComponent.find('PostList').prop('chunkStyle')).toBeFalsy();
    expect(
      renderedComponent.find('PostList').prop('jumbotronStyle')
    ).toBeTruthy();
  });

  it('should pass the correct props to PostList for other category', () => {
    const renderedComponent = shallow(
      <BlogSection
        slug="category"
        title="Category"
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent.find('PostList')).toHaveLength(1);
    expect(renderedComponent.find('PostList').prop('chunkStyle')).toBeTruthy();
    expect(
      renderedComponent.find('PostList').prop('jumbotronStyle')
    ).toBeFalsy();
  });

  it('should have a Load More button when there are still more posts', () => {
    const renderedComponent = shallow(
      <BlogSection
        slug="category"
        title="Category"
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent.find('Button')).toHaveLength(1);
    expect(renderedComponent.find('Button').prop('element')).toEqual('button');
  });

  it('should not render the Load More button when all posts are displayed', () => {
    const renderedComponent = shallow(
      <BlogSection
        slug="category"
        title="Category"
        total={4}
        displayedPosts={new List([new Map(), new Map(), new Map(), new Map()])}
      />
    );
    expect(renderedComponent.find('Button')).toHaveLength(0);
  });
});
