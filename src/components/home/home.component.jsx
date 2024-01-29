import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setVisibility } from "../../store/visibility/visibility.reducer";

import FindMenuSection from "./functions/find-menu-section";

import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";

import Header from "../header/header.component";

const Home = () => {
  const findMenuSection = FindMenuSection();

  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>
        <div className="test3a" style={{ width: "50px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <br />
        <div className="test2a" ref={findMenuSection} style={{ width: "50px" }}>
          JAPPA Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
