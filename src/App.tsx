import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/home/home.component";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<AboutMe />} />
        {/* <Route path="*" element={<PageNotFound />}/>*/}
      </Routes>
    </>
  );
}

export default App;
