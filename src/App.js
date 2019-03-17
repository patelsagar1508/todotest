import React, { Component } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
/*import './App.css';*/

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => this.setState({
        todos: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }



  render() {
   

   

    return (
      
      <div className="App">
        
        <Todos  todos={this.state.todos} isLoading={this.state.isLoading}/>
        
      </div>
    );
  }
}

export default App;
