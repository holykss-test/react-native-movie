import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import MovieScreen from "../screens/Movies.js";
import TVScreen from "../screens/TV.js";
import SearchScreen from "../screens/Search.js";

const TabNavation = createBottomTabNavigator({
    MovieScreen,
    TVScreen,
    SearchScreen
});

export default createAppContainer(TabNavation);