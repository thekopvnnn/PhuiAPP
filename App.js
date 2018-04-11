/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  renderRow() {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
        <View style={{ flex: 1, alignSelf: "stretch" }} />{" "}
        {/* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
      </View>
    );
  }

  render() {
    const data = [1, 2, 3, 4, 5];
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {data.map(datum => {
          // This will render a row for each data element.
          return this.renderRow();
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
