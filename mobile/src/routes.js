import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    Products
  })
)

export default Routes;
