import React from 'react';
import { shallow } from 'enzyme';
import ShareButtons from 'components/Blog/ShareButtons';

const shareUrl = 'http://example.com';
const shareTitle = 'Hooray!';

describe('<ShareButtons />', () => {
  it('default title should be `Share this article`', () => {
    const renderedComponent = shallow(
      <ShareButtons shareUrl={shareUrl} shareTitle={shareTitle} />
    );
    expect(renderedComponent.contains('Share this article')).toEqual(true);
  });

  it('should render provided title', () => {
    const renderedComponent = shallow(
      <ShareButtons shareUrl={shareUrl} shareTitle={shareTitle} title="Hey" />
    );
    expect(renderedComponent.contains('Hey')).toEqual(true);
  });

  it('should render nothing if `shareUrl` is not specified', () => {
    const renderedComponent = shallow(<ShareButtons shareTitle={shareTitle} />);
    expect(renderedComponent.type()).toEqual(null);
  });

  it('should render nothing if `shareTitle` is not specified', () => {
    const renderedComponent = shallow(<ShareButtons shareUrl={shareUrl} />);
    expect(renderedComponent.type()).toEqual(null);
  });
});
