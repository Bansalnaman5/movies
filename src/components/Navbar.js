import React from 'react';
import {handelMovieSearch} from '../action';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }
    handelChange=(e)=>{
        this.setState({
            searchText:e.target.value
        });

    }
    handelSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handelMovieSearch(searchText));
    }
    render(){
        const {result}=this.props.search;
        return(
            <div className='nav'>
                <div class="search-container">
                    <input onChange={this.handelChange} />
                    <button onClick={this.handelSearch} className='search-btn' >Search</button>
                </div>
            </div>
        )
    }
}


export default Navbar;