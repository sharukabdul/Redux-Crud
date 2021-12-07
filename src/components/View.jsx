import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const View = (props) => {
    const id = props.match.params.id;

    const { userInfo } = props;
    
    const viewUser = userInfo.find(item => item.id == id);
    const [data, setData] = useState(viewUser);

    console.log(userInfo, 'props');
    return (
        <div>
            <h2>User Details</h2>
            <div>Id: <b>{data.id}</b></div>
            <div>First Name: <b>{data.firstName}</b></div>
            <div>Last Name: <b>{data.lastName}</b></div>
            <div>Email: <b>{data.email}</b></div>
            <Link to= '/'>
                <button>Back</button>
            </Link>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userInfo: state.userDetails
    }
}

export default connect(mapStateToProps)(View);
