import styled from '@emotion/styled';

export const BarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #fefae1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 13px;
`;

export const BarFill = styled.div`
  background-color: #bd8025;
  width: 100%;
  transition: all 0.3s ease-out;
`;

export const BarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
