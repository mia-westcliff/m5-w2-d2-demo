import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
          <Route path="/about">
            <About /></Route>
            <Route path="/topics">
              <Topics />
              </Route>
          <Route path="/" element= { <Home  />} />
          </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
      </div> );
}

 function About() {
  return (
    <div>
  <h2>About</h2>
  </div>);
 }

 function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2><ul> 
        <li>
          <Link to={`${match.url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${match.url}/dogs`}>Dogs</Link>
        </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
           <Route path={match.path}>
              <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
  ); 
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
 }