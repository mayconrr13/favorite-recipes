import { Container } from '../styles/components/Input';

interface InputProps {
  id: string;
  placeholder: string;
}

export const Input = ({ id, placeholder }: InputProps): JSX.Element => {
  return (
    <Container>
      <label htmlFor={id}>{placeholder}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </Container>
  );
};
