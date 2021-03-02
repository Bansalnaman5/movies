import '../index.css';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies,setShowfavourites} from '../action';

class App extends React.Component {
  componentDidMount(){
    // make api call
    // dispatch action
    const {store}=this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
  }
  checkIfFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();
    const index=favourites.indexOf(movie);
    if(index!==-1){
      return false;
    }
    return true;
  }
  handelFavDisplay(val){
    this.props.store.dispatch(setShowfavourites(val));
  }
  render(){  
    const {list,favourites,show_favourites}=this.props.store.getState();
    // console.log(this.props.store.getState());
    const displaylist=show_favourites?favourites:list;
    return (
        <div className="App">
      <Navbar/>
      <div className='main'>
        <div className="tabs">
          <div className={`tab ${show_favourites?'':'active-tabs'}`} onClick={()=>this.handelFavDisplay(false)} >Movies</div>
          <div className={`tab ${show_favourites?'active-tabs':''}`} onClick={()=>this.handelFavDisplay(true)}>Favourites</div>
        </div>
        <div className="list">
          {displaylist.map((movie,index)=>{
            return(
              
              <MovieCard movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch} 
              isFav={this.checkIfFavourite(movie)} />
              )
            })}
        </div>
        {
      displaylist.length===0 ? <div className='no-movies'>No movies to display</div>:null
    }
      </div>
      </div>
    );
    
}
}

export default App;
