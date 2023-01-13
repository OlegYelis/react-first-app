import { Costs } from './Costs/Costs';
import { NewCost } from './NewCost/NewCost';

export const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 13),
      title: 'Холодильник',
      price: 999.9,
    },
    {
      date: new Date(2021, 11, 25),
      title: 'MacBook',
      price: 1999.9,
    },
    {
      date: new Date(2021, 8, 19),
      title: 'Iphone',
      price: 1005,
    },
  ];

  const addCostHandler = cost => {
    console.log(cost);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};
