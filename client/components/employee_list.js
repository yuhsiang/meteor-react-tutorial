import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.employees.length !== this.props.length;
  }


  componentWillMount() {
    this.page = 1;
  }

  handleClick() {
    console.log('onclick');
    this.page++;
    Meteor.subscribe('employees', PER_PAGE * this.page);
  }


  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
        </div>
        <button onClick={this.handleClick.bind(this)} className="btn btn-primary">Load More!</button>
      </div>
    );
  }

}

export default createContainer(() => {
  // setup sub
  Meteor.subscribe('employees', PER_PAGE);
  // return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };

}, EmployeeList);
