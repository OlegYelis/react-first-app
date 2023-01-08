import { CostDate } from './CostDate';
import { ItemWrapper, Description, Title, Price } from './CostItem.styled';

export const CostItem = ({ date, title, price }) => {
  return (
    <ItemWrapper>
      <CostDate date={date} />
      <Description>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Description>
    </ItemWrapper>
  );
};
