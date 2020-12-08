import { connect } from 'react-redux';
import ClickedPage from './component';
import { fetchArtist } from '../../actions/tracks';

const mapStateToProps = (state) => ({
    artist: state.artist,
    isLoading: state.isLoading,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (artist) => {
            dispatch(fetchArtist(artist));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickedPage);
