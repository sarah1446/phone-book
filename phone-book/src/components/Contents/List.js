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
                <div className="photo"><img src={profileImage} alt={name} /></div>    
                <div>
                    <div className="name">{name}</div>
                    <div className="number">{phoneNumber}</div>
                </div>
                <div onClick={this.bookMark} className="bookmark">
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