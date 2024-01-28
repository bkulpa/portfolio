import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import Header from "../header/header.component";
const Home = () => {
  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>right side</RightContainer>
    </SplitContainer>
  );
};

export default Home;
