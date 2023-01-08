import { CostItem } from 'components/CostItem/CostItem';
import { CostsWrapper } from './Costs.styled';

export const Costs = ({ costs }) => {
  return (
    <CostsWrapper>
      {costs.map(item => (
        <CostItem date={item.date} title={item.title} price={item.price} />
      ))}
    </CostsWrapper>
  );
};
