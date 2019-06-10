import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { txtName: "abc", txtDob: "1999-01-01", sltGender: "male" },
    { txtName: "rtyui", txtDob: "1999-02-01", sltGender: "female" },
    { txtName: "kaouufgh", txtDob: "1999-03-01", sltGender: "male" }
  ]);
  const [newUser, setNewUser] = useState({
    txtName: "",
    txtDob: "",
    sltGender: "male"
  });
  
  let element = users.map((user, index) => {
    return (
      <tr key={index} className="tbFormat" onClick={() => onDelUser(index)}>
        <td>{index + 1}</td>
        <td>{user.txtName}</td>
        <td>{user.txtDob}</td>
        <td>{user.sltGender}</td>
      </tr>
    );
  });

  const onInputChange = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const onAddUser = event => {
    event.preventDefault();
    setUsers([...users, newUser]);
  };

  const onDelUser = index => {
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
  };

  //sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const [control, setControl] = useState({display: 'block'})
  const controlShowSidebar = () =>{
    if(showSidebar){
      setControl({display: 'none'});
      setShowSidebar(false)
    }else{
      setControl({display: 'block'});
      setShowSidebar(true)
    }
  }

  return (
    <div className="App">
      <div className="sideBar" style={control}>

      </div>
      <div className="content">
        <div className='btnhum'>
        <button className="btnHumburger" onClick={controlShowSidebar}>
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>
        </div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Adding person</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={onAddUser}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control margin"
                  placeholder="user name"
                  name="txtName"
                  onChange={onInputChange}
                />
                <input
                  type="date"
                  className="form-control margin"
                  placeholder="date of birth"
                  name="txtDob"
                  onChange={onInputChange}
                />

                <select
                  className="form-control margin"
                  required="required"
                  name="sltGender"
                  onChange={onInputChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>User name</th>
                  <th>Date of birth</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>{element}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
