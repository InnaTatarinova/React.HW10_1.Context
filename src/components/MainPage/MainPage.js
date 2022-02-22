import React from "react";
import { ThemeContext } from "../contextThemeApi";

const size = {
    width: "100%",
    height: "300px"
}

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {(value) => {
                        console.log(value)
                        return (
                            <div style={{ backgroundColor: value.background, ...size }}>
                            </div>
                        )
                    }
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default MainPage;