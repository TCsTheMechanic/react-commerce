import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${ props => props.theme.colors.primary };
  width: 100%;
`
