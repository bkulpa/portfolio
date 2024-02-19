import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { setPageTitle } from "./store/page-title/page-title";

import Error404 from "./components/error-404/error-404.component";
import Home from "./components/home/home.component";

import "./App.css";
// import LightEffect from "./components/light-effect/light-effect.component";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageTitle = useSelector((state) => state.pageTitle);

  useEffect(() => {
    const titleKey =
      location.pathname === "/" ? "page.title" : "page.title.404";
    dispatch(setPageTitle(titleKey));
  }, [location.pathname, dispatch]);

  return (
    <Routes>
      {/* <LightEffect /> */}
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />{" "}
    </Routes>
  );
}

export default App;
