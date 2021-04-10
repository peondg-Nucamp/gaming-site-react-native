import React, { Component } from "react";
import { StyleSheet, Text, Card, ScrollView } from "react-native";

const HeaderComponent = (props) => {
  return (
    <Card>
      <Text style={styles.header}>What is All Your Base Games?</Text>
      <Text style={styles.green}>
        All Your Base Games is an independent company that was started in Miami,
        Florida by Mike Adams and Timothy Jameson. They grew up playing video
        games since the early 80's when they both started with the Atari 2600.
        In 2007, they decided to share their nostalgia of games from several
        eras by developing games that incorporate many elements of design both
        new and old. It is their hope that their projects will renew the spirit
        of gamers to embrace and appreciate all things in the world of gaming.
      </Text>
    </Card>
  );
};

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    return (
      <ScrollView>
        <HeaderComponent />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginVertical: 20,
    textAlign: "center",
  },
  green: {
    fontSize: 20,
    color: "#32a883",
    marginHorizontal: 20,
  },
});

export default Home;
