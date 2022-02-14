import React from "react";
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from "./routes";

import "styles/App.scss";
import "styles/universal.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
