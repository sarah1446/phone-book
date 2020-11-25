import React from 'react';
// import SearchInput from './components/Header/SearchInput';
import ListWrap from './components/Contents/ListWrap';
import './App.css';
import './style/reset.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
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
    
    componentDidMount() {
        this.getLists();
    }
    
    render() {
        return(
            <div className="app">
                <ListWrap dataList={this.state.lists}/>
            </div>
        )
    }
}

export default App;