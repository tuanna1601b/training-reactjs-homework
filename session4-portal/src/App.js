import React, { Component } from "react";
import "./App.css";
import Form from "./Component/form";
import Table from "./Component/table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { txtName: "abc", txtDob: "1999-01-01", sltGender: 'male' },
        { txtName: "rtyui", txtDob: "1999-02-01", sltGender: 'female' },
        { txtName: "kaouufgh", txtDob: "1999-03-01", sltGender: 'male' }
     ]
  };
}

  addUser = user =>{
    this.setState({
      users: [...this.state.users, user]
    });
  }

  delUser = index =>{
    const {users} = this.state;
    this.setState({
      users: [...users.slice(0,index), ...users.slice(index + 1)]
    });
    
  }

  showEditModal = index =>{

  }

  render() {
    return (
      <div className="App">
        <Form userList={this.state.users} addUser={this.addUser} />
        <Table userList={this.state.users} delUser={this.delUser} showEditModal={this.showEditModal}/>
      </div>
    );
  }
}

export default App;
