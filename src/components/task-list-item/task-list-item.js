import React, {Component} from 'react';
import './task-list-item.css';

export default class TaskListItem extends Component{
    render() {
        const {text, onDelete, onToggleStar, onToggleLike, star, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (star) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className='app-list-item-label'
                      onClick={onToggleLike}>
                    {text}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button'
                            className='btn-star btn-sm'
                            onClick={onToggleStar}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button'
                            className='btn-trash btn-sm'
                            onClick={onDelete}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-check'></i>
                </div>
            </div>
        )
    }
}