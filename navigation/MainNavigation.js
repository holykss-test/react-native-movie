import { createStackNavigator, createAppContainer} from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail"
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator({
    Tabs: {screen: TabNavigation, navigationOptions: {header: null}},
    // TabNavigation,
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
          ...headerStyles
        }
      }
}, {
    // initialRouteName: "DetailScreen"
    mode:"float"
});

export default createAppContainer(MainNavigation);