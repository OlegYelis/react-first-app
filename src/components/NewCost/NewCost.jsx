import { CostForm } from './CostForm';
import { NewCostWrapper } from './NewCost.styled';

export const NewCost = ({ onAddCost }) => {
  const saveCostDataHandler = inputCostData => {
    onAddCost(inputCostData);
  };

  return (
    <NewCostWrapper>
      <CostForm onSaveCostData={saveCostDataHandler} />
    </NewCostWrapper>
  );
};
