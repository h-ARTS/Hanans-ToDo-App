import React from 'react';

const ToDoList = React.createClass({
    getInitialState() {
        return {
            tasks: this.props.tasks,
        }
    },
    render(){
        const tasks = this.props.tasks.map((task, id) => {
            return (
                <li key={id}>
                    <div className="checkbox">
                        <label><input type="checkbox" checked={task.isComplete} onChange={() => this.props.complete(task.id, task.task, task.isComplete)} /> {task.task}</label>
                        <button type="button" className="btn btn-danger btn-xs pull-right">X</button>
                    </div>
                </li>
            )
        });
        return(
            <ul className="list-unstyled">
                {tasks}
            </ul>
        );
    }
});

export default ToDoList;