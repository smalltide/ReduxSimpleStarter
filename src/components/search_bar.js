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
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} />
            </div>
         )
    }
    
    onInputChange(event) {
        this.setState({term:event.target.value});
        console.log(event.target.value)
    }
}

export default SearchBar;