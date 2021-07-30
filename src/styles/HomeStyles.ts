import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  background-color: #fff;
`;

export const Row = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextColumn = styled.div`
  padding: 20px;
  > h1 {
    font-size: 42px;
    color: #00b7a8;
  }
  > p {
    color: #0c084b;
    font-weight: 700;
  }
  > a {
    background-color: #00b7a8;
    padding: 15px 25px;
    margin-top: 10px;
    border-radius: 5px;
    color: #fff;
  }
`;
