import React, { Component } from "react";

class TableItem extends Component {
  
  render() {
    var tbFormat = {
        textAlign: 'left'
    }
    var index = this.props.index;
      return (
        <tr style={tbFormat} onClick={() => this.props.delUser(index)}>
          <td>{index + 1}</td>
          <td>{this.props.user.txtName}</td>
          <td>{this.props.user.txtDob}</td>
          <td>{this.props.user.sltGender}</td>
        </tr>
      );
    };
  }
  //

 export default TableItem;