import React, { Component, createContext } from 'react';

export const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    isUkraineVersion: false
  };

  toggleUkraineVersion = () => {
    this.setState((prevState) => ({
      isUkraineVersion: !prevState.isUkraineVersion
    }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleUkraineVersion: this.toggleUkraineVersion
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
