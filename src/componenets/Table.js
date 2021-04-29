import React, { Component } from 'react';
import API from '../utils/API';


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = [];
    }

    componentDidMount() {
        this.fetchEmployees();
    };

    // componentWillUnmount() {

    // }

    fetchEmployees() {
        API.getEmployees()
            .then(result => this.setState([result.data.results]))
            .catch(err => console.log(err));
    };

    renderTableData() {
        console.log(this.state[0]);

        // return this.state.map((each, index) => {
        //     return (
        //       <tr key={index}>
        //           <td>{each.state.picture.thumbnail}</td>
        //           <td>`${each.state.name.first} ${each.state.name.last}`</td>
        //           <td>{each.state.dob}</td>
        //           <td>{each.state.phone}</td>
        //           <td>{each.state.email}</td>
        //       </tr>
        // )
        // })

    }

    render() {
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
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
