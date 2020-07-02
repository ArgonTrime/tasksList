import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allTasks}) => {
    return (
        <Header>
            <h1>Tasks List</h1>
            <h2>{allTasks} task, {liked} completed</h2>
        </Header>
    )
};

export default AppHeader;