import React, {Component} from 'react';
import './task-add-form.css';

export default class TaskAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            textTask: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            textTask: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onTaskAdd(this.state.textTask);
        this.setState({
            textTask: ''
        })
    }

    render(){
        return (
            <form className='bottom-panel d-flex'
                  onSubmit={this.onSubmit}>
                <input type='text'
                       placeholder='Add task'
                       className='form-control new-post-label'
                       onChange={this.onValueChange}
                       value={this.state.textTask}
                />
                <button type='submit'
                        className='btn btn-outline-secondary'>
                    Add</button>
            </form>
        )
    }
}