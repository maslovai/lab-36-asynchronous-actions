import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <FontAwesomeIcon icon={faCoffee}/>
                <p>API: {__API_URL__}</p>
            </div>
        )
    }
}

export default Home;