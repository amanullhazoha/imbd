import React, { Component } from 'react';

import Movies from './components/movies.component';
import Navbar from './components/navbar.component';

class App extends Component {
    render() { 
        return (
            <div className='container'>
                <Navbar />
                <Movies />
            </div>
        );
    }
}
 
export default App;
