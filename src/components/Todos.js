import React, { Component } from 'react';




class Todos extends Component {
 
  
  
  render() {

    if(this.props.isloading){
      return <p>Loding....</p>
    }
    console.log(this.props.todos);
    if(Array.isArray(this.props.todos)) { 
      return(
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
            {todo.name} - {todo.username}</li>
          ))}
        </ul>
      );
    }else{
      return <h1>Not data found</h1>
    }
  }
}



export default Todos;
