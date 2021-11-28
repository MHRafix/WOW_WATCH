import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Dashboard from '../Dashboard';

const AddAdmins = () => {
    
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [alert, setAlert] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://sheltered-reef-45281.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlert("Admin successfully added!");
                    setSuccess(true);
                }else{
                    setAlert("User is not exist!");
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <section>
            <div className="wrapper">
                <div className="container">
                    <Dashboard />
                    <div className="sectionHeading">
                        <h1 className="heaidng">Add an Admins</h1>
                    </div>
                        {success && <Alert variant="success"><h1 className="alert">{alert}</h1></Alert>}
                          <form onSubmit={ handleAdminSubmit }>
                            <input className="w-50" id="inputField" type="email" name="email"  onBlur={handleOnBlur} placeholder="Enter admin email" />
                            <Button id="buyBtn" className="buyBtn" type="submit">Add Now</Button>
                        </form> <br /><br />
                </div>
            </div>
        </section>
    );
};

export default AddAdmins;