import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";


/*const lessons = [
  { id: "00-Buttons" },
  { id: "14-Loader_Dots" },
  {id: "15-ThumbnailList"}
  ]*/


const lessons = [
  { id: "01-Buttons" },
  { id: "02-Loader_Dots" },
  { id: "03-ThumbnailList"}
  ]

lessons.forEach(l => (l.Component = require(`./lessons/${l.id}/index`).default));

const Links = () => (
  <ul className="lesson-nav">
    {lessons.map((l, i) => (
      <li key={l.id}>
        <Link to={`/lessons/${l.id}`}>{l.id}</Link>
      </li>
    ))}
  </ul>
);

const Back = () => (
  <div style={{ marginBottom: 64 }}>
    <Link to="/">&larr;Back to lessons</Link>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Links} />
          <Route path="/lessons" component={Back} />
          {lessons.map(({ id, Component }) => (
            <Route
              key={id}
              path={`/lessons/${id}`}
              render={({ match }) => {
                return <Component {...match} />;
              }}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
