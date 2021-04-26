import { Container } from '../styles/components/CategoryOption';

interface CategoryRadioProps {
  category: string;
  id: string;
}

export const CategoryOption = ({
  category,
  id,
}: CategoryRadioProps): JSX.Element => {
  return (
    <Container>
      <p>{category}</p>
      <input type="radio" name="category" id={id} />
      <span />
    </Container>
  );
};
