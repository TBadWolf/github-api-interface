import React from "react";
import ReactDOM from "react-dom";
import * as S from "./styled";

import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
