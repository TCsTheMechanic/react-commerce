import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: ${ props => props.theme.colors.primary };
  width: 100%;
  height: 3rem;
`
