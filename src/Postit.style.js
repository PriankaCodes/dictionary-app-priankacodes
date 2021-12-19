import styled from "styled-components";

export const Postit = styled.div`
  display: inline-block;
  margin: 20px;
  border: 5px white;
  border-style: dashed double;
  width: ${(props) => props.width}
  height: ${(props) => props.height}
  overflow: scroll;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transform: ${(props) => props.transform};
`;
