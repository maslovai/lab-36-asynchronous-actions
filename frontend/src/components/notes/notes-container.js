import React from 'react';
import {connect} from 'react-redux';

import NoteForm from './note-form';
import NoteList from './note-list';

import * as actions from './actions';

class Notes extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     this.props.noteInitialize();
    // }

    render() {

        return (
            <React.Fragment>
                <NoteForm handler={this.props.noteCreate} />
                <NoteList noteList={this.props.todoList} updateHandler={this.props.noteUpdate} deleteHandler={this.props.noteDelete} />
            </React.Fragment>
        )

    }

}

const mapStateToProps = (state) => {
	return {
		noteList: state.note
	}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {
		noteCreate: noteItem => dispatch(actions.noteCreate(noteItem)),
        noteUpdate: noteItem => dispatch(actions.noteUpdate(noteItem)),
        noteDelete: noteItem => dispatch(actions.noteDelete(noteItem)),
        noteInitialize: () => dispatch(actions.noteInitialize()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes, NoteList)