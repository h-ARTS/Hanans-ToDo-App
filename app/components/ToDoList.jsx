import React from 'react';

var ToDoList = React.createClass({
     render(){
          var tasks = this.props.tasks.map((task, i) => {
               return (
                    <li key={i}>
                         <div className="checkbox">
                              <label><input type="checkbox" /> {task}</label>
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