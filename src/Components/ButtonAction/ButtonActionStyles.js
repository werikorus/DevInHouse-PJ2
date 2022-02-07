import styled from "styled-components";

export const Button = styled.button(props =>({
  height: props.height,
  width: props.width,
  border: props.border,
  fontSize: props.size,
  borderRadius: props.borderRadius,
  alignItems: "center",
  justifyContent: "center",
  display: "flex"
}));
