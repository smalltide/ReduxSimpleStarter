import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA7PiO8Apb6WHoxZywTFZURHt1CwuqR1sk';

// Create new component
// some HTML
const App = () => {
    return( 
    <div>
       <SearchBar />
    </div>
    );
}

//put in page
ReactDOM.render(<App />,document.querySelector('.container'));

