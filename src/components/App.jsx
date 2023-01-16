import React, { useState } from 'react';
import { Costs } from './Costs/Costs';
import { NewCost } from './NewCost/NewCost';

const INITIAL_COSTS = [
  {
    date: new Date(2023, 2, 13),
    description: 'Refrigerator',
    amount: 999.9,
  },
  {
    date: new Date(2023, 11, 25),
    description: 'MacBook',
    amount: 1299.5,
  },
  {
    date: new Date(2023, 8, 19),
    description: 'Phone',
    amount: 750.0,
  },
];

export const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = cost => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};
