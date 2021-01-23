import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './containers/LoginScreen';
import Homepage from './containers/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LoginScreen />} />
        <Route exact path="/homepage" render={() => <Homepage />} />
      </Switch>
    </Router>
  );
}

export default App;
