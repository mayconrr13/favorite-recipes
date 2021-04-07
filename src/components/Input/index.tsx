import React from 'react'
import { FiX } from 'react-icons/fi';

import { Container } from './styles'

interface Props {
  name: string;
  withLabel?: boolean;
  hasCloseIcon?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export const Input = ({ name, withLabel = true, hasCloseIcon = false }: InputProps) => {
  return (
    <Container hasCloseIcon={hasCloseIcon}>
      {withLabel && <label htmlFor={name}>{name}</label>}
      <div>
        <input type="text" id={name} placeholder={name} />
        {hasCloseIcon && <FiX />}
      </div>
    </Container>
  )
}
