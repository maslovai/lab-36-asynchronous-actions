import '../style/main.scss';
import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Home from './home'

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
                    {/* <Route exact path='/note' component={ () => <NodeIterator /> } /> */}
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