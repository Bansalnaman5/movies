import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FAVOURITES,SET_SHOW_FAVOURITES} from '../action';

const initialMoviesstate={
    list:[],
    favourites:[],
    show_favourites:false
}

export default function movies(state=initialMoviesstate,action){
    // if(action.type===ADD_MOVIES){
    //     return{
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:{
            return {
                ...state,
                list:action.movies
            }
        }
        case ADD_FAVOURITES:{
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        }
        case REMOVE_FAVOURITES:{
            const filar=state.favourites.filter(
                movie=>movie.Title!==action.movie.Title
            );
            return{
                ...state,
                favourites:filar

            }
        }
        case SET_SHOW_FAVOURITES:{
            return{
                ...state,
                show_favourites:action.val

            }
        }
        default:
            return state;
    }
}