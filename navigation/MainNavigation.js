import { createStackNavigator, createAppContainer} from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/Details"

const MainNavigation = createStackNavigator({
    Tabs: {screen: TabNavigation, navigationOptions: {header: null}},
    // TabNavigation,
    Details:DetailsScreen
}, {
    // initialRouteName: "DetailsScreen"
    mode:"float"
});

export default createAppContainer(MainNavigation);