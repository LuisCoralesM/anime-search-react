import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Spinner from "./components/Loading/Spinner";
import Footer from "./components/Navigation/Footer";

import Nav from "./components/Navigation/Nav";
import SearchProvider from "./context";
import routesObject from "./routes";

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
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
    </React.Suspense>
  );
};

export default App;
