import React from 'react';
import { ThemeContext, themes } from '../contextThemeApi';
import MainPage from '../MainPage/MainPage';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.blue
    }

  }
  handleClick() {
    this.setState(
      state => ({
        theme:
          state.theme === themes.blue
            ? themes.red
            : themes.blue,
      })
    )
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>
          <button onClick={this.handleClick.bind(this)}>
            Blue/Red
          </button>
          <MainPage value={this.state.theme}/>
        </ThemeContext.Provider>

      </div>
    )
  }

}

export default App;
