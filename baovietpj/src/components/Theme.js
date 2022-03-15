import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    backgroundcolor: '#d9caca',
    border: '2px solid red'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    backgroundcolor: '#333',
    border: '2px solid blue'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color : ${props => props.theme.body};
    }
`;