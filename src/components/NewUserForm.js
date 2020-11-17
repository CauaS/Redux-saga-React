import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function NewUserForm({ onSubmit }) {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLasttName ] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        onSubmit({
            firstName,
            lastName
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>
                    First Name:
                </Label>
                <Input required placeholder="Fist Name" onChange={e => setFirstName(e.target.value)} value={firstName}/>
            </FormGroup>
            <FormGroup>
                <Label>
                    Last Name:
                </Label>
                <Input required placeholder="Fist Name" onChange={e => setLasttName(e.target.value)} value={lastName}/>
            </FormGroup>
            <FormGroup>
                <Button block outline color="primary" type="submit">Add</Button>
            </FormGroup>
        </Form>
    )
}

export default NewUserForm;