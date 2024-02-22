import styled from "styled-components";

export const MenuList = styled.ul`
  font-weight: bold;
  list-style: none;
  margin-top: 64px;
  padding-left: 0;
`;

export const MenuElement = styled.li`
  color: ${(props) =>
    props.isHighlighted ? "rgb(215, 223, 238)" : "rgb(148, 163, 184)"};
  position: relative;
  padding-left: ${(props) => (props.isHighlighted ? "80px" : "48px")};
  font-size: 14px;
  line-height: 38px;
  cursor: pointer;
  transition: padding-left 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.isHighlighted ? "64px" : "32px")};
    height: 1px;
    background: rgb(148, 163, 184);
    transition: width 0.3s ease, background-color 0.3s ease, left 0.3s ease;
  }

  &:hover {
    padding-left: 80px;
    color: rgb(215, 223, 238);
  }

  &:hover::before {
    width: 64px;
  }
`;

export const MenuElementLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
