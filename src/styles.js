import styled from "styled-components";

const minWidth = {
  sm: "min-width: 576px",
  md: "min-width: 768px",
  lg: "min-width: 992px",
  xl: "min-width: 1200px"
};

const addWidth = () => {
  // TODO: ADD WIDTH ACCORDING TO RESOLUTION
};

const mapBreakpoints = () => props =>
  Object.entries(minWidth).map(
    ([key, value]) => `
      @media(${value}) {
        ${addWidth}
      }`
  );

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  ${mapBreakpoints};
`;
