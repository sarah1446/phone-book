import React from 'react';
import List from './List';

class ListWrap extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <div>
                {
                    this.props.dataList.map((list,key) => {
                        return(
                            <List list={list} key={key}/>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default ListWrap;