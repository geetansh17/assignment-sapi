import { actions } from "../component/SpaceXLaunches/constants";

const initialState = {
    alertMsg: null,
    launches: null,
    selectedFilters: {}
}

const spaceXLaunches = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_LAUNCHES_SUCCESS:
            return { ...state, launches: action.payload, alertMsg: null } 
        case actions.GET_LAUNCHES_FAIL:
            return { ...state, alertMsg: action.payload }
        case actions.GET_LAUNCHES_REQUESTING: 
            return { ...state, alertMsg: null } 
        case actions.SET_SELECTED_FILTERS: 
            return { ...state, selectedFilters: {...state.selectedFilters, [action.payload.id]: action.payload.value} } 
        default: 
           return state;
    }  
}

export default spaceXLaunches;