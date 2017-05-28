import React from 'react';

const ToDoCount = React.createClass({
     render() {
          return(
               <div className="card-footer bg-success">
                    <strong>{this.props.count}</strong> Items Left
               </div>
          );
     }
});

export default ToDoCount;