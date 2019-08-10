import React, { Component } from 'react';

class EmployeeContainer extends Component {
    state = {
        employees: [],
        showEditModal: false,
        employeeToEdit: {
            _id: null,
            name: '',
            position: '',
            birthDate: '',
            department: '',
            annualSalary: ''
        }
    }
    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}


export default EmployeeContainer;