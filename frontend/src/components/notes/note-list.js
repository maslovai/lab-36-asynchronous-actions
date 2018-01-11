import React from 'react';
import NoteForm from './note-form';
// import * as actions from './actions';
const renderIf = (test, component, alternative) => {
    return test ? component : alternative
}

class NoteList extends React.Component{
    constructor(props){
        super(props);
        // this.state.noteArray = this.props.state.noteArray || [] ;
        // this.deleteNote = this.deleteNote.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    deleteNote(note){
        // let notes = this.props.app.state.noteArray.filter((note,i) => {
        //     return note.id !== id;
        // });
        this.props.deleteHandler(note); 
    }
    handleUpdate(note){
    // let id = e.target.dataset['key'];
    // let notes = this.props.app.state.noteArray.map((note,i) => {
    //     return note.id === noteReturned.id ? note.content = noteReturned.content : note = note
    // })
    this.props.updateHandler(note);
    }
   
    render() {
        return (
            <div className="notesList">
                 {
                    renderIf(
                        this.props.noteArray.length, 
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan='2'>Notes:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.noteArray.map((note,i) =>
                                        <tr onDoubleClick={()=>this.handleUpdate(note)} key={i}>
                                            <td><a onClick={() => this.deleteNote(note)} data-key={note.id} href="#">x</a></td>
                                            <td>{note.content}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>,
                        <p>NO NOTES.CREATE ONE</p>
                    )
                }
            </div>
        )        
    }
}
export default NoteList;