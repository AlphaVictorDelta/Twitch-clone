import React from 'react';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import { Link } from 'react-router-dom';

import Modal from '../modal';
import history from '../../history';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderModalContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }

    renderActionButtons() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment className="modal-footer">
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    render() {
        return (
            < Modal
                title="Delete Stream"
                content={this.renderModalContent()}
                actions={this.renderActionButtons()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);