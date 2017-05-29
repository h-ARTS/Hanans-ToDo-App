import React from 'react';

const ListCompleted = React.createClass({
    getInitialState() {
        return {
            completedTasks: this.props.completed
        }
    },
    remove(task) {
        const arr = this.props.completed;
        const index = arr.findIndex(x => x.id == task.id);
        arr.splice(index, 1);
        this.setState({
            completedTasks: arr
        });
        this.props.updateList(arr);
    },
    render() {
        return(
            <ul className="list-unstyled completed">
                {this.props.completed.map((task) => {
                    return(
                        <li key={task.id}>
                            <del>{task.task}</del>
                            <button type="button" onClick={() => this.remove({...task})} className="btn btn-danger btn-xs pull-right">X</button>
                        </li>
                    )
                })}
            </ul>
        );
    }
});

export default ListCompleted;