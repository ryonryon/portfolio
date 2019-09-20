import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "components/Router";

import "./app.scss";

class App extends React.Component {
  componentWillMount() {
    document.title = "Ryo Togashi";
  }

  render = () => (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
