import React from 'react';

const EditEmployee = (props) => {
    return (
        <div>
            <h4>Edit Employee</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Employee:
                </label>
                <input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name} /> 
                <label>
                    Edit Position:
                </label>
                <input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position} /> 
                <label>
                    Edit Date of Birth:
                </label>
                <input type="text" name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate} /> 
                <label>
                    Edit Department:
                </label>
                <input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department} /> 
                <label>
                    Edit Annual Salary:
                </label>
                <input type="text" name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary} /> 
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}

export default EditEmployee;