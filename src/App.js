import { Home } from './components/pages/';
import {  Route, Switch } from "react-router-dom";

const App = () => {
  return (
      <div className="wrapper">
        <div className="content">
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </div>
  );
};

export default App;