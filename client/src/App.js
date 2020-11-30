import React from 'react';
import SearchInput from './components/Header/SearchInput';
import ListWrap from './components/Contents/ListWrap';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import './style/reset.css'
import './style/normalize.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            searchMode: false,
            searchList: []
        }
    }
    
    // 전화번호 불러옴
     getList = async () => {
        const res = await fetch('http://localhost:4000/user/list');
        const dataList = await res.json();
        dataList.map(list => list.id = uuidv4());
        
        dataList.sort((a, b) => { 
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        this.setState({
            list: dataList,
        })
    }
    
    // 검색모드 ON
    searchOn = searchWord => {
        this.setState({
            searchMode: true
        })
        
        const totalList = this.state.list.slice();
        const resultList = totalList.filter(list => list.name.indexOf(searchWord) > -1)
        
        this.setState({
            searchList: resultList,
        })
    }
    
    // 검색모드 OFF
    searchOff = () => {
        this.setState({
            searchMode: false
        })
    }
    
    componentDidMount() {
        this.getList();
    }
    
    render() {
        return(
            <div className="app">
                <SearchInput dataList={this.state.list} searchOn={this.searchOn} searchOff={this.searchOff}/>  
                <ListWrap 
                    dataList={this.state.list} 
                    searchList={this.state.searchList}
                    searchMode={this.state.searchMode}
                    bookmark={this.bookmark}
                />
            </div>
        )
    }
}

export default App;