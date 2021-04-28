import React, { Component } from 'react';
import API from '../utils/API';

var employeeList;

class Table extends Component {
    state = {
        data: []
    }


    

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async () => {
        let data = await API.getEmployees();
        employeeList = data.data.results;
        console.log('line 20', employeeList);
        this.setState(employeeList);
    };


    render() {
        return (
            <div>
                <h1>Hello something and thanks for all the fish</h1>
            </div>
        )
    }
}

export default Table
