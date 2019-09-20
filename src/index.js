import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App";

export default App;

if (typeof document !== "undefined") {
  document.title = "Ryo Togashi";
  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  render(App);

  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
