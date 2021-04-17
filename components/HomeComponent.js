import React, { Component } from "react";
import { Button } from "react-native";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

// ------------ Header - Function component only used on Home Page

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreTextShowing: false,
      textButtonClicked: false,
    };
  }
  toggleText() {
    this.setState({
      moreTextShowing: !this.state.moreTextShowing,
      textButtonClicked: !this.state.textButtonClicked,
    });
  }
  render() {
    return (
      <Card>
        <Text style={styles.header}>What is All Your Base Games?</Text>
        <Text style={styles.green}>
          All Your Base Games is an independent company that was started in
          Miami, Florida by Mike Adams and Timothy Jameson. They grew up playing
          video games since the early 80's when they both started with the Atari
          2600.
        </Text>
        <View style={styles.readMoreButton}>
          <TouchableOpacity onPress={() => this.toggleText()}>
            <Text style={{ fontSize: 16, color: "blue" }}>
              {this.state.textButtonClicked ? "Show Less..." : "Read More..."}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.moreTextShowing && (
            <Text style={styles.green}>
              In 2007, they decided to share their nostalgia of games from
              several eras by developing games that incorporate many elements of
              design both new and old. It is their hope that their projects will
              renew the spirit of gamers to embrace and appreciate all things in
              the world of gaming.
            </Text>
          )}
        </View>
      </Card>
    );
  }
}

// --------------- HeaderImageSection - Functional Component
function HeaderImageSection() {
  return (
    <View>
      <Image
        resizeMode={"cover"}
        style={{ width: "100%", height: 200 }}
        source={require("./images/background-image.jpg")}
      />
    </View>
  );
}

// ------------ HOME COMPONENT --------------------------

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    return (
      <ScrollView>
        <HeaderImageSection />
        <Header />
      </ScrollView>
    );
  }
}

// --------------- STYLES --------------------

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 5,
    textAlign: "center",
  },
  green: {
    fontSize: 15,
    color: "#32a883",
    marginHorizontal: 20,
  },
  readMoreButton: {
    alignSelf: "center",
  },
});

export default Home;
