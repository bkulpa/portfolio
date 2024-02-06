import styled from "styled-components";

export const CVLink = styled.a`
  color: rgb(226, 232, 240);
  font-size: 16px;
  margin-bottom: 144px;
  margin-top: 30px;
  text-decoration: none;

  &:hover {
    color: rgb(94, 234, 212);
  }
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
  max-width: 576px;
  right: -24px;
  text-align: left;
  top: -16px;
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