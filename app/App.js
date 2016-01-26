import React, { Component } from 'react';import {render} from 'react-dom';import KanbanBoard from './KanbanBoard'class App extends Component {  render(){    var place = "World";    return (      <h1>Hello {place}</h1>    );  }}class GroceryList extends Component {  render() {    return(      <ul>        <ListItem quantity="1" name="Bread" />        <ListItem quantity="6" name="Eggs" />        <ListItem quantity="2" name="Milk" />      </ul>    );  }}class ListItem extends Component {  render() {    return(      <li>        {this.props.quantity}x {this.props.name}      </li>    );  }}let cardsList = [  {    id: 1,    title: "Read the Book",    description: "I should read the whole book",    status: "in-progress",    tasks: []  },  {    id: 2,    title: "write some code",    description: "Code along with the samples in the book",    status: "todo",    tasks: [      {        id: 1,        name: "ContactList Example",        done: true      },      {        id: 2,        name: "KanBan Example",        done: false      },      {        id: 3,        name: "My own experiments",        done: false      }    ]  }];render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));// render(<GroceryList />, document.getElementById("root"));// render(<App />, document.getElementById('root'));