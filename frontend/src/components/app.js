import '../style/main.scss';
import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Navbar from './navbar';
import Home from './home';
import Notes from './notes/notes-container';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header appTitle="Front-Back" />
                <Navbar />
                <main>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/notes' component={ () => <Notes /> } />
                    {/* <Route path='/' component={} /> */}
                </main>

                <Footer>
                    <p>&copy;2017 Iryna</p>
                </Footer>

            </React.Fragment>
        )
    }
}

export default App;