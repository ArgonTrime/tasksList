import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TaskStatusFilter from '../task-status-filter/task-status-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-form/task-add-form';
import './app.css';
import styled from 'styled-components';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {text:'HTML/CSS', star: false, like: false, id: 1},
                {text:'JavaScript', star: false, like: false, id: 2},
                {text:'React', star: false, like: false, id: 3}
            ],
            search: '',
            filter: 'all'
        };
        this.nextId = 4;
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onToggleStar = this.onToggleStar.bind(this);
        this.searchTask = this.searchTask.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteTask(id) {
        this.setState(({data}) => {
            const index = data.findIndex(task => task.id === id);
            const newTask = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newTask
            }

        });
    }

    addTask(text) {
        if(text != '') {
            const newTask = {
                text,
                star: false,
                id: this.nextId++
            };
            this.setState(({data}) => {
                const newArrTasks = [...data, newTask];

                return {
                    data: newArrTasks
                }
            });
        }
    }

    onToggleStar(id) {
        this.setState(({data}) => {
            const index = data.findIndex(task => task.id === id);
            const oldTask = data[index];
            const newTask = {...oldTask, star: !oldTask.star};
            const newArrTasks = [...data.slice(0, index), newTask, ...data.slice(index + 1)];

            return {
                data: newArrTasks
            }
        });
    }
    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(task => task.id === id);
            const oldTask = data[index];
            const newTask = {...oldTask, like: !oldTask.like};
            const newArrTasks = [...data.slice(0, index), newTask, ...data.slice(index + 1)];

            return {
                data: newArrTasks
            }
        });
    }

    searchTask(tasks, search) {
        if(tasks.length === 0) {
            return tasks
        }
        return tasks.filter(task => {
            return task.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
        })
    }

    onUpdateSearch(search) {
        this.setState({search})
    }

    filterTask(tasks, filter) {
        if(filter === 'like') {
            return tasks.filter(task => task.like)
        } else {
            return tasks
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, search, filter} = this.state;
        const allTasks = data.length;
        const liked = data.filter(task => task.like).length;
        const visibleTasks = this.filterTask( this.searchTask(data, search), filter);

        return (
            <AppBlock>
                <AppHeader allTasks={allTasks}
                           liked={liked}/>
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <TaskStatusFilter filter={filter}
                                      onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <TaskList tasks={visibleTasks}
                          onDelete={this.deleteTask}
                          onToggleStar={this.onToggleStar}
                          onToggleLike={this.onToggleLike}
                />
                <TaskAddForm onTaskAdd={this.addTask}/>
            </AppBlock>
        )
    }
};