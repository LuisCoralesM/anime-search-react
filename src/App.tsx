import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Nav from "./components/Nav";
import routesObject from "./routes/routes";
import Home from "./views/Home";
import Results from "./views/Results";
import SingleView from "./views/SingleView";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        {routesObject.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={React.createElement(route.component)}
          />
        ))}
        {/* <Route path="/" element={<Home />} />
        <Route path="/list" element={<Results />} />
        <Route path="/details" element={<SingleView />} /> */}

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
};

export default App;
