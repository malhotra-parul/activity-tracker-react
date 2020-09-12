
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    display: block; 
    overflow: auto; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 999; 
`;

export const Content = styled.div`
    margin: 15% auto;
    background-color: #fbfbfe;
    border-radius: 0.25rem;
    width: 60vw;
    padding: 1.5rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
`
