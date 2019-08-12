import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';
import Employees from '../EmployeeList';
import EditEmployee from '../EditEmployee';

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

    showModal = (employee) => {
        console.log(employee, '<--employee in showModal')
        this.setState({
            employeeToEdit: employee,
            showEditModal: !this.state.showEditModal
        })
    }

    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editRequest = await fetch('http://localhost:9000/api/v1/employee/' + this.state.employeeToEdit._id, {
                method: 'PUT',
                body: JSON.stringify(this.state.employeeToEdit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(editRequest, "<--editRequest inside closeAndEdit")
            if (editRequest.status !== 200){
                throw Error('editRequest not working')
            }
            
            const editResponse = await editRequest.json();
            console.log(editResponse, "<--editResponse inside closeAndEdit")
            
            const editedEmployeeArray = this.state.employees.map(employee => {
                if (employee._id === editResponse.data._id){
                    employee = editResponse.data
                }
                return employee
            })
            this.setState ({
                employees: editedEmployeeArray,
                showEditModal: false
            })
        }catch(err){
            console.log(err, "<--error in closeAndEdit")
            return err
        }
    }

    handleFormChange = (e) => {
        this.setState( {
            employeeToEdit: {
                ...this.state.employeeToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    addEmployee = async (employee, e) => {
        e.preventDefault();
        // console.log(employee, '<-- employee inside of addEmployee')
        console.log(this.state, "<-- this.state inside addEmployee")
        console.log(employee, '<-- employee in addEmployee')
    
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

    deleteEmployee = async (employee) => {
        const deleteRequest = await fetch('http://localhost:9000/api/v1/employee/' + employee._id, {
            method: 'DELETE',
            credentials: 'include'
        })
        console.log(deleteRequest, '<--deleteRequest in deleteEmployee')
        if (deleteRequest.status !== 200){
            throw Error ('Delete request not working')
        }
        const deleteResponse = await deleteRequest.json();
        console.log(deleteResponse, '<--deleteResponse in deleteEmployee');
        
        const truncatedEmployeeList = this.state.employees.filter(employee => deleteResponse.data._id !== employee._id);
        console.log(truncatedEmployeeList, '<-- truncatedEmployeeList in deleteEmployee')
        
        this.setState({
            employees: truncatedEmployeeList
        })
    }

    render() {
        return (
            <div className="employee-container">
                <CreateEmployee addEmployee={ this.addEmployee } />
                <Employees employees={this.state.employees} showModal={this.showModal} delete={this.deleteEmployee} />
                {this.state.showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange} /> : null }
            </div>
        )
    }
}


export default EmployeeContainer;