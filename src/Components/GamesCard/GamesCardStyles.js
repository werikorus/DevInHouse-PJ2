import styled from "styled-components";

export const Card = styled.div`
  ${'' /* max-height: 15.3rem; */}
  width: 13rem;
  background: white;
  border-radius: 0.5rem;
  display: grid;
  margin-top: 1.5rem;
  ${'' /* box-shadow: rgba(79, 78, 78, 0.522) 1px 0.1px 10px; */}
  overflow: hidden;
  transition: 0.4s;
  padding: 0.3rem;
  
  
  &:hover,
  &:focus{
    box-shadow: rgba(79, 78, 78, 0.922) 1px 0.1px 10px;
    background: rgba(1, 1, 1, 0.1);
    border: 0.1px solid white;
    font-color: white;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 9rem;
  width: 13rem;
  border-radius: 0.3rem 0.3rem 0 0;
`;

export const TextArea = styled.div`
  display: grid;
  margin: auto;
  padding: 5px;
`;
