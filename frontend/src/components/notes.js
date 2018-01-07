import React from 'react';
import NoteForm from './note-form';
import NoteList from './list';

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this);
    }
handleNewNote(note) {
        this.props.app.setState(currentState => ({notes: [...currentState.notes, note]}))
    }
render(){
    return (
            <div id="notesWrapper">
                <h2>Notes</h2>
                {
                    renderIf(
                        <NoteForm handler={this.handleNewForm}/> 
                    )
                }
            </div>
    )
}
}