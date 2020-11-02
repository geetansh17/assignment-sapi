import { actionType, API_URL, filterType } from "./constants"
import { createBrowserHistory } from 'history';
import axios from "axios";

export const getLaunches = ({limit = 100, isServer = true, ...rest}) => (dispatch) => {

    const apiParams = { 
        limit,
        ...rest
    }

    if(rest[filterType.SUCCESSFUL_LANDING]) apiParams[filterType.SUCCESSFUL_LANDING] = rest[filterType.SUCCESSFUL_LANDING] === 'True' ? true : false;
    if(rest[filterType.SUCCESSFUL_LAUNCH]) apiParams[filterType.SUCCESSFUL_LAUNCH] = rest[filterType.SUCCESSFUL_LAUNCH] === 'True' ? true : false;
    

    if(!isServer) {
        const history = createBrowserHistory();
        const queryParams = new URLSearchParams(apiParams).toString()
        history.push(`${window.location.pathname}?${queryParams}`)
    }

    dispatch({ type: actionType.GET_LAUNCHES_REQUESTING })
    return axios
		.get(API_URL, { params: apiParams })
		.then(res => {
            dispatch({ type: actionType.GET_LAUNCHES_SUCCESS, payload: res.data })
		}).catch(err => {
            dispatch({ type: actionType.GET_LAUNCHES_FAIL, payload: err })
        })
}

export const onClickSelectFilter = (id, value) => (dispatch, getState) => {
    dispatch({ type: 'SET_SELECTED_FILTERS', payload: { id, value }});
    const selectedFilters = getState().spaceXLaunches.selectedFilters;
    
    dispatch(getLaunches({ isServer: false, ...selectedFilters, [id]: value }));
}