import { Home } from './components/pages/';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {

  // const getSelectedLink = ({ match }) => {
  //   if (match.isExact) return <Redirect to="/1" />
  //   return <Route path="/:selectedLink" render={ tableRender } />
  // };
  // const tableRender = ({ match }) => {
  //   const { selectedLink } = match.params;
  //   return <Home selectedLink={ selectedLink } />
  // };
  return (
    // <Router>
      <div className="wrapper">
        <div className="content">
          <Home />
          {/* <Switch>
            <Route path="/" component={ getSelectedLink } />
          </Switch> */}
        </div>
      </div>
    // </Router>

  );
}

export default App;