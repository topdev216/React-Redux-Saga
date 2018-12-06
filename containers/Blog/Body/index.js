// @flow

import * as React from 'react';
import type { List, Map } from 'immutable';
import { connect } from 'react-redux';
import cx from 'classnames';

import PageMenu from 'components/PageMenu';
import Preloader from 'components/Preloader';

import { requestCategories } from 'pages/Blog/sagas';

import './styles.scss';

type Props = {
  children?: any,
  categories: List<Map<string, *>>,
  isLoading: boolean,
  location: Object,
  requestCategories: Function,
  hasBackground: boolean,
};

class BlogBody extends React.Component<Props> {
  static defaultProps = {
    hasBackground: false,
  };

  componentDidMount() {
    if (!this.props.categories) this.props.requestCategories();
  }
  render() {
    const {
      children,
      categories,
      isLoading,
      location,
      hasBackground,
    } = this.props;
    const className = cx({ blogBody: hasBackground });
    return isLoading ? (
      <Preloader />
    ) : (
      <div className={className}>
        <PageMenu
          data={categories}
          slugPath={['fields', 'slug']}
          linkPrefix="/blog/category/"
          titlePath={['fields', 'title']}
          location={location}
          mobileDropdownLabel="Category"
          hasDropdown
        />
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.getIn(['blog', 'categories', 'isLoading']),
  categories: state.getIn(['blog', 'categories', 'items']),
});

const mapDispatchToProps = dispatch => ({
  requestCategories: () => dispatch(requestCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
