import { Costs } from './Costs/Costs';

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

  return (
    <div>
      <Costs costs={costs} />
    </div>
  );
};
