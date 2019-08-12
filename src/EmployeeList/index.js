import React from 'react';

const Employees = (props) => {
    const employeeList = props.employees.map(employee => {
        return (
            <li key={employee._id}>
                <div>{employee.name}</div>
                <div>{employee.position}</div>
                <div>{employee.birthDate.substring(0,10)}</div>
                <div>{employee.department}</div>
                <div>{employee.annualSalary}</div>
                <button onClick={props.showModal.bind(null, employee)} type="submit">Edit</button>
                <button onClick={ () => props.delete(employee) } >Delete</button>
            </li>
        )
    })
    return (
        <div>
            <h2>Employee List:</h2>
            <ul>
                {employeeList}
            </ul>
        </div>

    )
}

export default Employees;