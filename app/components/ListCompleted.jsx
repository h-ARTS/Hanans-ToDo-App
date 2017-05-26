import React from 'react';

var ListCompleted = React.createClass({
     render() {
          return(
               <ul className="list-unstyled completed">
                    <li>
                         <del>Washing the clothes</del>
                         <button type="button" className="btn btn-danger btn-xs pull-right">X</button>
                    </li>
               </ul>
          );
     }
});

export default ListCompleted;