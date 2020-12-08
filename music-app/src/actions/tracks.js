import { apiKey, base } from '../utils/config';

export const FETCH_TRACKS_START = 'FETCH_TRACKS_START';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const FETCH_SEARCH_START = 'FETCH_SEARCH_START';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

export const FETCH_ARTIST_START = 'FETCH_ARTIST_START';
export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';
export const FETCH_ARTIST_FAILURE = 'FETCH_ARTIST_FAILURE';

const fetchArtistStart = () => ({
    type: FETCH_ARTIST_START,
});

const fetchArtistSuccess = (artist) => ({
    type: FETCH_ARTIST_SUCCESS,
    payload: artist,
});

const fetchArtistFailure = (error) => ({
    type: FETCH_ARTIST_FAILURE,
    payload: error,
});

const fetchSearchStart = () => ({
    type: FETCH_SEARCH_START,
});

const fetchSearchSuccess = (track) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: track,
});

const fetchSearchFailure = (error) => ({
    type: FETCH_SEARCH_FAILURE,
    payload: error,
});

const fetchTracksStart = () => ({
    type: FETCH_TRACKS_START,
});

const fetchTracksSuccess = (tracks) => ({
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
});

const fetchTracksFailure = (error) => ({
    type: FETCH_TRACKS_FAILURE,
    payload: error,
});

export const fetchTracks = (page) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `${base}/2.0/?method=chart.gettoptracks&page=${page}&api_key=${apiKey}&format=json`
            );
            const json = await response.json();
            dispatch(fetchTracksSuccess(json?.tracks?.track));
        } catch (e) {
            dispatch(fetchTracksFailure('Fetch Error'));
        }
    };
};

export const fetchSearch = (track) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `${base}/2.0/?method=track.search&track=${track}&api_key=${apiKey}&format=json`
            );
            const json = await response.json();
            dispatch(fetchSearchSuccess(json?.results?.trackmatches?.track));
        } catch (e) {
            dispatch(fetchSearchFailure('Fetch Error'));
        }
    };
};

export const fetchArtist = (artist) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `${base}/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`
            );
            const json = await response.json();
            dispatch(fetchArtistSuccess(json?.artist));
        } catch (e) {
            dispatch(fetchArtistFailure('Fetch Error'));
        }
    };
};
