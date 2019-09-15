import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import "./app.scss";

addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
