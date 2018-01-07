import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header';
import Navbar from './components/navbar';
import Home from './components/home';
import NoteForm from './components/note-form';
import Footer from './components/footer';
import NoteList from './components/list';

class App extends React.Component{
    constructor(props) { 
        super(props);
        
        this.state = {
            noteArray:[],
        }
        this.app = this.app.bind(this);
        this.updateNotes =this.updateNotes.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.updateOne = this.updateOne.bind(this)

        console.log(React)
    }

    componentDidMount() {
        console.log("STATE::::::", this.state)
    }

    updateNotes(props) {
        this.setState(currentState => ({noteArray: [...currentState.noteArray, props]}));
        console.log('after new note pushed:', this.state);  

    }

    updateOne(props){
        this.setState({noteArray:props})
    }

    deleteNote(props){
        this.setState({noteArray:props});
        console.log('after delete', this.state);
    }

    app(){
        return {
            state: this.state,
            setState: this.setState.bind(this)
        }
    }

    render(){
        return(
            <div>
              <Header appTitle="React App"/>
              <Navbar />
                <main>
                    <Route exact path='/create' component={() => <NoteForm handler={this.updateNotes}/>} /> 
                    <Route exact path='/' component={()=> <NoteList updateOne = {this.UpdateOne} handler = {this.deleteNote} app={this.app()} />} />
                </main>
              <Footer /> 
            </div>   
        )
    }
}
ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));