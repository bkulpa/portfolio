import styled from "styled-components";

// export const MenuList = styled.ul`
//   margin-top: 64px;
//   box-sizing: border-box;
//   display: block;
//   tab-size: 4;
//   font-weight: bold;
// `;

// export const MenuElement = styled.li`
//   font-size: 14px;
//   color: rgb(148, 163, 184);
//   line-height: 38px;
// `;

export const MenuList = styled.ul`
  font-weight: bold;
  list-style: none;
  margin-top: 64px;
  padding-left: 0;
`;

export const MenuElement = styled.li`
  color: rgb(148, 163, 184);
  position: relative;
  padding-left: 48px;
  font-size: 14px;
  color: rgb(148, 163, 184);
  line-height: 38px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 1px;
    background: rgb(148, 163, 184);
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  &:hover::before {
    width: 64px;
    background-color: rgb(215, 223, 238);
  }
`;
