import React, { Component } from 'react';

class CreateEmployee extends Component {
    state = {
        name: '',
        position: '',
        birthDate: '',
        department: '',
        annualSalary: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        console.log(this.state, "<--createEmployee handleChange")
    }

    

    render() {
        return (
            <form onSubmit={ this.props.addEmployee.bind(null, this.state) }>
                <h1>Create Employee:</h1>
                <label>Name: </label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br/>
                <label>Position: </label>
                <input type="text" name="position" onChange={this.handleChange} value={this.state.position} /><br/>
                <label>Date of Birth: </label>
                <input type="date" name="birthDate" onChange={this.handleChange} value={this.state.birthDate} /><br/>
                <label>Department: </label>
                <input type="text" name="department" onChange={this.handleChange} value={this.state.department} /><br/>
                <label>Annual Salary: </label>
                <input type="text" name="annualSalary" onChange={this.handleChange} value={this.state.annualSalary} /><br/>
                <button type="submit">Create Employee</button>
            </form>
        )
    }
}

export default CreateEmployee;