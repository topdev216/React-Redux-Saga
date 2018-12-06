import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from 'createStore';

import App from '../index';

describe('<App />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const renderedComponent = shallow(
      <Provider store={store}>
        <App>{children}</App>
      </Provider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
