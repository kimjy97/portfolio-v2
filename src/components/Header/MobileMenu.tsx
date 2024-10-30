import { menuListArr } from './MenuList';
import styled from 'styled-components';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import smoothScrollTo from '@utils/smoothScrollTo';
import { useEffect, useRef } from 'react';
import CloseSVG from '@public/svgs/cross.svg';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleClickMenu = async (str: string) => {
    const targetSection = document.getElementById(str);
    if (targetSection) {
      onClose();
      const targetPosition = targetSection.offsetTop;
      await smoothScrollTo(targetPosition, 450);
      router.replace(`/?section=${str}`, { scroll: false });
    }
  }

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <Container $isOpen={isOpen} ref={containerRef}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <MenuWrapper>
          {menuListArr.map((i: string) => (
            <MenuItem
              key={i}
              className={section === i ? 'active' : ''}
              onClick={() => handleClickMenu(i)}
            >
              {i.toUpperCase()}
            </MenuItem>
          ))}
        </MenuWrapper>
      </Container>
    </>
  );
};

export default MobileMenu;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

  z-index: 9999;
  transition: opacity 100ms ease-out, visibility 100ms ease-out;
`
const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  background-color: rgb(34, 30, 54);
  box-shadow: ${({ $isOpen }) => $isOpen ? '-2px 0 24px rgba(0, 0, 0, 0.3)' : 'none'};
  transition: transform 100ms ease-out;
  z-index: 10001;
  overflow: hidden;
  
  @media (min-width: 769px) {
    display: none;
  }
`
const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  background: none;
  border: none;
  opacity: 0.6;
  
  color: #fff;
  
  cursor: pointer;
  transition: opacity 70ms ease-out;

  &:hover {
    opacity: 1;
  }
`
const CloseIcon = styled(CloseSVG)`
  width: 1.125rem;
  height: 100%;

  fill: #ffffff;
  opacity: 1;

  transition: 100ms;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem;
  gap: 1rem;
`
const MenuItem = styled.div`
  padding: 1rem 1.5rem;

  opacity: 0.6;
  cursor: pointer;
  border-radius: 0.75rem;
  color: #fff;

  font-size: 1.25rem;
  font-weight: 600;
  font-family: var(--font-poppins);

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
  }
`