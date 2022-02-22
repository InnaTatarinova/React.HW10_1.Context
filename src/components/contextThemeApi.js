import React from "react";

export const themes ={
    blue:{
        background: "blue"
    },
    red:{
        background: "red"
    }
}


export const ThemeContext = React.createContext(themes.blue);