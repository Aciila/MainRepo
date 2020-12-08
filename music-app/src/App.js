import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicList from './components/List';
import Container from '@material-ui/core/Container';
import MainHeader from './components/MainHeader/component';
import SearchPage from './components/Search';
import ClickedPage from './components/Author';

class App extends PureComponent {
    componentDidCatch() {
        return <Container>Whoops...Something went wrong. Try again.</Container>;
    }

    render() {
        return (
            <Router>
                <MainHeader />
                <Switch>
                    <Container>
                        <Route path='/' exact component={MusicList} />
                        <Route path='/search' component={SearchPage} />
                        <Route
                            path='/list/:id'
                            render={({ match }) => {
                                console.log(match.params);
                                const { id } = match.params;
                                return <ClickedPage authorId={id} />;
                            }}
                        />
                    </Container>
                </Switch>
            </Router>
        );
    }
}

export default App;
