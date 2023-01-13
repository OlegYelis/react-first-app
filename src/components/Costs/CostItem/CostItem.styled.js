import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #bd8025;
  border-radius: 12px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

export const Title = styled.h2`
  color: #fefae1;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #fefae1;
  background-color: #2a5b84;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a5b84;
  color: #fefae1;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const Month = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const Year = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

export const Day = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;
