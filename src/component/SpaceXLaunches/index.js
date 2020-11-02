import React from "react";
import { connect } from "react-redux";
import {onClickSelectFilter} from "../../actions/action";
import styled from 'styled-components';
import LaunchCard from "./LaunchCard";
import Filter from "./Filter";

const Container = styled.div`
    grid-area: inherit;
    grid-template-columns: 20% 80%;
    display: grid;
    margin: 0 auto;
    max-width: 1440px;
    @media(max-width: 700px) {
        grid-template-columns: 100%;
    }
`;

const CardContainer = styled.div`
    display: grid;
    margin-left: 20px;
    grid-template-columns: 25% 25% 25% 25%;
    @media(max-width: 700px) {
        margin-left: 0;
        grid-template-columns: 100%;
    }
`;

const Heading = styled.h1`
    margin: 20px auto;
    padding-left: 20px;
    max-width: 1440px;
`;

const SpaceXLaunches = ({ launches, alertMsg, onFilterPillClick, selectedFilters }) => {
   return ( 
    <>
        <Heading>SpaceX Launch Programs</Heading>
        <Container>
            <Filter onFilterPillClick={(filterId, filterValue) => onFilterPillClick(filterId, filterValue)} selectedFilters={selectedFilters}></Filter>
            <CardContainer>
                {launches?.length ? launches.map((launch) => <LaunchCard launch={launch} key={launch.flight_number}></LaunchCard>): 'No Data'}
                {alertMsg && alert(alertMsg) }        
            </CardContainer>
        </Container>
    </>
    )
}

const mapStateToProps = state => ({
    alertMsg: state.spaceXLaunches.alertMsg,
    launches: state.spaceXLaunches.launches,
    selectedFilters: state.spaceXLaunches.selectedFilters
});

const mapDispatchToProps = dispatch => ({
    onFilterPillClick: (id, value) => dispatch(onClickSelectFilter(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXLaunches);