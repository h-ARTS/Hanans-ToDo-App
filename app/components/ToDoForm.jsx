import React from 'react';

const ToDoForm = React.createClass({
    getInitialState() {
        return {
            task: ""
        }
    },
    handleSubmit(e) {
        e.preventDefault();

        const task = this.state.task;

        if(task.length > 0) {
            this.props.addTask(task);
            this.state.task = '';
        }

    },
    handleChange(e, attr) {
        const newState = this.state;
        newState[attr] = e.target.value;
        this.setState({
            task: newState.task
        });
    },
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="task" className="form-control input-lg" value={this.state.task} placeholder="Add todo" onChange={(e) => this.handleChange(e, 'task')} />
                </form>
                <button onClick={this.props.completeAll} className="btn btn-lg btn-success">Mark all as done</button>
            </div>
        );
    }
});

export default ToDoForm;