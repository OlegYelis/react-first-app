import React, { useState } from 'react';
import { CostForm } from './CostForm';
import { NewCostWrapper } from './NewCost.styled';

export const NewCost = ({ onAddCost }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveCostDataHandler = inputCostData => {
    onAddCost(inputCostData);
    setIsFormOpen(false);
  };

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <NewCostWrapper>
      {isFormOpen ? (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={closeFormHandler}
        />
      ) : (
        <button onClick={openFormHandler}>Add new costs</button>
      )}
    </NewCostWrapper>
  );
};
