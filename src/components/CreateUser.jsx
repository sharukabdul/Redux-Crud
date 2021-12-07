import React, { useState } from 'react';
import { connect } from 'react-redux';

const CreateUser = (props) => {

    const { addDetails } = props;

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { firstName, lastName, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName === '' || lastName === '' || email === '') {
            alert('All details are mandatory!');
        } else {
            e.preventDefault();
            addDetails(data);
            props.history.push('/');
        }
    }
    
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

const mapDispatchToProps = dispatch => {
    return {
        addDetails: val => dispatch({ type: 'ADD_TODO', payload: val })
    }
}

export default connect(null, mapDispatchToProps)(CreateUser);
