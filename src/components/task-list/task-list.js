import React from 'react';
import TaskListItem from '../task-list-item/task-list-item';
import {ListGroup} from 'reactstrap';

import './task-list.css';

const TaskList = ({tasks, onDelete, onToggleStar, onToggleLike, ...props}) => {

    const elements = tasks.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TaskListItem {...itemProps}
                               onDelete={() => onDelete(id)}
                               onToggleStar={() => onToggleStar(id)}
                               onToggleLike={() => onToggleLike(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
};

export default TaskList;