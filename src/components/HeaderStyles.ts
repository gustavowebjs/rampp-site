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
    @media (max-width: 769px) {
      display: none;
    }
  }
`;

export const LoginLink = styled.a`
  border: solid 2px #00b7a8;
  padding: 10px 20px;
  color: #00b7a8;
  border-radius: 5px;
  &:hover {
    background-color: #00b7a8;
    color: #fff;
  }
`;

export const NavMobile = styled.div`
  transition: visibility 0s, opacity 0.5s linear;
  display: none;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0c084b;
  color: #fff;
  width: 100%;
  min-height: 50%;
  z-index: 2;
  > div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  > div button {
    cursor: pointer;
    border: none;
    color: #fff;
    background: transparent;
    position: relative;
    top: 30px;
    right: 30px;
    > svg {
      font-size: 32px;
    }
  }
  > ul li {
    padding: 15px 20px;
    font-size: 32px;
    display: block;
  }
  > ul li a {
    text-decoration: none;
    font-weight: 700;
  }
`;

export const ButtonNavMobile = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  font-size: 22px;
  > svg {
    font-size: 32px;
    color: #00b7a8;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
