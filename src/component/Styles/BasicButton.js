import styled, { css } from 'styled-components'

export const Button = styled.button`
  border:none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 311px;
  min-height: 56px;
  color: #FFFFFF;
  background: #026C00;
  flex-grow: 1;
  &:hover {
    background: #079504;
  }
  &:active {
    background: #013C00
  }
  &:disabled {
    background: #B7D0B6
  }
  
  ${props => props.Secundary && css`
    background: #F7C346;
    color: #000000;
    &:hover {
      background: #FFDF77;
    }
    &:active {
      background: #DCAC0D
    }
    &:disabled {
    background: #FFE58D;
    color: #FFFFFF;
  }
  `}
`;

export const IconBox = styled.span`
/* display: flex; */
/* flex-grow: 0; */
/* background: pink; */
`
