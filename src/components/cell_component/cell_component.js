import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CellComponent = props => {
  return (
    <View
      key={props.key}
      style={
        styles.boxViewStyle
      }>

      <Image
        style={
          styles.image
        }
        resizeMode="stretch"
        source={
          { uri: props.image }
        }
      />

      <Text
        style={{
          ...styles.titleText,
        }}>
        {props.title}
      </Text>

      <Text
        style={{
          ...styles.priceText
        }}>
        {props.price}
      </Text>

    </View>

  );
};

export default CellComponent;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  boxViewStyle: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  titleText: {
    fontSize: 14,
    color: '#242A37',
    margin: 5,
  },
  priceText: {
    width: "100%",
    fontSize: 14,
    color: '#242A37',
    textAlign: "right",
    paddingBottom: 10,
    paddingRight: 10
  }
});
