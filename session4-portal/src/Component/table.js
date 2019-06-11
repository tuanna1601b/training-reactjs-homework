import React, { Component } from "react";
import "./table.css";
import Modal from "./Modal";
//import Modal from './Component/Modal';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  onCancel = () => {
    this.showModal(false);
  }
  onSubmitUser() {}

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <form>
          <div class="form-group" onSubmit={this.onSubmitUser}>
            <label for="">label</label>
            <input name="txtName" type="text" class="form-control" />
            <input name="txtDob" type="text" class="form-control" />
            <select name="sltGender" class="form-control" required="required">
              <option value="male" />
              <option value="female" />
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button type="" class="btn btn-default" onClick={this.onCancel}>
            Cancle
          </button>
        </form>
      </Modal>
    ) : null;

    var tbFormat = {
      textAlign: "left"
    };
    let element = this.props.userList.map((user, index) => {
      return (
        <tr key={index} style={tbFormat}>
          <td>{index + 1}</td>
          <td>{user.txtName}</td>
          <td>{user.txtDob}</td>
          <td>{user.sltGender}</td>
          <td>
            <span
              className="glyphicon glyphicon-edit"
              onClick={this.handleShow}
            />
          </td>
          {modal}
          <td>
            <span
              className="glyphicon glyphicon-trash"
              onClick={() => this.props.delUser(index)}
            />
          </td>
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    );
  }
}

export default Table;
