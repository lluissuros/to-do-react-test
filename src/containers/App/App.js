import React, { Component } from 'react';
import ItemForm from '../../components/ItemForm';
import TodosList from '../../components/TodosList';
import Layout from '../../components/Layout';

class App extends Component {

    state = {
        todos: []
    };

    generateUniqueId() {
        return Date.now() + Math.random();
    }

    addTodo(item) {
        console.log(item);
        this.setState({
            todos: [
                {id: this.generateUniqueId(), value:item},
                ...this.state.todos
            ]
        });
    }
  render() {
    return (
      <div>
        <Layout>
            <ItemForm onSubmit={(item) => this.addTodo(item)} />
            <TodosList todos={this.state.todos} />
        </Layout>
      </div>
    );
  }
}

export default App;
