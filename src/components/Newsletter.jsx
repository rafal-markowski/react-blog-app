import React, { Component } from 'react';

import { Box, Input, SubmitButton, ErrorMsg, SuccessMsg, H3, FormRow } from '../styles/all-styles';

class Newsletter extends Component {
    state = {
        value: '',
        error: false,
        errorMsg: '',
        successMsg: ''
    };

    setValue = e => {
        this.setState({
            value: e.target.value,
            errorMsg: '',
            successMsg: ''
        });
    }

    testInput = value => {
        const email = value.toLowerCase();
        let errorMsg = '';
        let error = false;

        if(email.length === 0 ) {
            errorMsg = 'Musisz wpisać swój adres email'
            error = true; 
        } else if(!/^[\w-]+@[a-z\d]+\.[a-z\d]+$/.test(email)) {
            errorMsg = 'Adres email jest nieprawidłowy';
            error = true;
        } else {
            errorMsg = '';
            error = false;
        }

        this.setState({
            value: email,
            error,
            errorMsg,
            successMsg: ''
        });

        return error;
    }

    submitForm = e => {
        e.preventDefault();

        const { value } = this.state;

        if(!this.testInput(value)) {
            this.setState({
                value: '',
                successMsg: 'Twój adres email został dodany do newslettera :)'
            });
        }
    }

    render() {
        const { value, error, errorMsg, successMsg } = this.state;

        return (
            <Box>
                <H3>Newsletter</H3>
                <form onSubmit={this.submitForm} noValidate={true}>
                    <FormRow>
                        <Input value={value} onChange={this.setValue} error={error ? true : false} type="email" placeholder="Email" />
                        { error && <ErrorMsg>{errorMsg}</ErrorMsg> }
                    </FormRow>
                    <FormRow>
                        <SubmitButton>Submit</SubmitButton>
                        { !error && <SuccessMsg>{successMsg}</SuccessMsg> }
                    </FormRow>
                </form>
            </Box>
        );
    }
}

export default Newsletter;