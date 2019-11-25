import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// demonstrating the setup of vs-code and github

class App extends Component {
  state={
    items: [],                        //Tasks
    id: uuid(),                       //Generate random unique ID
    item: "",
    editItem: false
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    const newItem = {                 //Obtain the value from the object
      id: this.state.id,            
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]    //Update the new item

    this.setState({
      items: updatedItems, 
      item: "",                         //Always empty string when starting for the new
      id: uuid(),
      editItem: false                 //Go back to false from true 
    });
  };

  handleChange = (e)=>{               //Handle the changes on the adding task section
    this.setState({
      item: e.target.value
    });
  }

  clearList = ()=>{                   //Clear the list of tasks
    this.setState({
      items: []
    });
  }

  handleDelete = (id)=>{
    const deletedItem = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items: deletedItem
    })
  }

  handleEdit = (id)=>{
    const filteredItems = this.state.items.filter(item=>item.id !== id);
    const selectedItem = this.state.items.find(item=> item.id === id);         //Look for the task to edit using id match
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-9 mt-5">
            <h3 className="text-uppercase text-center">Add Task</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
            <TodoList items={this.state.items} clearList={this.state.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
