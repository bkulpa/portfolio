import { useEffect, useState, useRef } from "react";

import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";

import Header from "../header/header.component";

const Home = () => {
  const [isTest2aVisible, setIsTest2aVisible] = useState(false);
  const test2aRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTest2aVisible(entry.isIntersecting);
      },
      {
        // TODO: Znaleźć optimum, wartość threshold ustawić na około 0.7
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",
        threshold: 1,
      }
    );

    if (test2aRef.current) {
      observer.observe(test2aRef.current);
    }

    return () => {
      if (test2aRef.current) {
        observer.unobserve(test2aRef.current);
      }
    };
  }, [test2aRef]);
  return (
    <div style={{ backgroundColor: isTest2aVisible ? "red" : "initial" }}>
      <SplitContainer>
        <LeftContainer>
          <Header />
        </LeftContainer>
        <RightContainer>
          <div className="test3a" style={{ width: "50px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <br />
          <div className="test2a" ref={test2aRef} style={{ width: "50px" }}>
            JAPPA Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the
          </div>
        </RightContainer>
      </SplitContainer>
    </div>
  );
};

export default Home;
