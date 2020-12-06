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
            searchList: []
        }
    }
    
    // 전화번호 불러옴
     getList = async () => {
        const res = await fetch('http://localhost:4000/user/list');
        const dataList = await res.json();
        //dataList.map(list => list.id = uuidv4());
        const newDataList = dataList.map(list => {
            return (
                {
                    ...list,
                    id: uuidv4()
                }
            )
        })
        
        newDataList.sort((a, b) => { 
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        this.setState({
            list: newDataList,
            searchList: newDataList
        })
    }
    
    // 검색모드 ON
    searchOn = searchWord => { 
        const resultList = this.state.list.filter(list => list.name.indexOf(searchWord) > -1)
        
        this.setState({
            searchList: resultList,
        })
    }
    
    searchOff = () => {
        this.setState((prevState) => {
            return {
                searchList: prevState.list,
            }
        })
    }
    
    componentDidMount() {
        this.getList();
    }
    
    render() {
        return(
            <div className="app">
                <SearchInput 
                    searchOn={this.searchOn} 
                    searchOff={this.searchOff}
                />  
                <ListWrap 
                    dataList={this.state.searchList} 
                    bookmark={this.bookmark}
                />
            </div>
        )
    }
}

export default App;