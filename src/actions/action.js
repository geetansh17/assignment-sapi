import { actions, API_URL, filters } from "../component/SpaceXLaunches/constants"
import { createBrowserHistory } from 'history';
import axios from "axios";

export const getLaunches = ({limit = 100, server = true, ...rest}) => (dispatch) => {

    const params = { 
        limit,
        ...rest
    }

    if(rest[filters.SUCCESSFUL_LANDING]) params[filters.SUCCESSFUL_LANDING] = rest[filters.SUCCESSFUL_LANDING] === 'True' ? true : false;
    if(rest[filters.SUCCESSFUL_LAUNCH]) params[filters.SUCCESSFUL_LAUNCH] = rest[filters.SUCCESSFUL_LAUNCH] === 'True' ? true : false;
    

    if(!server) {
        const history = createBrowserHistory();
        const queryParams = new URLSearchParams(params).toString()
        history.push(`${window.location.pathname}?${queryParams}`)
    }

    dispatch({ type: actions.GET_LAUNCHES_REQUESTING })
    return axios
		.get(API_URL, { params: params })
		.then(res => {
            dispatch({ type: actions.GET_LAUNCHES_SUCCESS, payload: res.data })
		}).catch(err => {
            dispatch({ type: actions.GET_LAUNCHES_FAIL, payload: err })
        })
}

export const onClickSelectFilter = (id, value) => (dispatch, getState) => {
    dispatch({ type: 'SET_SELECTED_FILTERS', payload: { id, value }});
    const selectedFilters = getState().spaceXLaunches.selectedFilters;
    
    dispatch(getLaunches({ server: false, ...selectedFilters, [id]: value }));
}