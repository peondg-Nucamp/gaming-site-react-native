import React, { Component } from "react";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from "./HomeComponent";
import Blog from "./BlogComponent";
import ContactUs from "./ContactUsComponent";
import OurTeam from "./OurTeamComponent";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

// -------------------  STACK NAVIGATORS ---------------------------

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#292b2c",
      },
      headerTintColor: "#32a883",
      headerTitleStyle: {
        color: "#32a883",
      },
      headerLeft: (
        <Icon
          name="globe"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const OurTeamNavigator = createStackNavigator(
  {
    OurTeam: { screen: OurTeam },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#292b2c",
      },
      headerTintColor: "#32a883",
      headerTitleStyle: {
        color: "#32a883",
      },
      headerLeft: (
        <Icon
          name="users"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactUsNavigator = createStackNavigator(
  {
    ContactUs: { screen: ContactUs },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#292b2c",
      },
      headerTintColor: "#32a883",
      headerTitleStyle: {
        color: "#32a883",
      },
      headerLeft: (
        <Icon
          name="phone"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: { screen: Blog },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#292b2c",
      },
      headerTintColor: "#32a883",
      headerTitleStyle: {
        color: "#32a883",
      },
      headerLeft: (
        <Icon
          name="pencil"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

// -------------------  DRAWER NAVIGATOR ---------------------------

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="globe" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    OurTeam: {
      screen: OurTeamNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="users" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    ContactUs: {
      screen: ContactUsNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="phone" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Blog: {
      screen: BlogNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="pencil" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#292b2c",
    contentOptions: {
      activeTintColor: "#ddba1d",
      inactiveTintColor: "#32a883",
    },
  }
);

const AppNavigator = createAppContainer(MainNavigator);

// -------------------  MAIN COMPONENT ---------------------------

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#32a883",
    fontSize: 24,
  },
});

export default Main;
