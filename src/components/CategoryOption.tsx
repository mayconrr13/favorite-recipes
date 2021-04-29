import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { Container } from '../styles/components/CategoryOption';

interface CategoryOptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const OptionBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CategoryOptionsProps
> = ({ label, ...rest }, ref) => {
  return (
    <Container>
      <p>{label}</p>
      <input type="radio" ref={ref} {...rest} />
      <span />
    </Container>
  );
};

export const CategoryOption = forwardRef(OptionBase);
