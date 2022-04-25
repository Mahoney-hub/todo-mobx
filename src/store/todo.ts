import {makeAutoObservable} from 'mobx';
import {FilterValue, TodosType} from '../components/Todo';
import {v1} from 'uuid';


class Todo {
    todoMobx: TodosType[] = []
    filterMobx: FilterValue = 'ALL'

    constructor() {
        makeAutoObservable(this)
    }

    addTask = (title: string) => {
        this.todoMobx = [{id: v1(), title, completed: false}, ...this.todoMobx]
    }

    deleteTask = (id: string) => {
        this.todoMobx =  this.todoMobx.filter(task => task.id !== id)
    }

    changeTaskCompleted = (id: string) => {
        this.todoMobx = this.todoMobx.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    }

    changeTaskTitle = (id: string, newTitle: string) => {
        this.todoMobx = this.todoMobx.map(task => task.id === id ? {...task, title: newTitle} : task)
    }

    changeFilter = (filterValue: FilterValue) => {
        this.filterMobx = filterValue
    }

}

export default new Todo()