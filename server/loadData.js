import { matchRoutes } from 'react-router-config';

export default ({path, store, routes}) => {

    const { dispatch } = store;

    const matchedRoutes = matchRoutes(routes, path);

    const promises = matchedRoutes.map(
        ({ route }) => (route.loadData ? route.loadData(dispatch) : null),
    );

    return promises;
}