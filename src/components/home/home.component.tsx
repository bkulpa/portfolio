import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import Header from "../header/header.component";
const Home = () => {
  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>cipa</RightContainer>
    </SplitContainer>
  );
};

export default Home;
