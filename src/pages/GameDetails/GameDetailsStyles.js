import styled from "styled-components";

export const Page = styled.div`
  display: grid;
  margin: auto;
`;

export const Content = styled.main`
  background: white;
  width: 100%;
  ${'' /* height: 100vh; */}
  max-width: 50rem;
  border-radius: 0.8rem;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-top: 6.4rem;
  overflow: hidden;
`

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-around;
`
export const Image = styled.img`
  border-radius: 0.4rem;
`;

export const TextArea = styled.section`
  padding: 1rem;
`

export const ContentFooter = styled.footer`
  
`;

export const ComemntsArea = styled.ul`
  display: flexbox;
  width: 100%;
  padding-left: 0rem;
`
export const Commentary = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 2mm;
  font-size: 1.3rem;
  padding: 10px;
`;

export const HorizontalLine = styled.hr`
`;