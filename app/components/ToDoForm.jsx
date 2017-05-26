import React from 'react';

var ToDoForm = React.createClass({
     render() {
          return(
               <form>
                    <input type="text" className="form-control input-lg" placeholder="Add todo" />
                    <button className="btn btn-lg btn-success">Mark all as done</button>
               </form>
          );
     }
});

export default ToDoForm;