import { connect } from 'react-redux';
import MusicList from './component';
import { fetchTracks } from '../../actions/tracks';

const mapStateToProps = (state) => ({
    tracks: state.tracks,
    isLoading: state.isLoading,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracks: (activePage) => {
            dispatch(fetchTracks(activePage));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
