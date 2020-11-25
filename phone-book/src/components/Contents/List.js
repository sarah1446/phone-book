import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkMode: false,
        }
    }
    
    bookMark = () => {
        if(this.state.bookmarkMode) {
            this.setState({
                bookmarkMode: false
            })
        }else{
            this.setState({
                bookmarkMode: true
            })
        }
    }
    
    render() {
        const { profileImage, name, phoneNumber } = this.props.list;
        return(
            <div className="list">
                <img src={profileImage} alt={name} />
                <div>{name}</div>
                <div>{phoneNumber}</div>
                <div onClick={this.bookMark}>
                    {
                        this.state.bookmarkMode ?
                            <img src="https://storage.googleapis.com/snuper-static/mock_users/heart_filled.svg" alt=""/>
                            :
                            <img src="https://storage.googleapis.com/snuper-static/mock_users/heart_empty.svg" alt=""/>
                    }
                </div>
                
            </div>
        )
    }
}

export default List;