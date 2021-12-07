import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const EditUser = (props) => {
    let history = useHistory();
    const id = props.match.params.id;

    const { editName, editObject } = props;
    const editData = editObject.find(item => item.id == id);
    const [data, setData] = useState(editData);

    const { firstName, lastName, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editName({data, id})
        history.push('/')
    }

    console.log(props);
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <input type="text" placeholder="Enter Firstname" name= "firstName" value= {firstName} onChange= {handleChange} /><br />
                <input type="text" placeholder="Enter Lastname" name= "lastName" value= {lastName} onChange= {handleChange} /><br />
                <input type="email" placeholder="Enter Email" name= "email" value= {email} onChange= {handleChange} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        editObject: state.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editName: val => dispatch({ type: 'EDIT_TODO', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
