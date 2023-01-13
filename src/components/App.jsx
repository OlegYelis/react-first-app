import React, { useState } from 'react';
import { Costs } from './Costs/Costs';
import { NewCost } from './NewCost/NewCost';

const INITIAL_COSTS = [
  {
    date: new Date(2021, 2, 13),
    description: 'Холодильник',
    amount: 999.9,
  },
  {
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1999.9,
  },
  {
    date: new Date(2021, 8, 19),
    description: 'Iphone',
    amount: 1005,
  },
];

export const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = cost => {
    console.log(cost);
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
