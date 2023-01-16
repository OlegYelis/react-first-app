import { DiagramWrapper } from './Diagram.styled';
import { DiagramBar } from './DiagramBar/DiagramBar';

export const Diagram = ({ dataSets }) => {
  const dataSetsValues = dataSets.map(data => data.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <DiagramWrapper>
      {dataSets.map(data => (
        <DiagramBar
          key={data.label}
          value={data.value}
          maxValue={maxMonthCosts}
          label={data.label}
        />
      ))}
    </DiagramWrapper>
  );
};
