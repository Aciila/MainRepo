import {
    FETCH_TRACKS_START,
    FETCH_TRACKS_SUCCESS,
    FETCH_TRACKS_FAILURE,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_START,
    FETCH_ARTIST_FAILURE,
    FETCH_ARTIST_START,
    FETCH_ARTIST_SUCCESS,
} from '../actions/tracks';

const initialState = {
    tracks: [],
    error: '',
    isLoading: false,
    track: [],
    artist: {},
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload,
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_SEARCH_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                track: action.payload,
            };
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_ARTIST_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case FETCH_ARTIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                artist: action.payload,
            };
        case FETCH_ARTIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
