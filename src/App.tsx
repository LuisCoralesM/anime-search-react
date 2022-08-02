import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Nav from "./components/Nav";
import { SearchContext } from "./context/context";
import routesObject from "./routes/routes";
import { fetchAnime } from "./utils/fetchApi";

const App = () => {
  const [listData, setListData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setContextListData = (data: []) => setListData(data);
  const setContextSingleData = (data: {}) => setSingleData(data);

  return (
    <SearchContext.Provider
      value={{
        listData: listData,
        singleData: singleData,
        fetchAnime: fetchAnime,
        setContextListData: setContextListData,
        setContextSingleData: setContextSingleData,
      }}
    >
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
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
};

export default App;
