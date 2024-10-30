import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
  name: string;
  handleVisible?: (bool: boolean) => void;
  onScroll?: (progress: number) => void;
  full?: boolean;
}

const SectionContainer = ({ children, name, handleVisible, onScroll, full }: IProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleThreshold = windowHeight * 0.7;

        if (rect.top <= visibleThreshold && rect.bottom >= visibleThreshold) {
          if (!isInView) {
            setIsInView(true);
            handleVisible && handleVisible(true);

            const currentPath = window.location.pathname;
            const currentQuery = new URLSearchParams(window.location.search);
            const currentSection = currentQuery.get('section');

            if (currentSection !== name) {
              router.replace(`${currentPath}?section=${name}`, { scroll: false });
            }
          }
        } else {
          if (isInView) {
            setIsInView(false);
          }
        }
      }
    };

    const handleScroll = () => {
      checkVisibility();

      if (ref.current && onScroll) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = scrollPosition + rect.top;
        const sectionHeight = rect.height;
        const fadeStartPosition = sectionTop + sectionHeight - 600;

        if (scrollPosition >= fadeStartPosition && scrollPosition <= sectionTop + sectionHeight) {
          const fadeDistance = 600;
          const rawProgress = (scrollPosition - fadeStartPosition) / fadeDistance;
          const progress = 1.2 - Math.pow(rawProgress, 0.5);
          onScroll(Math.max(0.2, Math.min(1, progress)));
        } else if (scrollPosition < fadeStartPosition) {
          onScroll(1);
        } else {
          onScroll(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [name, router, handleVisible, onScroll, isInView]);

  return (
    <Container ref={ref} id={name} className={full ? 'full' : ''}>
      {children}
    </Container>
  );
};

export default SectionContainer;

const Container = styled.section`
  position: relative;
  min-height: 100vh;

  &.full {
    height: 100vh;
  }
`;