import React, { Component } from 'react';

import { Box, FormRow, H3, SubmitButton, Small, Label } from '../styles/all-styles';

class Question extends Component {
    state = {
        answers: [
            'Lorem ipsum dolor sit amet',
            'Nunc luctus diam tempus maximu',
            'Curabitur dictum justo lacinia',
            'Fusce in magna massa nec ultricie'
        ],
        checked: -1
    }

    setChecked = e => {
        this.setState({
            checked: parseInt(e.target.dataset.id, 10)
        });
    }

    submitForm = e => {
        e.preventDefault();

        const { checked } = this.state;

        if(checked >= 0) {
            this.setState({
                checked: -1
            });
        }
    }

    render() {
        const { answers, checked } = this.state;
        const answersList = answers.map((el, i) => <FormRow key={i}>
            <Label>
                <input type="radio" name="question" onChange={e => this.setChecked(e)} checked={checked === i ? true : false} data-id={i} /> 
                <Small>{el}</Small>
            </Label>
        </FormRow>);

        return (
            <Box>
                <H3>Phasellus euismod arcu?</H3>
                <form onSubmit={this.submitForm}>
                    {answersList}
                    <FormRow>
                        <SubmitButton>Zagłosuj</SubmitButton>
                    </FormRow>
                </form>
            </Box>
        );
    }
}

export default Question;