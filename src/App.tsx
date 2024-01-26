import "./App.css";
import Home from "./components/home/home.component";
import LightEffect from "./components/light-effect/light-effect.component";

function App() {
  document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty(
      "--tw-light-x",
      `${e.clientX}px`
    );
    document.documentElement.style.setProperty(
      "--tw-light-y",
      `${e.clientY}px`
    );
  });
  return (
    <>
      <LightEffect />
      <Home></Home>
    </>
  );
}

export default App;
