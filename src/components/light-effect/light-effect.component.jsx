import { useEffect } from "react";

const LightEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const light = document.querySelector(".light-effect");
      const x = e.clientX;
      const y = e.clientY;
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Oczyszczenie nasłuchiwania zdarzenia
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="light" className="light-effect"></div>;
};

export default LightEffect;
