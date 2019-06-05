import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  
  render() {
    var tbFormat = {
        textAlign: 'left'
    }
    let element = this.props.userList.users.map((user,index) => {
      return (
        <tr key={index}  style={tbFormat} onClick={() => this.props.delUser(index)}>
          <td>{index + 1}</td>
          <td>{user.txtName}</td>
          <td>{user.txtDob}</td>
          <td>{user.sltGender}</td>
        </tr>
      );
    });

    return (
      <table className="table table-hover format">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    );
  }
}

export default Table;
