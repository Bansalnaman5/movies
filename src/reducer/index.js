import {ADD_MOVIES} from '../action';

const initialMoviesstate={
    list:[],
    favourites:[]
}

export default function movies(state=initialMoviesstate,action){
    if(action.type===ADD_MOVIES){
        return{
            ...state,
            list:action.movies
        }
    }
    return state;
}