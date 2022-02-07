import styled from "styled-components";

export const Menus = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-between;
  text-decoration: none;
  justify-self: center;
`;

export const HorizontalLine = styled.hr`
  color: white;
  position: relative;
`;

export const Border = styled.div`
  color: white;
  visibility: none;
  justify-self: center;
  padding: 0.2rem;
  border-radius: 0.5rem;
  max-heigth: 1rem;
  transition: 0.4s;

  &:hover,
  &:focus{
    visibility: 100%;
    background: rgba(1, 1, 1, 0.1);
  }
`