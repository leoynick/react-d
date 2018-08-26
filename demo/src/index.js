import React, { Component } from "react";
import { render } from "react-dom";

import Div from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>This is a Demo</h1>
        <Div x3f3 m3f2 l3f1 xl3f1>
          Hello Div
        </Div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
