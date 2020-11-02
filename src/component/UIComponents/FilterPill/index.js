import React from "react";
import styled from 'styled-components';

const Pill = styled.div`
    width: calc(50% - 5px);
    background-color: ${props => props.selected ? '#95C821' : '#6e9c03'};
    color: #000;
    padding: 5px 20px;
    border-radius: 4px;
    cursor: pointer;
`;

const FilterPill = ({ label, onClick, selected }) => (
    <Pill onClick={onClick} selected={selected}>{label}</Pill>
)

export default FilterPill;