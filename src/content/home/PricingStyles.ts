import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  background-color: #fff;
`;

export const Heading = styled.h2`
  font-size: 34px;
  color: #0c084b;
  margin-bottom: 0;
  text-align: center;
  > div {
    width: 50px;
    margin: 0 auto;
    height: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #00b7a8;
  }
`;

export const CardRow = styled.div`
  max-width: 1200px;
  min-height: 200px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 5px;
  border: solid 3px transparent;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  &:hover {
    border: solid 3px #00b7a8;
  }
`;
