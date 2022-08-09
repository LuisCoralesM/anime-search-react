import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Footer } from "./components/Nav/Footer";

import Nav from "./components/Nav/Nav";
import SearchProvider from "./context/context";
import routesObject from "./routes/routes";

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <Nav />
        <Routes>
          {routesObject.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={React.createElement(route.component)}
            />
          ))}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </Router>
  );
};

export default App;
