import Component from 'inferno-component';
import PhoneList from "./PhoneList";
import {Router, Route, IndexRoute} from 'inferno-router'
import PhoneDetails from './PhoneDetails';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <IndexRoute component={ PhoneList }/>
                <Route path="/details/:phoneId" component={PhoneDetails}/>
            </Router>
        );
    }
}

export default App;
