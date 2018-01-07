import React from 'react';
import {shallow} from 'enzyme';

import NoteForm from '../../components/expense-form';

describe('<NoteForm />', () => {
  
  test('properly adds a new note', () => {
    
    let note = "Foo";
    
    let noteCreate = (state) => {
        expect(noteForm.state().content).toEqual(note);
    }
    
    let noteForm = shallow(<NoteForm handler={noteCreate} />);
    
    noteForm.find(".item").simulate( 'change', { target: {content:"note"} } )
    noteForm.find("form").simulate( 'submit', { preventDefault:()=>{} } );
    
  });
  
})
