import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { isNetworkAvailable } from '../utils/Helpers';
import Spinner from 'react-native-loading-spinner-overlay';
import { isEmpty } from 'lodash';
import { Actions } from 'react-native-router-flux';
import { FlatGrid } from 'react-native-super-grid';
import CellComponent from "../components/cell_component/cell_component";

export default class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      movies: [],
    };
  }

  async componentDidMount() {
    this.getMovieList();
  }

  getMovieList = () => {
    if (isNetworkAvailable()) {
      this.setState({ spinner: !this.state.spinner });
      this.props.actions
        .getMovieList()
        .then(response => {
          this.setState({ movies: response, spinner: false });
        })
        .catch(error => {
          this.setState({ spinner: false });
        });
    } else {
      this.setState({ spinner: false }, () => {
        alert("You don't have internet connection, Please try again!");
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={styles.title}>New Releases</Text>
        <FlatGrid
          itemDimension={90}
          items={this.state.movies}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <CellComponent
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  gridView: {
    flex: 1
  },
  title: {
    padding: 10,
    fontSize: 18
  }
});
