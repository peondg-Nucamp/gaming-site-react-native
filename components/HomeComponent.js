import React, { Component } from "react";
import {
  Alert,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Card, ListItem, Text } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    gameCards: state.gameCards,
    similarGames: state.similarGames,
  };
};

// ------------- GAME MODAL COMPONENT ----------------

class GameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <Card>
              <Text style={styles.cardTitleSimilarGameText}>
                {this.props.item.name}
              </Text>
              <View
                style={{
                  borderBottomColor: "#32a883",
                  borderBottomWidth: 1,
                  marginBottom: 15,
                }}
              />
              <Image
                resizeMode={"cover"}
                style={{ width: "100%", height: 200 }}
                source={{ uri: baseUrl + this.props.item.image }}
              />
              <Text style={styles.descriptionText}>
                {this.props.item.description}
              </Text>
              <View
                style={{
                  borderBottomColor: "#32a883",
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
              />
              <Text style={styles.dateText}>
                Source: {this.props.item.sources}
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </Card>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.setModalVisible(!this.state.modalVisible)}
        >
          <Text style={styles.linkText}>{this.props.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
        source={{ uri: baseUrl + "images/background-image.jpg" }}
      />
    </View>
  );
}

function renderSimilarGameCardItem({ item }) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

// ------------ GAMECARD COMPONENT ----------------------
function GameCard(props) {
  return (
    <Card containerStyle={styles.card}>
      <Image
        resizeMode={"cover"}
        style={{ width: "100%", height: 200 }}
        source={{ uri: baseUrl + props.item.image }}
      />
      <Text style={styles.cardTitleText}>{props.item.name}</Text>
      <Text style={styles.descriptionText}>{props.item.description}</Text>
      <Text style={styles.similarGameText}>Similar Games:</Text>
      {/* <FlatList
        data={props.similarGames.similarGames}
        renderItem={renderSimilarGameCardItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      <Text style={styles.dateText}>Coming {props.item.releaseDate}</Text>
    </Card>
  );
}

// ------------ HOME COMPONENT --------------------------

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    const renderGameCardItem = ({ item }) => {
      return <GameCard item={item} />;
    };
    if (this.props.gameCards.isLoading) {
      return <Loading />;
    }
    if (this.props.gameCards.errMess) {
      return (
        <View>
          <Text>{this.props.errMess}</Text>
        </View>
      );
    }
    return (
      <ScrollView>
        <HeaderImageSection />
        <Header />
        <FlatList
          data={this.props.gameCards.gameCards}
          renderItem={renderGameCardItem}
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
  cardTitleText: {
    fontSize: 24,
    color: "#32a883",
    marginVertical: 10,
    textAlign: "center",
  },
  cardTitleSimilarGameText: {
    fontSize: 24,
    color: "#32a883",
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 2,
    marginBottom: 8,
  },
  similarGameText: {
    fontSize: 18,
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    backgroundColor: "#ddba1d",
    padding: 8,
  },
  dateText: {
    fontSize: 17,
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    padding: 10,
    width: 100,
    alignSelf: "flex-end",
  },
  buttonClose: {
    backgroundColor: "#32a883",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default connect(mapStateToProps)(Home);
