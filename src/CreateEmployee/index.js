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
    }

    render() {
        return (
            <form>
                <label>Name: </label>
                <input type="text" name="name" onChange={this.handleChange}/><br/>
                <label>Position: </label>
                <input type="text" name="position" onChange={this.handleChange}/><br/>
                <label>Date of Birth: </label>
                <input type="text" name="birthDate" onChange={this.handleChange}/><br/>
                <label>Department: </label>
                <input type="text" name="department" onChange={this.handleChange}/><br/>
                <label>Annual Salary: </label>
                <input type="text" name="annualSalary" onChange={this.handleChange}/><br/>
                <button type="submit">Create Employee</button>
            </form>
        )
    }
}

export default CreateEmployee;