import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {

    renderErrorMessage(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }
    };

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ' '}`;
        return (
            <div className={className}>
                <label> {formProps.label} </label>
                <input
                    // onChange={formProps.input.onChange}
                    // value={formProps.input.value}
                    // This can also be written as: 
                    {...formProps.input}
                    // Take all the objects that are passed as props and pass them to the input. 
                    // Can be further shortened by destructuring the props object.
                    autoComplete="off"
                // This is a special property that is used to prevent autocomplete from filling in the input.
                // This is a good practice to prevent users from accidentally filling in the input.
                // This also removes the dropdown. 
                />
                {this.renderErrorMessage(formProps.meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // Once the form is submitted this function is automatically called and we can do anything we want with the form values.
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" label="Enter Title of the Stream" component={this.renderInput} />
                <Field name="description" label="Enter Description of the Stream" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
}

const validate = (formValues) => {
    // The errors is an object that is returned after the user input is validated.
    // If there are no errors, then the object will be empty.
    // The keys in this object MUST match the value passed in name field of Field component (from redux-form).
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Your Stream must have a title';
    }
    if (!formValues.description) {
        errors.description = 'Please let your viewers know what your stream is about :) ';
    }
    return errors;
}

const formWrapped = reduxForm(
    {
        form: 'streamCreate',
        validate: validate
    }
)(StreamCreate);

export default connect(
    null,
    { createStream }
)(formWrapped);