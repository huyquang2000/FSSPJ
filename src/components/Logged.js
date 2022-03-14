import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";

const Button = styled.button`
    background: transparent;
    border-radius: 3px; 
    background-color: ${(props) => props.theme.backgroundcolor}
`;

const StyleDiv = styled.div`
    color: ${(props) => props.theme.fontColor }
`

function Logged() {
    const [theme, setTheme] = useState("dark");
    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div>
                <Button>
                    <button  className='toggle-theme btn-inp' onClick={() => themeToggle()}><StyleDiv>Theme:{theme}</StyleDiv> </button>
                </Button>
            </div>
        </ThemeProvider>
    )

}

export default Logged;