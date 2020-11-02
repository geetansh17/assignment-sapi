export const actionType = {
    GET_LAUNCHES_SUCCESS: 'GET_LAUNCHES_SUCCESS',
    GET_LAUNCHES_FAIL: 'GET_LAUNCHES_FAIL',
    GET_LAUNCHES_REQUESTING: 'GET_LAUNCHES_REQUESTING',
    SET_SELECTED_FILTERS: 'SET_SELECTED_FILTERS'
}

export const FILTERS = [{
    id: 'launch_year',
    label: 'Launch Year',
    values: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
},{
    id: 'successful_launch',
    label: 'Successful Launch',
    values: ['True', 'False']
},{
    id: 'successful_landing',
    label: 'Successful Landing',
    values: ['True', 'False']
}]

export const filterType = {
    LAUNCH_YEAR: 'launch_year',
    SUCCESSFUL_LAUNCH: 'successful_launch',
    SUCCESSFUL_LANDING: 'successful_landing'
}

export const API_URL = 'https://api.spacexdata.com/v3/launches';