import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import PostHeader from 'components/Blog/PostHeader';

describe('<PostHeader />', () => {
  it("shouldn't throw error if data is not specified", () => {
    try {
      shallow(<PostHeader />);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should apply given className', () => {
    const renderedComponent = shallow(
      <PostHeader data={fromJS({})} className="hey" />
    );
    expect(renderedComponent.hasClass('hey')).toEqual(true);
  });
});
