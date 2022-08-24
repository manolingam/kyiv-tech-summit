import React, { Component, createContext } from 'react';

export const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    isUkraineVersion: false
  };

  switchToEnglish = () => {
    this.setState({ isUkraineVersion: false });
  };

  switchToUkrainian = () => {
    this.setState({ isUkraineVersion: true });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          switchToEnglish: this.switchToEnglish,
          switchToUkrainian: this.switchToUkrainian
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
