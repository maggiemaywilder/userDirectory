import React, { useState, useEffect } from 'react';
import API from '../utils/API';


const Table = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees();
    }, []);


    const fetchEmployees = async () => {
        const response = await API.getEmployees();
        console.log(response.data.results);
        setEmployees(response.data.results);
        console.log(employees);
    };

    useEffect(() => {
        console.log(employees)
    }, [employees])

    // renderTableData((employees) => {
    //     return this.state.employees.map((employee, index) => {
    //        const { picture: { thumbnail: image }, name: { first: first_name, last: last_name }, dob: { date: birthday }, email, phone } = employee;
    //        return (
    //       <tr key={index}>
    //           <td>{image}</td>
    //           <td>`${first_name} ${last_name}`</td>
    //           <td>{email}</td>
    //           <td>{phone}</td>
    //           <td>{birthday}</td>
    //       </tr>

    //        ) 
    //     });
    // });
        // const { picture: { thumbnail: image }, name: { first: first_name, last: last_name }, dob: { date: birthday }, email, phone } = employee;

    return (

        <div>
            <h1>Hello World and thanks for all the fish</h1>

            <table className="table table-striped">
                <thead className="thead-dark" >
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map(employee => {
                        return(
                            <tr key={employee.login.uuid}>
                            <td>{employee.picture.thumbnail}</td>
                            <td>`${employee.name.first} ${employee.name.last}`</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.date}</td>
                        </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
