import React, { Component } from "react";
import "./table.css";
import Modal from "./Modal";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      updateUser: {txtName: "", txtDob: "", sltGender: "male" },
      currentPos: 0
    };
  }

  handleShow = index => {
    this.setState({
      showModal: true,
      currentPos: index
    });
  };

  onCancel = () => {
    this.setState({ showModal: false });
  };

  onChangeInfo = event => {
    this.setState({
      updateUser: {...this.state.updateUser,[event.target.name]: event.target.value}
    });
  };
  onSubmitUser = event => {
    event.preventDefault();
    this.setState({
      showModal: false
    })
    this.props.update(this.state.currentPos,this.state.updateUser);
  };

  render() {
    //const { updateUser } = this.state;
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Edit user infomation</h3>
            </div>
            <div className="panel-body">
              <form onSubmit = {this.onSubmitUser}>
                <div className="form-group">
                  <input
                    name="txtName"
                    type="text"
                    className="form-control"
                    //defaultValue={updateUser.txtName}
                    onChange={this.onChangeInfo}
                  />
                  <input
                    name="txtDob"
                    type="date"
                    className="form-control"
                    //defaultValue={updateUser.txtDob}
                    onChange={this.onChangeInfo}
                  />
                  <select
                    name="sltGender"
                    className="form-control"
                    required="required"
                    //defaultValue={updateUser.sltGender}
                    onChange={this.onChangeInfo}
                    value={this.state.updateUser.sltGender}
                  >
                    <option value="male">
                      Male
                    </option>
                    <option value="female">
                      Female
                    </option>
                  </select>
                </div>
                <button
                  type=""
                  className="btn btn-default"
                  onClick={this.onCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
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
              onClick={() => this.handleShow(index)}
            />
          </td>

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
        {modal}
      </table>
    );
  }
}

export default Table;
