import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { Container } from '../styles/components/LevelOption';

interface LevelOptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LevelOptionBase: ForwardRefRenderFunction<
  HTMLInputElement,
  LevelOptionsProps
> = ({ label, ...rest }, ref) => {
  return (
    <Container>
      <input type="radio" ref={ref} {...rest} />
      <span />
      <p>{label}</p>
    </Container>
  );
};

export const LevelOption = forwardRef(LevelOptionBase);
