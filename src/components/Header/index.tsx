'use client'

import styled from 'styled-components';
import MenuList from '@components/Header/MenuList';
import Logo from '@components/Header/Logo';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <MenuList />
    </Container>
  )
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;

  background-color: transparent;
  
  z-index: 10000;
  
  @media (max-width: 768px) {
    height: 3.75rem;
    padding: 0;
    padding-left: 0.375rem;

    backdrop-filter: blur(40px);
  }
`
