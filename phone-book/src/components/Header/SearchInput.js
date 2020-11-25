import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    changeText = e => {
        const searchWord = e.target.value;
        if(searchWord) {
           this.props.searchOn(searchWord);
        }else{
            this.props.searchOff();
        }
    }
    
    
    render() {
        return(
            <div>
                <input onChange={this.changeText}/>
            </div>
        )
    }
}

export default SearchInput;