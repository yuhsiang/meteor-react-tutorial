import React, { Component } from 'react';

class EmployeeDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, avatar, phone } = this.props.employee;
    return (
      <div className="thumbnail">
        <img src={ avatar} />
        <div className="caption">
          <h3>{ name }</h3>
          <ul>
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
