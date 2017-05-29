import React from 'react';

const ToDoList = React.createClass({
    getInitialState() {
        return {
            tasks: this.props.tasks,
            countTasks: this.props.countTasks
        }
    },
    remove(task) {
        const arr = this.props.tasks;
        const index = arr.findIndex(x => x.id == task.id);
        arr.splice(index, 1);
        this.setState({
            tasks: arr,
            countTasks: arr.length
        })
        this.props.count(arr.length);
    },
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.tasks.map((task, id) => {
                    return (
                        <li key={id}>
                            <div className="checkbox">
                                <label><input type="checkbox" checked={task.isComplete} onChange={() => this.props.complete(task.id, task.task, task.isComplete)} /> {task.task}</label>
                                <button type="button" onClick={() => this.remove({...task})} className="btn btn-danger btn-xs pull-right">X</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
});

export default ToDoList;