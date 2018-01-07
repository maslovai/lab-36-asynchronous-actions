import React from 'react';
import NoteForm from './note-form';

class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            editing: false,
            completed: false,
            content: ''
        }
        this.editNote = this.editNote.bind(this); 
        this.handleSubmint = this.handleSubmint.bind(this);   
    }

editNote(e){
    this.setState({[e.target.name]:e.target.value})
}


handleSubmint(e){
    e.preventDefault();
   
    ///?
    this.props.updateNote(this.state.content)
}
render(){
    console.log(this.state)
    return (
            <td>
                <form onSubmit = {this.handleSubmit}>
                    <input name ='content' onChange={this.editNote} placeholder="type new note" value={this.state.content}></input>
                    <button type="submit" >Submit Note</button>
                </form>
            </td>
    )
}
}
export default EditNote;