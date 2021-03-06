import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import RelatedPosts from 'components/Blog/RelatedPosts';
import Post from 'components/Blog/PostList/Item';

const data = fromJS([{}, {}, {}, {}, {}]);

describe('<RelatedPosts />', () => {
  it("shouldn't throw error if data is not specified", () => {
    try {
      shallow(<RelatedPosts />);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should render 4 posts by default', () => {
    const renderedComponent = shallow(<RelatedPosts data={data} />);
    expect(renderedComponent.find(Post).length).toEqual(4);
  });

  it('should render nothing if empty list is provided', () => {
    const renderedComponent = shallow(<RelatedPosts data={fromJS([])} />);
    expect(renderedComponent.type()).toEqual(null);
  });

  it('should render specified number of posts', () => {
    const renderedComponent = shallow(
      <RelatedPosts showItemsNumber={2} data={data} />
    );
    expect(renderedComponent.find(Post).length).toEqual(2);
  });
});
