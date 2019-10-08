
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListTodos (props) {

  let todos = [...props.todos];
  let listItems = todos.map((item)=>
    <ListGroup.Item key={item.key}>
      <Card className="bg-light border rounded">
        <span key={item.key}
          className="text-right"
          onClick={() => 
            {if (window.confirm('Are you sure you wish to delete this item?')) {props.closer.bind(null,item.key);}} 
          }>{'\u274e'}</span>
          <Card.Body className="text-left">
            <h5 >{item.FirstName + ' ' + item.LastName}</h5>
            <p>{item.Birthday}</p>
            <p>{item.Telephone}</p>
          </Card.Body>
        </Card>
    </ListGroup.Item>)
  return listItems;
}

export default ListTodos;