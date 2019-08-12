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
                
                { props.admin ? <button onClick={props.showModal.bind(null, employee)} type="submit">Edit</button> : null}
                { props.admin ? <button onClick={ () => props.delete(employee) } >Delete</button> : null }

            </li>
        )
    })
    console.log(props, "<-- props in employeeList")
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