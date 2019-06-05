import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newUser: {txtName: '', txtDob: '', sltGender: 'male'}
    };
  }
  onChangeInput = (event) => {
     
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onAddElement = (event) => {
    event.preventDefault(); // tránh web tự load lại sau khi ấn submit
    this.props.addUser(this.state.newUser);
  }

  render() {
    var flRight = {
      float: "right"
    };
    return (
      <div className="panel panel-primary format">
        <div className="panel-heading">
          <h3 className="panel-title">Create user</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onAddElement}>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <input
                    name="txtName"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <input
                    name="txtDob"
                    type="date"
                    className="form-control"
                    placeholder=""
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <select
                    name="sltGender"
                    className="form-control"
                    onChange={this.onChangeInput}
                    value={this.state.sltGender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={flRight}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
