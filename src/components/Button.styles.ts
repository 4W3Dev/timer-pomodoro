import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'successful'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  successful: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 0.5rem 1.25rem;
  border: 0;
  border-radius: 8px;
  margin: 4px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
