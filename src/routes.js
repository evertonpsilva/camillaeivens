import { createStackNavigator, createAppContainer } from 'react-navigation';


import Main from "../App";
import Loading from "./pages/loading";
import SingUp from "./pages/singup";
import Login from "./pages/login";
import Panel from "./pages/panel";
 
const MainNavigator =  createStackNavigator({
    Main,
    Login,
    Loading,
    SingUp,
    Panel
});
const App = createAppContainer(MainNavigator);
export default App;