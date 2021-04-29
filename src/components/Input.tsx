import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, label, ...rest },
  ref,
) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} placeholder={label} ref={ref} />
    </Container>
  );
};

export const Input = forwardRef(InputBase);
