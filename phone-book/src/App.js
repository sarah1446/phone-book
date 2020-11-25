import React from 'react';
// import SearchInput from './components/Header/SearchInput';
import ListWrap from './components/Contents/ListWrap';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                // {
                //     name: "정성운"
                //     phoneNumber: "01012997235"
                //     profileImage: "https://storage.googleapis.com/snuper-static/mock_users/1.svg"
                // },
            ]
        }
    }
    
     getLists = async () => {
        const res = await fetch('http://localhost:4000/user/list');
        const dataList = await res.json();
        this.setState({
            lists: dataList,
        })
    }
    
    componentDidMount() {
        this.getLists();
    }
    
    render() {
        return(
            <div>
                app
                <ListWrap dataList={this.state.lists}/>
                
            </div>
        )
    }
}

export default App;