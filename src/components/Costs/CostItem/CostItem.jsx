import { CostDate } from './CostDate';
import { ItemWrapper, Description, Title, Price } from './CostItem.styled';

export const CostItem = ({ date, description, amount }) => {
  return (
    <ItemWrapper>
      <CostDate date={date} />
      <Description>
        <Title>{description}</Title>
        <Price>${amount}</Price>
      </Description>
    </ItemWrapper>
  );
};
