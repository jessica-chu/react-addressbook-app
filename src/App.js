
import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListTodos/ListTodos.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
    "todos": [
      {
        key: generate(10),
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        key: generate(10),
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        key: generate(10),
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday:  "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        key: generate(10),
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        key: generate(10),
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        key: generate(10),
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ],
    "collapse": false,
    "formFirstName": '',
    "formLastName": '',
    "formBirthday": '',
    "formTelephone": '',
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    let newTodo = {
      firstName: this.state.formFirstName,
      lastName: this.state.formLastName,
      birthday: this.state.formBirthday,
      telephone: this.state.formTelephone
    };
    this.setState({todos:[...this.state.todos,newTodo]});
    this.setState({formFirstName:''});
    this.setState({formLastName:''});
    this.setState({formBirthday:''});
    this.setState({formTelephone:''})
  }

  closeTodoHandler = (key,e) => {
    let todos = [...this.state.todos];
    let deleteIndex = todos.findIndex((item)=>item.key===key);
    todos.splice(deleteIndex, 1);
    this.setState({"todos":todos});
  }

  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React-Based Address Book</h1>
          </header>
          <ListTodos 
            todos={this.state.todos}
            closer={this.closeTodoHandler}>
          </ListTodos>
          <h2 className='text-left'>Add an address book entry</h2>
          <Form className="text-left" onSubmit={this.addTodoHandler}>
            <Form.Group controlId="formToDo">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                value={this.state.formTitle}
                onChange={(e) => this.setState({formTitle: e.target.value})}/>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
                rows="3" 
                placeholder="Enter Description" 
                value={this.state.formDescription}
                onChange={(e) => this.setState({formDescription:e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add entry
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
