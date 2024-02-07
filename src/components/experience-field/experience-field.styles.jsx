import styled from "styled-components";

export const AboutField = styled.div`
  margin-bottom: 144px;
  max-width: 528px;
  padding-left: 14px;
`;

export const CVLink = styled.a`
  color: rgb(226, 232, 240);
  font-size: 16px;
  margin-top: -50px;
  text-decoration: none;

  &:hover {
    color: rgb(94, 234, 212);
  }
`;

export const CVLinkContainer = styled.div`
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
export const ExperienceFieldMainBox = styled.div`
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
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1); /* Bardziej subtelny cień */
  }
`;

export const ExperienceFieldDescription = styled.div`
  color: rgb(148, 163, 184);
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const ExperienceDetailsContainer = styled.div`
  max-width: 392px;
`;
