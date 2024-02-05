import styled from "styled-components";

const TechStack = ({ technologies }) => {
  const Technology = styled.div`
    align-items: center;
    background-color: rgba(45, 212, 191, 0.1);
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
    color: rgb(94, 234, 212);
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-right: 12px;
    padding: 8px 16px;
  `;

  const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const techList = technologies.split(",").map((tech) => tech.trim());

  return (
    <TechStackContainer>
      {techList.map((tech, index) => (
        <div>
          <Technology key={index}>{tech}</Technology>
        </div>
      ))}
    </TechStackContainer>
  );
};

export default TechStack;
