import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoCount from './ToDoCount';
import ListCompleted from './ListCompleted';

const ToDo = React.createClass({
     getDefaultProps() {
          return {
               tasks: [
                    {
                        id: 1,
                        task: "Take out the trash",
                        isComplete: false
                    },
                    {
                        id: 2,
                        task: "Carwash of my BMW",
                        isComplete: false
                    },
                    {
                        id: 3,
                        task: "Learn React",
                        isComplete: false
                    },
                    {
                        id: 4,
                        task: "Learn Redux",
                        isComplete: false
                    }
               ]
          }
     },
     propTypes: {
         tasks: React.PropTypes.array.isRequired
     },
     getInitialState() {
          return {
               tasks: [],
               completedTasks: []
          }
     },
     componentDidMount() {
          this.setState({
               tasks: this.props.tasks
          });
     },
     taskHandler(task) {
        const newTask = {
            id: Math.floor(Math.random() * 999) + 1,
            task: task,
        };
        this.setState({
            tasks: this.state.tasks.concat(newTask)
        });
     },
     taskComplete(id,task,isComplete) {
         const todo = {
             id: id,
             task: task,
             isComplete: !isComplete
         }
        this.setState({
                tasks: this.state.tasks.filter((el) => id !== el.id),
                completedTasks: this.state.completedTasks.concat(todo)
            }
        );
     },
     completeAll() {
        const completeAll = this.state.tasks.map((task) => {
            return {
                id: task.id,
                task: task.task,
                isComplete: !task.isComplete
            }
        });
        this.setState({
            tasks: [],
            completedTasks: this.state.completedTasks.concat(completeAll)
        });
     },
     updateList(items) {
        this.setState({
            completedTasks: items
        })
     },
     count(int) {
        this.setState({
            countTasks: int
        })
     },
     render() {
          return(
               <div className="row">
                    <div className="col-md-6">
                         <div className="card-main">
                              <h3 className="text-center">Todos</h3>
                              <ToDoForm addTask={this.taskHandler} completeAll={this.completeAll}/>
                              <ToDoList tasks={this.state.tasks} complete={this.taskComplete} count={this.count} />
                         </div>
                        <ToDoCount count={this.state.tasks.length} />   
                    </div>
                    <div className="col-md-6">
                         <div className="card-main">
                              <h3 className="text-center">Completed</h3>
                              <ListCompleted completed={this.state.completedTasks} updateList={this.updateList} /> 
                         </div>
                    </div>
               </div>
          );
     }
});

export default ToDo;