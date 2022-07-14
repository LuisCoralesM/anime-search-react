import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import routesObject from "./routes/routes";

const App = () => {
  console.log(window !== undefined);

  return (
    <Router>
      <Routes>
        {routesObject.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={React.createElement(route.component)}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
