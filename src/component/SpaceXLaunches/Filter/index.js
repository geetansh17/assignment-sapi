import React from "react";
import styled from 'styled-components';
import { FILTERS } from "../constants";
import FilterPill from "../../UIComponents/FilterPill";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px;
    margin: 0 20px;
    margin-bottom: 25px;
    height: fit-content;
`;

const Heading = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const Label = styled.div`
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #4C4C4C;
    padding: 10px 0;
    margin-bottom: 10px;
`;

const ValueRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    justify-content: space-between;

    span {
        display: inline-block;
        vertical-align: top;
    }
`;

const Filter = ({ onFilterPillClick, selectedFilters }) => (
    <Container>
        <Heading>Filters</Heading>
        {FILTERS.map((filter, idx) => (
            <div key={idx}>
                <Label>{filter.label}</Label>
                {filter.values.reduce((valueRows, key, index) => 
                    (index % 2 == 0 ? valueRows.push([key]) : valueRows[valueRows.length-1].push(key)) && valueRows, [])
                    .map((valueRow, index) => (
                        <ValueRow key={index}>
                            {valueRow.map((value, id) => (
                                <FilterPill key={id} selected={selectedFilters[filter.id] ? selectedFilters[filter.id] === value : false} label={value} onClick={() => onFilterPillClick(filter.id, value)}/>
                            ))}
                        </ValueRow>
                ))}
            </div>
        ))}
    </Container>
)

export default Filter;