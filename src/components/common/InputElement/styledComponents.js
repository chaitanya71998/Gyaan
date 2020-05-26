import styled from "./node_modules/@emotion/styled";


export const Input = styled.input`
    width: 320px;
    height: 40px;
    border-radius: 2px;
    border: solid 1px #7e858e;
    background-color:${props =>
        props.error ? '#ff0b37' : '#ffffff'};
    ` 