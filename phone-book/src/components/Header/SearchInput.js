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
            <div className="header">
                <p>연락처</p>
                <input onChange={this.changeText} type="text" placeholder="검색"/>
            </div>
        )
    }
}

export default SearchInput;