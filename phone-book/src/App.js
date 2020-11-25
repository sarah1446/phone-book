import React from 'react';
import SearchInput from './components/Header/SearchInput';
import ListWrap from './components/Contents/ListWrap';
import './App.css';
import './style/reset.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            searchMode: false,
            searchLists: []
        }
    }
    
     getLists = async () => {
        const res = await fetch('http://localhost:4000/user/list');
        const dataList = await res.json();
        dataList.sort((a, b) => { 
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        this.setState({
            lists: dataList,
        })
    }
    
    searchOn = searchWord => {
        this.setState({
            searchMode: true
        })
        
        const totalList = this.state.lists.slice();
        const resultList = totalList.filter(list => list.name.indexOf(searchWord) > -1)
        
        this.setState({
            searchLists: resultList,
        })
    }
    
    searchOff = () => {
        this.setState({
            searchMode: false
        })
    }
    
    componentDidMount() {
        this.getLists();
    }
    
    render() {
        return(
            <div className="app">
                <SearchInput dataList={this.state.lists} searchOn={this.searchOn} searchOff={this.searchOff}/>  
                <ListWrap 
                    dataList={this.state.lists} 
                    searchLists={this.state.searchLists}
                    searchMode={this.state.searchMode}
                />
            </div>
        )
    }
}

export default App;