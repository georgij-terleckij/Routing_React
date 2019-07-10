import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Table extends React.Component {
    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        },{
            name: 'Tanner Linsley2',
            age: 262,
            friend: {
                name: 'Jason Maurer2',
                age: 232,
            }
        }];

        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }];

        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Приветствую Вас на моей первой странице</h1>
                </div>
                <div className="col-md-3">
                    1
                </div>
                <div className="col-md-9">
                    <ReactTable
                        data={data}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }

}

export default Table;
