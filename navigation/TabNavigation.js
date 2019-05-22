import React from "react";
import {Platform} from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import MovieScreen from "../screens/Movies.js";
import TVScreen from "../screens/TV.js";
import SearchScreen from "../screens/Search.js";
import {BG_COLOR} from "../constants/Colors.js";
import TabBarIcon from "../components/TabBarIcon.js";

const TabNavation = createBottomTabNavigator({
    Movies: { screen: MovieScreen, 
    navigationOptions:{
        tabBarIcon:({focused}) => (
        <TabBarIcon focused={focused} name={prefix() + "-film"} />
    )
    }},
    TV: { screen: TVScreen, 
    navigationOptions:{
        tabBarIcon:({focused}) => (
        <TabBarIcon focused={focused} name={prefix() + "-tv"} />
    )
    }},
    Search: { screen: SearchScreen, 
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
