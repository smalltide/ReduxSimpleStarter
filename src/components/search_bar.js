import React,{ Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        
        super(props);
        
        this.state = {term: ''};  
        
    }
    
    render () {
      // return <input onChange={this.onInputChange} />;
    
        return(
            <div> 
                <input onChange={event =>this.setState({term:event.target.value}) } />
                Value of the input word: {this.state.term}
            </div>
         )
    }
    
    onInputChange(event) {
        this.setState({term:event.target.value});
        console.log(event.target.value)
    }
}

export default SearchBar;