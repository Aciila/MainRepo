import { connect } from 'react-redux';
import SearchPage from './component';
import { fetchSearch } from '../../actions/tracks';

const mapStateToProps = (state) => ({
    track: state.track,
    isLoading: state.isLoading,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: (inputValue) => {
            dispatch(fetchSearch(inputValue));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
