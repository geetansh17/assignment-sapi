import Home from '../containers/Home/index';
import {getLaunches} from '../actions/action';

const Routes = [
    {
      path: '/',
      exact: true,
      component: Home,
      loadData: (dispatch) => dispatch(getLaunches({}))
    }
];

export default Routes;