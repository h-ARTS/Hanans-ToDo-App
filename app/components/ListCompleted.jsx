import React from 'react';

const generate = (Comp, propName) => (props) => <Comp key={props[propName]} {...props} />;

const TaskItem = (task) => (
    <li>
        <del id={task.id} >{task.task}</del>
        <button type="button" className="btn btn-danger btn-xs pull-right">X</button>
    </li>
)

const Tasks = generate(TaskItem, 'id');

const ListCompleted = React.createClass({
     render() {
          return(
               <ul className="list-unstyled completed">
                    {this.props.completed.map(Tasks)}
               </ul>
          );
     }
});

export default ListCompleted;