import { useState } from 'react';
import smoothScrollTo from '@utils/smoothScrollTo';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import HambugerSVG from '@public/svgs/hamburger.svg';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';

export const menuListArr: string[] = ['intro', 'about', 'stacks', 'projects', 'contact'];

const MenuList = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  const handleClickMenu = async (str: string) => {
    const targetSection = document.getElementById(str);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop;
      await smoothScrollTo(targetPosition, 450);
      router.replace(`/?section=${str}`, { scroll: false });
    }
  }

  return (
    <Container>
      <Wrapper>
        {menuListArr.map((i: string) =>
          <Menu
            key={i}
            className={section === i ? 'active' : ''}
            onClick={() => handleClickMenu(i)}
          >
            {i.toUpperCase()}
          </Menu>
        )}
      </Wrapper>
      <Hamburger onClick={() => setIsMobileMenuOpen(true)}>
        <HamburgerIcon />
      </Hamburger>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </Container>
  )
};

export default MenuList;

const Container = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;

  font-family: var(--font-poppins);

  @media (max-width: 768px) {
    &>div:first-child {
      display: none;
    }
    &>div:nth-child(2) {
      display: flex;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
const Menu = styled.li`
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.6;
  cursor: pointer;
  border-radius: 0.75rem;
  user-select: none;
  transition: 70ms ease-out;
  
  &.active {
    opacity: 1;
    background-color: #cec4ff1c;
    backdrop-filter: blur(40px);
  }

  &:not(.active):hover {
    opacity: 1;
    background-color: #cec4ff0d;
    backdrop-filter: blur(40px);
  }
`
const Hamburger = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1/1;

  cursor: pointer;
`
const HamburgerIcon = styled(HambugerSVG)`
  width: 1.375rem;
  height: 1.375rem;
`