import { BarFill, BarInner, BarLabel, BarWrapper } from './DiagramBar.styled';

export const DiagramBar = ({ value, maxValue, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <BarWrapper>
      <BarInner>
        <BarFill style={{ height: barFillHeight }} />
      </BarInner>
      <BarLabel>{label}</BarLabel>
    </BarWrapper>
  );
};
