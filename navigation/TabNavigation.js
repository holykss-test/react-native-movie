import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import MovieScreen from "../screens/Movies.js";
import TVScreen from "../screens/TV.js";
import SearchScreen from "../screens/Search.js";
import BG_COLOR from "../constants/Colors.js";

const TabNavation = createBottomTabNavigator({
    Movies: MovieScreen,
    TV: TVScreen,
    Search: SearchScreen
}, {
    tabBarOptions: {
        showLabel:false,
        style:{
            backgroundColor:BG_COLOR
        }
    }
});

export default createAppContainer(TabNavation);