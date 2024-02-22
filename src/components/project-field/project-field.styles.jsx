import styled from "styled-components";

export const GITHubLink = styled.a`
  color: rgb(226, 232, 240);
  font-size: 16px;
  margin-top: -50px;
  text-decoration: none;

  &:hover {
    color: rgb(94, 234, 212);
  }
`;

export const GITHubLinkContainer = styled.div`
  align-items: baseline;
  bottom: -16px;
  color: rgb(100, 116, 139);
  display: flex;
  font-size: 12px;
  font-weight: bold;
  justify-content: space-between;
  left: -24px;
  margin-bottom: 44px;
  max-width: 576px;
  padding: 16px;
  right: -24px;
  text-align: left;
  top: -16px;
`;

export const ProjectArrowContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  transition: transform 0.3s ease;
`;

export const ProjectDetailsContainer = styled.div`
  max-width: 392px;
`;

export const ProjectFieldDescription = styled.div`
  color: rgb(148, 163, 184);
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const ProjectImage = styled.img`
  align-self: flex-start;
  height: 70px;
  margin-right: 20px;
  margin-top: 19px;
  border-radius: 8px;
  width: 111px;
`;

export const ProjectFieldMainBox = styled.div`
  align-items: baseline;
  bottom: -16px;
  color: rgb(100, 116, 139);
  display: flex;
  font-size: 12px;
  font-weight: bold;
  justify-content: space-between;
  left: -24px;
  margin-bottom: 48px;
  max-width: 576px;
  padding: 16px;
  right: -24px;
  text-align: left;
  top: -16px;

  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    background-color: #112240;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  }

  &:hover ${ProjectArrowContainer} {
    color: rgb(94, 234, 212);
    transform: translate(5px, -5px);
  }
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
`;
