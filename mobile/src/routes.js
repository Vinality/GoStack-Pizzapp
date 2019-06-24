import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Types from './pages/Types';
import Sizes from './pages/Sizes';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    Products,
    Types,
    Sizes,
    Orders,
    Cart
  })
)

export default Routes;
