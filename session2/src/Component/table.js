import React, { Component } from "react";
import "./table.css";
import TableItem from "./tableItem";

class Table extends Component {  
  render() {
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
        <tbody>
          {this.props.userList.users.map((user, index) => (
            <TableItem 
              key={index} 
              index={index} 
              user={user}
              delUser={this.props.delUser}
            />
          ))
          }
        </tbody>
          
      </table>
    );
  }
}

export default Table;
