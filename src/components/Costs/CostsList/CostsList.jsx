import { CostItem } from './CostItem/CostItem';
import { Fallback, List } from './CostsList.styled';

export const CostsList = ({ costs }) => {
  if (costs.length === 0) {
    return <Fallback>There are no expenses this year</Fallback>;
  }

  return (
    <List>
      {costs.map((cost, index) => (
        <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          key={index}
        />
      ))}
    </List>
  );
};
