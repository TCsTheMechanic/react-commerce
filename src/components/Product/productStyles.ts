import styled from "styled-components";

export const ProductComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0 .1rem 1rem -.5rem #000000;
  margin: 1rem;
`

export const ProductPicture = styled.div`
  display: flex;
  width: 14rem;
  height: 15rem;
  border-radius: 1rem;
  box-shadow: 0 .1rem 1rem -.5rem #000000;
  padding: .5rem;
  margin: 1rem;
`

export const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem 0 1rem 0;
  width: 11rem;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 1rem;
  background: ${ props => props.theme.colors.primary };
  color: #F5F5F5;
  cursor: pointer;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductTitle = styled.div``

export const ProductValue = styled.div``
