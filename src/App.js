import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Gallery,
  Education,
  Commission,
  News,
  Store,
} from "./pages";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="" element={<About />} />
        <Route path="" element={<Gallery />} />
        <Route path="" element={<Education />} />
        <Route path="" element={<Commission />} />
        <Route path="" element={<News />} />
        <Route path="" element={<Store />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
