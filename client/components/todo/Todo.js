import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTodos } from '../../actions/index.js';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.state.todos.data || [],
      textInput: ''
    }
  }

  componentWillMount() {
    this.getTodos();
  }

  handleChange() {
    let todo = document.getElementById('todo-input').value;

    this.setState({
      textInput: todo
    });
  }

  addTodo(todo) {
    //Sets text input back to blank
    document.getElementById('todo-input').value = '';

    let data = {
      todos: this.state.todos.concat(todo),
      user: this.props.state.user.email
    }
    const context = this;

    axios.post('/todos/add', data).then(function(todos) {
      context.getTodos();
    })
  }

  getTodos() {
    let data = {
      user: this.props.state.user.email
    }
    const context = this;

    axios.post('/todos/get', data).then(function(todos) {
      context.props.setTodos(todos);

      context.setState({
        todos: context.props.state.todos.data
      })
    })
  }

  deleteTodo(i) {
    let data = {
      todos: this.state.todos.filter((x,j) => j !== i),
      user: this.props.state.user.email
    }
    const context = this;

    axios.post('/todos/add', data).then(function(todos) {
      context.getTodos();
    })
  }

  render() {
    return (
      <div>
        <input id="todo-input" className="form-control" type="text" onChange={ this.handleChange.bind(this) }></input>
        <button className="btn btn-default btn-padding full" onClick={ this.addTodo.bind(this, this.state.textInput) }>Add Task</button>
        <div>
          <h3>Todos</h3>
          <div>
            {
              this.state.todos.map((todo, i)=> {
                return (
                  <div className="row">

                    <div onClick={this.deleteTodo.bind(this, i)}>
                      { todo }
                      <span className="todo-delete"><FontAwesome name="times-circle"size='1x'/></span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setTodos: setTodos
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
