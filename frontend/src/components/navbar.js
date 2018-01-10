import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/note">Note List</Link></li>
                    <li><Link to="">About</Link>
                        <ul>
                            <li> <a href="#">One</a></li>
                            <li><a href="#">Two</a></li>
                            <li><a href="#">Three</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;