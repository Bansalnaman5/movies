// {
//     type:'ADD_MOVIES',
//     movies=[m1,m2,m3]
// },
// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES'
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES'
export const SEARCH_RESULT='SEARCH_RESULT'

export function addMovies(movies){
    return{
        type:"ADD_MOVIES",
        movies:movies
    }

}

export function addFavourites(movie){
    return{
        type:'ADD_FAVOURITES',
        movie:movie
    }
}
export function removeFavourites(movie){
    return{
        type:'REMOVE_FAVOURITES',
        movie:movie
    }
}
export function setShowfavourites(val){
    return{
        type:'SET_SHOW_FAVOURITES',
        val:val
    }
}

export function handelMovieSearch(searchText){
    const url=`http://www.omdbapi.com/?apikey=3ce4342c&t=${searchText}`
    return function(dispatch){

        fetch(url).then(response=>response.json())
        .then((movie)=>{console.log(movie)
            // dispatch an action to add  movie to the store
            // dispatch({
            //     type:ADD_MOVIES,
            //     movie:movie
            // })
            
        });
    }
    // return{
    //     type:'SEARCH_RESULT',
    //     serachText:searchText
    // }

    
}