import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import "./app.scss";

addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="content">
        <Header />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
        <Footer />
      </div>
    </Root>
  );
}

export default App;
