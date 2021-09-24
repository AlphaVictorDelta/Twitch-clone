import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {


    onSubmit = (formValues) => {
        // Once the form is submitted this function is automatically called and we can do anything we want with the form values.
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    };
}



export default connect(
    null,
    { createStream }
)(StreamCreate);