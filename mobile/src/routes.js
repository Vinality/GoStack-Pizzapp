import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup
  })
)

export default Routes;
