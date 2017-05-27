import React from 'react';

var ToDoForm = React.createClass({
    getInitialState() {
        return {
            task: ""
        }
    },
    handleSubmit(e) {
        e.preventDefault();

        var task = this.state.task;

        if(task.length > 0) {
            this.props.addTask(task);
            this.state.task = '';
        }

        console.log("Its " + this.state.task);

    },
    handleChange(e, attr) {
        var newState = this.state;
        console.log(newState.task);
        newState[attr] = e.target.value;
        this.setState({
            task: newState.task
        });
    },
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="task" className="form-control input-lg" value={this.state.task} placeholder="Add todo" onChange={(e) => this.handleChange(e, 'task')} />
                <button className="btn btn-lg btn-success">Mark all as done</button>
            </form>
        );
    }
});

export default ToDoForm;