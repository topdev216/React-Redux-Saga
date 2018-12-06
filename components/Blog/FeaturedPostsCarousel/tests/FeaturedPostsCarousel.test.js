import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';

import FeaturedPostsCarousel from 'components/Blog/FeaturedPostsCarousel';

const data = fromJS([{}, {}, {}]);

describe('<FeaturedPostsCarousel />', () => {
  it("shouldn't throw error if data is not specified", () => {
    try {
      shallow(<FeaturedPostsCarousel />);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should render provided number of slides', () => {
    const renderedComponent = mount(
      <FeaturedPostsCarousel data={data} show={2} />
    );
    expect(
      renderedComponent.find('.blogFeaturedPostsCarousel__control').length
    ).toEqual(2);
  });

  it('should render 3 slides if `show` is not specified', () => {
    const renderedComponent = mount(<FeaturedPostsCarousel data={data} />);
    expect(
      renderedComponent.find('.blogFeaturedPostsCarousel__control').length
    ).toEqual(3);
  });
});
