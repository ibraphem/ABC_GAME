import styled from "styled-components";


export const StyledHeader = styled.header`
    background: #79071e;
    text-align: center;
    margin-bottom: 30px;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 100;
    p {
        color: #fff;
        font-size: 30px;
    }
    .button {
        cursor: pointer;
        background-image: linear-gradient(180deg, #fff, #87F1ff);
        border: 2px solid #d3855;
        box-shadow: 0px, 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        padding: 0 40px;
    }
    .button:hover {
        background-color: #000;
    }
`