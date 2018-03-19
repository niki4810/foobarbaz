import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/app";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/fetch-user-details";
import {Provider} from "react-redux";
import { ThemeProvider } from 'react-jss'

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const darkTheme = {
  background: "#20262e",
  color: "#fff"
};
const liteTheme = {
  color: "#666",
  background: "#fff"
};

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "lite"};
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
  _getTheme() {
    const {theme} = this.state;
    switch (theme) {
      case "dark":
        return darkTheme;
      default:
        return liteTheme;
    }
  }

  handleThemeChange(ev) {
    this.setState({
      theme: ev.currentTarget.value
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={this._getTheme()}>
          <App handleThemeChange={this.handleThemeChange} selectedTheme={this.state.theme}/>
        </ThemeProvider>
      </Provider>
    );
  }
}
ReactDOM.render( <Root/> , document.getElementById('root'));
registerServiceWorker();
