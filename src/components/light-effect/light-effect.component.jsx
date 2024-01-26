import { useEffect } from "react";

const LightEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const light = document.getElementById("light");
      const x = e.pageX;
      const y = e.pageY;
      light.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
    };

    // Dodanie nasłuchiwania zdarzenia
    document.addEventListener("mousemove", handleMouseMove);

    // Oczyszczenie nasłuchiwania zdarzenia
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="light" className="light-effect"></div>;
};

export default LightEffect;
