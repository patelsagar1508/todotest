import React, { Component } from 'react';




export class TodoItem extends Component {
  render() {

    
    return (
      <div style={{ backgroundColor: '#f4f4f4'}}> 
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}


export default TodoItem


===============

import React, { Component } from 'react';

import axios from 'axios';


class Todos extends Component {

  state = {
    data: null,
    isLoading: false,
  };


  componentDidMount() {
    this.setState({ isLoading: true });
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      ;
  }

  render() {
    console.log(this.state.data)
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <ul>
        {this.state.data.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
}



export default Todos;
