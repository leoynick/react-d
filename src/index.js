import React from "react";

import { Div } from "./styles";

export default ({ children, ...props }) => <Div {...props}>{children}</Div>;
