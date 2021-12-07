import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Style.css';

const UserList = (props) => {

    const { userInfo, deleteName } = props;

    const handleDelete = (index) => {
        deleteName(index)
    }

    console.log(userInfo, 'userInfo');
    return (
        <div>
            <h1>CRUD REDUX</h1>
            <Link to= '/create'><button>Add User</button></Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfo.map((item, index) => {
                            return (
                                <tr key= {index}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to= {`/edit/${item.id}`}><button>Edit</button></Link>&nbsp;
                                        <button onClick= {() => handleDelete(index)}>Delete</button>&nbsp;
                                        <Link to= {`/view/${item.id}`}><button>View</button></Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userInfo: state.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteName: val => dispatch({ type: 'DELETE_TODO', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
