import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  border: solid 1px #ccc;
  background-color: #fff;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  padding: 10px;
  max-width: 1200px;
  font-size: 18px;
  font-weight: 300;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const NavigationContainer = styled.div`
  width: auto;
  > ul {
    display: flex;
    align-items: center;
    & li {
      margin: 0 15px;

      display: block;
    }
    & li a {
      padding: 28px 15px;
      color: #0c084b;
      border-bottom: 5px solid transparent;
      text-decoration: none;
    }
    & li a:hover {
      border-bottom: 5px #00b7a8 solid;
    }
  }
`;

export const LoginLink = styled.a`
  border: solid 2px #00b7a8;
  padding: 10px 20px;
  color: #00b7a8;
  margin-right: 20px;
  border-radius: 5px;
  &:hover {
    background-color: #00b7a8;
    color: #fff;
  }
`;
