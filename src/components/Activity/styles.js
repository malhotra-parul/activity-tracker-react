import styled from  "styled-components";

export const Name = styled.p`
  font-size: 1.5em;
  padding-bottom: 0.5em;
  color: #ecb241;
  font-weight:600;
  background-position: 100% 100%;
  &:hover {
    color: #0d2286;
  }
`;

export const Underline = styled.div`
  display: inline-block;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 83%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 110% 88%;
  }`

  export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `

  export const Data = styled.span`
    border-top: 1px solid #e7f5fd;
    padding: 1em 0;
    color: #1a0e45;
    font-size: 1em;
    font-weight: 500;
  `
export const DataHeader = styled.span`
border-top: 1px solid #e7f5fd;
padding: 0.5em 0;
color: #1a0e45;
background: #ECB241;
font-size: 1.2em;
font-weight: 500;
`

  export const NoActivity = styled.div`
    color: #1a0e45;
    font-weight: bold;
    font-size: 1em;
    background: #66c1f9;
    padding: 1em;
    grid-column: 1/-1;
    margin: 1em;
  `