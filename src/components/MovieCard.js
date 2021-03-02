import React from 'react';
import {addFavourites,removeFavourites} from '../action';


class MovieCard extends React.Component{
    handelFavClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourites(movie));

    }
    handelunFavClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFavourites(movie));
    }

    render(){
        const {movie ,isFav}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="Movie oster" />
                </div>
                <div className="right">
                    <div className='title' >{movie.Title}</div>
                    <div className='plot' >{movie.Plot}</div>
                    <div className='footer' >
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFav?
                            <button className="favourite-btn" onClick={this.handelFavClick} >Favourite</button>
                            :<button className="unfavourite-btn" onClick={this.handelunFavClick} >unFavourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;