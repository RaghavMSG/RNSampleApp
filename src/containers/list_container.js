import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListComponent from '../components/list_component';
import ListDetailComponent from '../components/list_detail_component';
import * as listActions from '../components/actions';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      navigation: {
        state: { routeName },
      },
    } = this.props;
    if (routeName.includes('movies')) {
      return <ListComponent {...this.props} />;
    } else if (routeName.includes('detail')) {
      return null;
    }
    return null;
  }
}
function mapStateToProps(store) {
  return {
    getMovieListResponse: store.listReducer.getMovieListResponse,
    getMovieListError: store.listReducer.getMovieListError,
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...listActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapPropsToDispatch)(ListContainer);
