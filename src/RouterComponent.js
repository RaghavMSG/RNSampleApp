import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListContainer from './containers/list_container';
import list_container from './containers/list_container';
const ConnectedRouter = connect()(Router);

console.disableYellowBox = true;

const tabIcons = [
  {
    active: require("../img/search_active.png"),
    inactive: require("../img/search_inactive.png")
  },
  {
    active: require("../img/callender_active.png"),
    inactive: require("../img/callender_inactive.png")
  },
  {
    active: require("../img/chat_active.png"),
    inactive: require("../img/chat_inactive.png")
  },
  {
    active: require("../img/profile_active.png"),
    inactive: require("../img/profile_inactive.png")
  }
];

const TabIcon0 = obj => {
  return (
    <Image source={obj.focused ? tabIcons[0].active : tabIcons[0].inactive} />
  );
};

const TabIcon1 = obj => {
  return (
    <Image source={obj.focused ? tabIcons[1].active : tabIcons[1].inactive} />
  );
};

const TabIcon2 = obj => {
  return (
    <Image source={obj.focused ? tabIcons[2].active : tabIcons[2].inactive} />
  );
};

const TabIcon3 = obj => {
  return (
    <Image source={obj.focused ? tabIcons[3].active : tabIcons[3].inactive} />
  );
};


class RouterComponent extends Component {
  render() {
    return (
      <ConnectedRouter>
        <Scene key="root">
          <Scene
            hideNavBar
            initial={true}
            key="tabBar"
            tabs={true}
            tabBarPosition="bottom"
            lazy
            swipeEnabled={false}
            legacy={true}
            showLabel={false}
            headerLayoutPreset="center"
            tabBarStyle={{ backgroundColor: "#FFF" }}
            titleStyle={{ flex: 1, textAlign: "center" }}
          >
            <Scene
              key="movies"
              title="Shop"
              icon={TabIcon0}
              component={ListContainer}
              tabBarStyle={{ backgroundColor: "#FFF" }}
              tabBarOnPress={obj => Actions.movies()}
              navigationBarStyle={{ backgroundColor: 'blue' }}
              titleStyle={
                (style = {
                  width: "100%",
                  color: "white",
                  fontSize: 24,
                  fontFamily: "white", textAlign: "left", paddingLeft: 20
                })
              }
            />
            <Scene
              key="detail"
              title="detail"
              icon={TabIcon1}
              component={ListContainer}
              tabBarStyle={{ backgroundColor: "#FFF" }}
              tabBarOnPress={obj => Actions.detail()}
            />
            <Scene
              key="detail2"
              title="detail2"
              icon={TabIcon2}
              component={ListContainer}
              tabBarStyle={{ backgroundColor: "#FFF" }}
              tabBarOnPress={obj => Actions.detail2()}
            />
            <Scene
              key="detail3"
              title="detail3"
              icon={TabIcon3}
              component={ListContainer}
              tabBarStyle={{ backgroundColor: "#FFF" }}
              tabBarOnPress={obj => Actions.detail3()}
            />
          </Scene>
        </Scene>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps(store) {
  return {};
}

function mapPropsToDispatch(dispatch) {
  return {
    actions: bindActionCreators(dispatch),
  };
}

export default connect(mapStateToProps, mapPropsToDispatch)(RouterComponent);
