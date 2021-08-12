import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.colors.background };
  width: 100%;
  height: 3rem;
`
export const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  width: 8%;
`
