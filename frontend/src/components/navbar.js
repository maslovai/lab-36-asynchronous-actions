import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return ( 
            <nav>
                <ul>
                    <li>
                        <Link to="/">View Notes</Link>
                    </li>
                    <li>
                        <Link to="/create">Create a Note</Link>
                    </li>
                </ul>
            </nav> 
        )  
    }    
}

export default Navbar;