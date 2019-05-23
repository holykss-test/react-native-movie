import { createStackNavigator, createAppContainer} from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/Details"

const MainNavigation = createStackNavigator({
    // Tabs: {screen: TabNavigation, navigationOptions: {header: null}},
    TabNavigation,
    DetailsScreen
});

export default createAppContainer(MainNavigation);