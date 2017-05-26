import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoCount from './ToDoCount';
import ListCompleted from './ListCompleted';

var ToDo = React.createClass({
     getDefaultProps() {
          return {
               tasks: [
                    "Take out the trash",
                    "Carwash of my BMW",
                    "Learn React",
                    "Learn Redux"
               ]
          }
     },
     getInitialState() {
          return {
               tasks: []
          }
     },
     componentDidMount() {
          this.setState({
               tasks: this.props.tasks
          });
     },
     render() {
          return(
               <div className="row">
                    <div className="col-md-6">
                         <div className="card-main">
                              <h3 className="text-center">Todos</h3>
                              <ToDoForm />
                              <ToDoList tasks={this.state.tasks} />
                         </div>
                    </div>
                    <div className="col-md-6">
                         <div className="card-main">
                              <h3 className="text-center">Completed</h3>
                              <ListCompleted />     
                         </div>
                    </div>
               </div>
          );
     }
});

export default ToDo;