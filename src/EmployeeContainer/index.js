import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';
import Employees from '../EmployeeList';

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

    componentDidMount(){
        this.getEmployees();
    }

    getEmployees = async () => {
        try {
            const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee');
            console.log(responseGetEmployees, "<-- getEmployees")
            if (responseGetEmployees.status !== 200){
                throw Error('404 from server')
            }
            const employeeResponse = await responseGetEmployees.json()
            console.log(employeeResponse, "<-- employeeResponse")
            this.setState({
                employees: [...employeeResponse.data]
            })
        } catch(err) {
            return err
        }
    }

    addEmployee = async (employee, e) => {
        e.preventDefault();
        // console.log(employee, '<-- employee inside of addEmployee')
        console.log(this.state, "<-- this.state inside addEmployee")
        try {
            const createEmployee = await fetch('http://localhost:9000/api/v1/employee', {
                method:'POST',
                body: JSON.stringify(employee),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(createEmployee, '<--createEmployee fetch')
            if (createEmployee.status !== 200) {
                throw Error('Resource not found')
            }
            const createEmployeeResponse = await createEmployee.json();
            console.log(createEmployeeResponse.data, '<--createEmployeeResponse.data')
            this.setState(prevState => ({
                employees: [...prevState.employees, createEmployeeResponse.data]

            }))
            console.log(this.state, '<--new state')
        } catch(err){
            console.log(err, '<--err createEmployee')
            return err
        }

    }

    render() {
        return (
            <div className="employee-container">
                <CreateEmployee addEmployee={ this.addEmployee } />
                <Employees employees={this.state.employees} />
            </div>
        )
    }
}


export default EmployeeContainer;