import React, {useState} from 'react';
import {Paper} from '@mui/material';
import {TodoList} from './TodoList';
import {TodoFilter} from './TodoFilter';
import {AddTask} from './AddTask';
import {v1} from 'uuid';

export type TodosType = {
    id: string
    title: string
    completed: boolean
}

export type FilterValue = 'ALL' | 'ACTIVE' | 'COMPLETED'

export const Todo = () => {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [filter, setFilter] = useState<FilterValue>('ALL')
    console.log(todos)

    // Functions
    const addTask = (title: string) => {
        setTodos([{id: v1(), title: title, completed: false}, ...todos])
    }
    const deleteTask = (id: string) => {
        setTodos(todos.filter(task => task.id !== id))
    }
    const changeTaskCompleted = (id: string) => {
        setTodos(todos.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }
    const changeTaskTitle = (id: string, newTitle: string) => {
        setTodos(todos.map(task => task.id === id ? {...task, title: newTitle} : task))
    }
    const getFilteredTodos = (filter: FilterValue) => {
        switch (filter) {
            case 'ACTIVE':
                return todos.filter(task => !task.completed)
            case 'COMPLETED':
                return todos.filter(task => task.completed)
            default:
                return todos
        }
    }
    const filteredTodos = getFilteredTodos(filter)

    return (
        <Paper className={'wrapper'} elevation={10}>
            <AddTask addTask={addTask}/>
            <TodoList todos={filteredTodos}
                      deleteTask={deleteTask}
                      changeTaskCompleted={changeTaskCompleted}
                      changeTaskTitle={changeTaskTitle}
            />
            <TodoFilter setFilter={setFilter}/>
        </Paper>
    );
};

