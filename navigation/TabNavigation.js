import React from "react";
import {Platform} from "react-native";

import MovieScreen from "../screens/Movies.js";
import TVScreen from "../screens/TV.js";
import SearchScreen from "../screens/Search.js";
import {BG_COLOR} from "../constants/Colors.js";
import TabBarIcon from "../components/TabBarIcon.js";
import { createStack } from "./config";

import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
  } from "react-navigation";

const TabNavation = createBottomTabNavigator({
    Movies: {
         screen: createStack(MovieScreen, "Movies"), 
    navigationOptions:{
        tabBarIcon:({focused}) => (
        <TabBarIcon focused={focused} name={prefix() + "-film"} />
    )
    }},
    TV: { screen: createStack(TVScreen, "TV"), 
    navigationOptions:{
        tabBarIcon:({focused}) => (
        <TabBarIcon focused={focused} name={prefix() + "-tv"} />
    )
    }},
    Search: { screen: createStack(SearchScreen, "Search"), 
    navigationOptions:{
        tabBarIcon:({focused}) => (
        <TabBarIcon focused={focused} name={prefix() + "-search"} />
    )
    }}
}, {
    tabBarOptions: {
        showLabel:true,
        style:{
            backgroundColor: BG_COLOR
        }
    }
});

export default createAppContainer(TabNavation);

function prefix() {
    return (Platform.OS == "ios" ? "ios" : "md");
}
