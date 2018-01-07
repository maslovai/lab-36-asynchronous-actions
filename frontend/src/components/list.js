import React from 'react';
// import NoteForm from './note-form';
import EditNote from './edit';

const renderIf = (test, component, alternative) => {
    return test ? component : alternative
}

class NoteList extends React.Component{
    constructor(props){
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    deleteNote(id){
        let notes = this.props.app.state.noteArray.filter((note,i) => {
            return note.id !== id;
        });
        this.props.handler(notes); 
    }
    handleUpdate(noteReturned){
    let id = e.target.dataset['key'];
    let notes = this.props.app.state.noteArray.map((note,i) => {
        return note.id === noteReturned.id ? note.content = noteReturned.content : note = note
    })
    this.props.updateOne(notes);
    }
   
    render() {
        return (
            <div className="notesList">{ 
                    renderIf(
                        this.props.app.state.noteArray.length, 
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan='2'>Notes:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.app.state.noteArray.map((note,i) =>
                                        <tr key={i}>
                                            <td><a onClick={() => this.deleteNote(note.id)} data-key={note.id} href="#">x</a></td>
                                            <td>{note.content}</td>
                                            {/* <EditNote handleUpdate={()=>this.handleUpdate()} note={note}/> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>,
                        <h3> No Notes. Create one.</h3>
                    )
                }
            </div>
        )        
    }
}
export default NoteList;