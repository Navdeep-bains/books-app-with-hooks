import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./Components/Todo";
import Edit from "./Components/Edit";
import Booklist from "./Components/Booklist";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/edit/:id" component={Edit} />
        <Route exact path="/">
          <Booklist />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
      </Router>
      {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
    </div>
  );
};

export default App;
