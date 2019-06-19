import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Types from './pages/Types';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    Products,
    Types
  })
)

export default Routes;
