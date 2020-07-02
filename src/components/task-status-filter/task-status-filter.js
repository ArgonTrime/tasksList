import React, {Component} from 'react';
import './task-status-filter.css';

export default class TaskStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {
                name: 'all',
                text: 'All'
            },
            {
                name: 'like',
                text: 'Completed'
            }
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, text}) => {
           const {filter, onFilterSelect} = this.props;
           const active = filter === name;
           const activeClassCheck = active ? 'btn-info' : 'btn-outline-secondary';

           return (
               <button
                   type='button'
                   className={`btn ${activeClassCheck}`}
                   key={name}
                   onClick={() => onFilterSelect(name)}
               >{text}</button>
           )
        });

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
};