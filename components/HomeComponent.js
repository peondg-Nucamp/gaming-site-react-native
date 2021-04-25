import React, { Component } from "react";
import { Button, FlatList } from "react-native";
import { ShadowPropTypesIOS } from "react-native";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, ListItem, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GAME_CARDS } from "./shared/gameCards";

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

// ------------ GAMECARD COMPONENT ----------------------

class GameCard extends Component {
  renderSimilarGameCardItem = ({ item }) => {
    return <SimilarGameCardItem item={item} />;
  };
  render() {
    return (
      <Card containerStyle={styles.card}>
        <Image
          resizeMode={"cover"}
          style={{ width: "100%", height: 200 }}
          source={this.props.image}
        />
        <Text style={styles.cardTitle}>{this.props.name}</Text>
        <Text style={styles.cardText}>{this.props.description}</Text>
        <Text style={styles.cardText}>Similar Games:</Text>
        <FlatList
          data={this.props.similarGames}
          renderItem={this.renderSimilarGameCardItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.cardText}>Coming {this.props.releaseDate}</Text>
      </Card>
    );
  }
}

// ------------ SIMILAR GAME COMPONENT ------------------

function SimilarGameCardItem(props) {
  return (
    <TouchableOpacity>
      <Text style={styles.linkText}>{props.item.name}</Text>
    </TouchableOpacity>
  );
}

// ------------ HOME COMPONENT --------------------------

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCards: GAME_CARDS,
    };
  }
  static navigationOptions = {
    title: "Home",
  };
  renderGameCardItem = ({ item }) => {
    return (
      <GameCard
        image={item.image}
        name={item.name}
        description={item.description}
        releaseDate={item.releaseDate}
        similarGames={item.similarGames}
      />
    );
  };
  render() {
    return (
      <ScrollView>
        <HeaderImageSection />
        <Header />
        <FlatList
          data={this.state.gameCards}
          renderItem={this.renderGameCardItem}
          keyExtractor={(item) => item.id.toString()}
        />
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
  card: {
    backgroundColor: "#6c757d",
  },
  cardTitle: {
    fontSize: 24,
    color: "#32a883",
    marginVertical: 10,
    textAlign: "center",
  },
  cardText: {
    fontSize: 17,
    marginVertical: 10,
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    fontSize: 17,
    color: "#ddba1d",
  },
});

export default Home;
